import { Box, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import axios from "axios";
import { toast } from "react-toastify";



const HomePage = () => {
    const [cardsArr, setCardsArr] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("/cards/cards").then(({data})=>{
            setCardsArr(data);
        }).catch((err)=> {
            console.log("error from axios " + err);
            toast.error("Oops");
        });
    },[])
    const handleDeleteFromInitialCardsArr = async (id) => {
        // let newCardsArr = JSON.parse(JSON.stringify(cardsArr));
        // newCardsArr = newCardsArr.filter((item) => item.id != id);
        // setCardsArr(newCardsArr);
        try{
            let response = await axios.delete("/cards/" + id);
            if(response.status === 200){
                setCardsArr((newCardsArr) => newCardsArr.filter((item) => item._id != id));
                toast.success("Card deletion successful");
            }
            else{
                toast.error("Card Deletion Failed");
            }
        }
        catch(err){
            console.log("error when deleting " + err.response.data);
            toast.error("Card Deletion Failed");
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
                img={item.image ? item.image.url : ""}
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