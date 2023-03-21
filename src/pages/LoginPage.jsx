import * as React from 'react';
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import validateLoginSchema from '../validation/loginValidation';
import Alert from "@mui/material/Alert";
import ROUTES from "../routes/ROUTES";

const theme = createTheme();

const LoginPage = () => {

    const [inputState, setInputState] = useState({
        email: "",
        password: "",
    });
    const [loginInputsErrorsState, setLoginInputsErrorsState] = useState({});
    const navigate = useNavigate();
    const handleInputChange = (ev) => {
        let newInputState = JSON.parse(JSON.stringify(inputState));
        newInputState[ev.target.id] = ev.target.value;
        setInputState(newInputState);
    };
    
    useEffect(() => {
        setInputState((newInputState) => newInputState);
    }, [inputState]);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const joiResponse = validateLoginSchema(inputState);
            setLoginInputsErrorsState(joiResponse);
            if(joiResponse){
                return;
            }
            const { data } = await axios.post(
                "/users/login",
                {
                    "email": inputState.email,
                    "password": inputState.password
                }
            );
            localStorage.setItem("token", data.token);
            navigate(ROUTES.HOME);
        }
        catch(err){
            console.log("error from axios", err.response.data);
        }
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            {/* onSubmit={handleSubmit} */}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={inputState.email}
                onChange={handleInputChange}
                />
                {loginInputsErrorsState && loginInputsErrorsState.email && (
                    <Alert severity="warning">
                        {loginInputsErrorsState.email.join("<br>")}
                    </Alert>
                )}
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={inputState.password}
                onChange={handleInputChange}
                />
                {loginInputsErrorsState && loginInputsErrorsState.password && (
                    <Alert severity="warning">
                        {loginInputsErrorsState.password.join("\n")}
                    </Alert>
                )}
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                {/* onClick={handleBtnClick} */}
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={ROUTES.REGISTER}>
                        <Typography variant="body2">
                        Did not have an account? Sign up
                        </Typography>
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
    );
}

export default LoginPage;