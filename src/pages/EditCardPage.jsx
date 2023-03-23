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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


import ROUTES from "../routes/ROUTES";
import validateEditSchema from "../validation/editValidation";
import validateId from "../validation/idValidation";

const EditCardPage = () => {
  const { id } = useParams();
  const [inputState, setInputState] = useState(null);
  const [inputsErrorsState, setInputsErrorsState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try{
        let isIdValid = validateId({id});
        if (isIdValid) {
          const {data} = await axios.get("/cards/card/"+id);
          console.log(data);
          if(!data){
            //navigate(ROUTES.PAGENOTFOUND);
            return;
          }
          setInputState(data);
        }
        else{
          //navigate(ROUTES.PAGENOTFOUND);
        }
      }
      catch(err){
        console.log(err);
      }
    })();
    
  }, [id]);
  const handleSaveBtnClick = (ev) => {
    const joiResponse = validateEditSchema(inputState);
    setInputsErrorsState(joiResponse);
    console.log(joiResponse);
    
    if (!joiResponse) {
      //move to homepage
      navigate(ROUTES.HOME);
    }
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
          Edit card
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={inputState.image.alt}
          src={inputState.image.url}
        />
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="img"
                label="Image URL"
                name="img"
                autoComplete="img"
                value={inputState.image.url}
                onChange={handleInputChange}
              />
              {inputsErrorsState.img && (
                <Alert severity="warning">
                  {inputsErrorsState.img.map((item) => (
                    <div key={"title-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                value={inputState.title}
                onChange={handleInputChange}
              />
              {inputsErrorsState.title && (
                <Alert severity="warning">
                  {inputsErrorsState.title.map((item) => (
                    <div key={"title-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="subtitle"
                label="Subtitle"
                type="string"
                id="subtitle"
                autoComplete="subtitle"
                value={inputState.subTitle}
                onChange={handleInputChange}
              />
              {inputsErrorsState.price && (
                <Alert severity="warning">
                  {inputsErrorsState.price.map((item) => (
                    <div key={"price-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                autoComplete="description"
                value={inputState.description}
                onChange={handleInputChange}
              />
              {inputsErrorsState.description && (
                <Alert severity="warning">
                  {inputsErrorsState.description.map((item) => (
                    <div key={"description-errors" + item}>{item}</div>
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
export default EditCardPage;
