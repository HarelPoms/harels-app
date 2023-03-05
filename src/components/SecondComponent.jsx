import { Fragment } from "react";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import {Card,CardActionArea,CardActions,CardContent,CardHeader,CardMedia,Divider,Chip} from "@mui/material";

const SecondComponent = () => {
    return (
        <Fragment>
            <Card sx={{ width: "20rem"}} square raised>
            <CardActionArea>
            <CardMedia
                component="img"
                image="https://i.icanvas.com/list-square/waves-PIM14185.jpg"
            />
            </CardActionArea>
            <Divider>
                <Chip label="Art" />
            </Divider>
            <CardHeader title="Title"></CardHeader>
            <CardContent>
                <Typography>price</Typography>
                <Typography>description</Typography>
                <Typography>address</Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                
                <Button variant="contained" color="primary">
                    Buy now
                </Button>
                <Button variant="contained" color="secondary">
                    Rent now
                </Button>
                
            </CardActions>
        </Card>
        </Fragment>
    );
}

export default SecondComponent;