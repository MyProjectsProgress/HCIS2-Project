import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { TAppDispatch } from "../../redux/store";
import { AddDoctorThunk, IDoctor } from "../Doctor/doctor-slice";

interface AddDoctorProps {
    onClose: () => void;
}

export default function AddDoctor({ onClose }: AddDoctorProps) {
    const dispatch = useDispatch<TAppDispatch>();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const doctorData: IDoctor = {
            name: data.get("firstName") as string,
            username: data.get("username") as string,
            email: data.get("email") as string,
            password: data.get("password") as string,
            specialization: "General",
            licenseNumber: "123456",
            certifications: ["MBBS"],
        };
        dispatch(AddDoctorThunk(doctorData));

        // Call onClose to close the popup
        onClose();
    };

    return (
        <div className="bg-white shadow-md rounded-xl">
            <Container component="main" className="border-2 rounded-xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <PersonAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Doctor
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Full Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="UserName"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Mobile Number"
                                    type="text"
                                    id="number"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: "#7c73e6",
                                "&:hover": { backgroundColor: "#9370DB" },
                            }}
                        >
                            Add
                        </Button>
                        <Grid container justifyContent="flex-end"></Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
