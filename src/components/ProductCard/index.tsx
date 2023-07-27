import React from "react";
import { useNavigate } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import {
    Card,
    CardMedia,
    Grid,
    Typography,
    CardActionArea,
    CardContent,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define the interface for the `person` prop
interface Item {
    title: string;
    image: string;
    price: string;
    id: string;
}

// Define the prop types for the ProductCard component
interface ProductCardProps {
    item: Item;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 350,
        [theme.breakpoints.up("sm")]: {
            maxHeight: 400,
        },
    },
    media: {
        height: 140,
        [theme.breakpoints.up("sm")]: {
            height: 200,
        },
    },
}));

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea
                    onClick={() => navigate(`/product-details/${item?.id}`)}
                >
                    <CardMedia
                        className={classes.media}
                        src={item?.image}
                        title={item?.title}
                        component="img"
                        loading="lazy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="h4">
                            <LinesEllipsis
                                text={item?.title}
                                maxLine="1"
                                ellipsis="..."
                                trimRight
                                basedOn="letters"
                            />
                            {/* {item?.title.substring(0, 20)}... */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            ${item?.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default React.memo(ProductCard);
