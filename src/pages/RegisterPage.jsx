import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import validateRegisterSchema from "../validation/registerValidation";
import ROUTES from "../routes/ROUTES";

const theme = createTheme();

const RegisterPage = () => {
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [inputsErrorsState, setInputsErrorsState] = useState({});
    const handleBtnClick = async (ev) => {
        try {
            const joiResponse = validateRegisterSchema(inputState);
            setInputsErrorsState(joiResponse);
            if(joiResponse){
                return;
            }
            const { data } = await axios.post(
                "/users/register",
                {
                    "name": inputState.firstName + " " + inputState.lastName,
                    "email": inputState.email,
                    "password": inputState.password
                }
            );
            navigate(ROUTES.LOGIN);
            
        } catch (err) {
            console.log("error from axios in register page", err.response.data);
            toast.error("Oops");
        }
    };
    const handleInputChange = (ev) => {
        let newInputState = JSON.parse(JSON.stringify(inputState));
        newInputState[ev.target.id] = ev.target.value;
        setInputState(newInputState);
    };
    useEffect(() => {
        setInputState((newInputState) => newInputState);
    }, [inputState]);
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <Box component="div" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={inputState.firstName}
                    onChange={handleInputChange}
                    />
                    {inputsErrorsState && inputsErrorsState.firstName && (
                    <Alert severity="warning">
                        {inputsErrorsState.firstName.join("<br>")}
                    </Alert>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={inputState.lastName}
                    onChange={handleInputChange}
                    />
                    {inputsErrorsState && inputsErrorsState.lastName && (
                    <Alert severity="warning">
                        {inputsErrorsState.lastName.join("<br>")}
                    </Alert>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={inputState.email}
                    onChange={handleInputChange}
                    />
                    {inputsErrorsState && inputsErrorsState.email && (
                    <Alert severity="warning">
                        {inputsErrorsState.email.join("<br>")}
                    </Alert>
                    )}
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
                    value={inputState.password}
                    onChange={handleInputChange}
                    />
                    {inputsErrorsState && inputsErrorsState.password && (
                    <Alert severity="warning">
                        {inputsErrorsState.password.join("<br>")}
                    </Alert>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
                </Grid>
                <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleBtnClick}
                >
                Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link to={ROUTES.LOGIN}>
                        <Typography variant="body2">
                        Already have an account? Sign in
                        </Typography>
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
};
export default RegisterPage;
