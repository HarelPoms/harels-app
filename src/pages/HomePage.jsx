import { Box, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import axios from "axios";



const HomePage = () => {
    const [cardsArr, setCardsArr] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("/cards/cards").then(({data})=>{
            console.log("data", data);
            setCardsArr(data);
        }).catch((err)=> {console.log("error from axios " + err);});
    },[])
    const handleDeleteFromInitialCardsArr = async (id) => {
        // let newCardsArr = JSON.parse(JSON.stringify(cardsArr));
        // newCardsArr = newCardsArr.filter((item) => item.id != id);
        // setCardsArr(newCardsArr);
        try{
            setCardsArr((newCardsArr) => newCardsArr.filter((item) => item._id != id));
            await axios.delete("/cards/" + id);
        }
        catch(err){
            console.log("error when deleting " + err.response.data);
        }
    };
    const handleEditFromInitialCardsArr = (id) => {
        navigate(`/edit/${id}`); //localhost:3000/edit/123213
    };

    if(!cardsArr){
        return <CircularProgress />;
    }
    return (
        <Box>
        <Grid container spacing={2}>
            {cardsArr.map((item) => (
            <Grid item xs={4} key={item._id + Date.now()}>
                <CardComponent
                id={item._id}
                img={item.image.url}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                onDelete={handleDeleteFromInitialCardsArr}
                onEdit={handleEditFromInitialCardsArr}
                />
            </Grid>
            ))}
        </Grid>
        </Box>
    );
};

export default HomePage;