import {Card, CardActionArea, CardMedia, CardContent, CardHeader, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/*
img, name -> title , price -> subtitle, description
*/

const CardComponent = ({img, name, price, description}) => {
    return (
        <Card sx={{ width: "20rem" }} square raised>
            <CardActionArea>
            <CardMedia
                component="img"
                image={img}
            />
            </CardActionArea>
            <CardHeader title="main title" subheader="sub title"></CardHeader>
            <CardContent>
            <Typography>description</Typography>
            </CardContent>
            <CardActions>
            <Button variant="text" color="primary">
                Buy now
            </Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent