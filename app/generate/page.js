"use client";

import { useUser } from "@clerk/nextjs";
import { collection, getDoc, writeBatch, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
	Container,
	Box,
	TextField,
	Button,
	Typography,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import { NavBar } from "@/components/NavBar";

export default function Generate() {
	const { isLoaded, isSignedIn, user } = useUser();
	const [flashcards, setFlashcards] = useState([]);
	const [flipped, setFlipped] = useState({});
	const [text, setText] = useState("");
	const [name, setName] = useState("");
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleSubmit = async () => {
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch flashcards");
			}

			const data = await response.json();
			console.log("Fetched data:", data); // Debugging line
			if (data && data.flashcards) {
				setFlashcards(data.flashcards);
			} else {
				console.error("No flashcards data received");
			}
		} catch (error) {
			console.error("Error generating flashcards:", error);
		}
	};

	const handleCardClick = (index) => {
		setFlipped((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const saveFlashcards = async () => {
		if (!name) {
			alert("Please enter a name");
			return;
		}

		const batch = writeBatch(db);
		const userDocRef = doc(collection(db, "users"), user.id);
		const docSnap = await getDoc(userDocRef);

		if (docSnap.exists()) {
			const collectionData = docSnap.data().flashcards || [];
			if (collectionData.find((f) => f.name === name)) {
				alert("Flashcard with this name already exists.");
				return;
			} else {
				collectionData.push({ name });
				batch.set(
					userDocRef,
					{ flashcards: collectionData },
					{ merge: true }
				);
			}
		} else {
			batch.set(userDocRef, { flashcards: [{ name }] });
		}

		const colRef = collection(userDocRef, name);
		flashcards.forEach((flashcard) => {
			const cardDocRef = doc(colRef);
			batch.set(cardDocRef, flashcard);
		});

		await batch.commit();
		handleClose();
		router.push("/flashcards");
	};

	return (
		<>
			<NavBar />
			<Container maxWidth="md">
				<Box
					sx={{
						mt: 4,
						mb: 6,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<TextField
						label="Enter Text"
						variant="outlined"
						fullWidth
						margin="normal"
						value={text}
						onChange={(e) => setText(e.target.value)}
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "white",
								},
								"&:hover fieldset": {
									borderColor: "white",
								},
								"&.Mui-focused fieldset": {
									borderColor: "white",
								},
							},
							"& .MuiInputLabel-root": {
								color: "white",
							},
							"& .MuiInputBase-input": {
								color: "white",
							},
						}}
					/>
					<Button
						variant="contained"
						sx={{
							color: "white",
							backgroundColor: "primary.main",
							"&:hover": {
								backgroundColor: "primary.dark",
							},
						}}
						onClick={handleSubmit}
					>
						Generate Flashcards
					</Button>
				</Box>
				{flashcards.length > 0 && (
					<Box sx={{ mt: 4 }}>
						<Typography variant="h5" align="center" gutterBottom>
							Flashcard Preview
						</Typography>
						<Grid container spacing={3}>
							{flashcards.map((flashcard, index) => (
								<Grid item xs={12} sm={6} md={4} key={index}>
									<Card
										sx={{
											transform: flipped[index]
												? "rotateY(360deg)"
												: "rotateY(0deg)",
											transition: "transform 0.6s",
											transformStyle: "preserve-3d",
											position: "relative",
											height: "150px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
										onClick={() => handleCardClick(index)}
									>
										<CardActionArea>
											<CardContent
												sx={{
													backfaceVisibility:
														"hidden",
													width: "100%",
													height: "100%",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													textAlign: "center",
												}}
											>
												<Typography variant="h6">
													{flipped[index]
														? flashcard.back
														: flashcard.front}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
						<Box
							sx={{
								mt: 4,
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Button
								variant="contained"
								color="secondary"
								onClick={handleOpen}
							>
								Save
							</Button>
						</Box>
					</Box>
				)}
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle> Save the Flashcards</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your Flashcard's Collection
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							label="Collection Name"
							type="text"
							fullWidth
							value={name}
							onChange={(e) => setName(e.target.value)}
							variant="outlined"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={saveFlashcards}>Save</Button>
					</DialogActions>
				</Dialog>
			</Container>
		</>
	);
}
