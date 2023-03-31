import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import { CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import atom from "../logo.svg";



import ROUTES from "../routes/ROUTES";
import validateProfileSchema from "../validation/profileValidation";

const ProfilePage = () => {
    const [inputState, setInputState] = useState(null);
    const [inputsErrorsState, setInputsErrorsState] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
        try{
            const {data} = await axios.get("/users/userInfo");
            console.log(data);
            if(!data){
                navigate(ROUTES.PAGENOTFOUND);
                return;
            }
            let redactedData = {name: data.name, email: data.email, password:data.password, createdAt: data.createdAt, biz: data.biz, isAdmin: data.isAdmin };
            console.log(redactedData);
            setInputState(redactedData);
        }
        catch(err){
            console.log(err);
            toast.error("Oops");
        }
        })();
        
    }, []);
    const handleSaveBtnClick = (ev) => {
        (async () => {
            try{
                const joiResponse = validateProfileSchema(inputState);
                setInputsErrorsState(joiResponse);

                if (!joiResponse) {
                    //await axios.put("/users/userInfo" + id, inputState);
                    //move to homepage
                    navigate(ROUTES.HOME);
                }
            
            }
            catch(err){
                console.log("Error while saving profile " + err);
            }
        })();
    };

    const handleCancelBtnClick = (ev) => {
        //move to homepage
        navigate(ROUTES.HOME);
    };
    const handleInputChange = (ev) => {
        let newInputState = JSON.parse(JSON.stringify(inputState));
        newInputState[ev.target.id] = ev.target.value;
        setInputState(newInputState);
    };

    //ensures the input state is synchronized with the latest character input
    useEffect(() => {
        setInputState((newInputState) => newInputState);
    }, [inputState]);

    if(!inputState){
        return <CircularProgress />;
    }

    return (
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Profile
            </Typography>
            <Box
            component="img"
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
                alt={inputState.alt ? inputState.alt : ""}
                src={inputState.url ? inputState.url : atom}
            />
            <Box component="div" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={inputState.name}
                    onChange={handleInputChange}
                />
                {inputsErrorsState && inputsErrorsState.name && (
                    <Alert severity="warning">
                    {inputsErrorsState.name.map((item) => (
                        <div key={"name-errors" + item}>{item}</div>
                    ))}
                    </Alert>
                )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={inputState.email}
                        onChange={handleInputChange}
                    />
                    {inputsErrorsState && inputsErrorsState.email && (
                        <Alert severity="warning">
                        {inputsErrorsState.email.map((item) => (
                            <div key={"email-errors" + item}>{item}</div>
                        ))}
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
                    autoComplete="password"
                    value={inputState.password}
                    onChange={handleInputChange}
                />
                {inputsErrorsState && inputsErrorsState.password && (
                    <Alert severity="warning">
                    {inputsErrorsState && inputsErrorsState.password.map((item) => (
                        <div key={"password-errors" + item}>{item}</div>
                    ))}
                    </Alert>
                )}
                </Grid>
                <Grid item xs={6}>
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSaveBtnClick}>
                        Save
                    </Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleCancelBtnClick}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    );
};
export default ProfilePage;
