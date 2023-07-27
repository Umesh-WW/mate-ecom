import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, alpha, Chip, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { ProductDetailsSkeleton } from "../../components/Skeletons";
import { get } from "../../http";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(4),
        justifyContent: "space-around",
        height: "auto",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(10),
        },
    },
    imgContainer: {
        width: "100%",
        height: "auto",
        boxShadow: theme.shadows[3],
    },
    img: {
        width: "100%",
        height: "auto",
    },
    marginTopTwo: {
        marginTop: theme.spacing(2),
    },
    paleText: {
        color: alpha("#333", 0.8),
    },
    letterSpace: {
        letterSpacing: 2.5,
    },
}));

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const classes = useStyles();

    const [isLoaing, setIsLoading] = useState<boolean>(false);
    const [productDetail, setProductDetail] = useState<any>(null);

    const fetchProductDetails = async () => {
        setIsLoading(true);
        try {
            const response = await get(`/products/${id}`);
            const data = await response.data;
            console.log("data", data);
            setProductDetail(data);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
            // setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Layout>
                <Grid container className={classes.container} spacing={8}>
                    {isLoaing ? (
                        <ProductDetailsSkeleton />
                    ) : (
                        <>
                            <Grid item xs={12} sm={6}>
                                <picture>
                                    <img
                                        src={productDetail?.image}
                                        alt={productDetail?.title}
                                        className={classes.img}
                                    />
                                </picture>
                                {/* <div className={classes.imgContainer}>
                            <img src={productDetail?.image} alt={title} />
                        </div> */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.marginTopTwo} variant="h4">
                                    {productDetail?.title}
                                </Typography>

                                <Chip
                                    label={productDetail?.category}
                                    variant="outlined"
                                    className={classes.marginTopTwo}
                                />
                                <Typography
                                    className={classNames(classes.paleText, classes.marginTopTwo)}
                                    variant="body1"
                                >
                                    {productDetail?.description}
                                </Typography>
                                <Typography
                                    className={classes.marginTopTwo}
                                    variant="subtitle2"
                                >
                                    ${productDetail?.price}
                                </Typography>

                                <Button
                                    className={classNames(
                                        classes.letterSpace,
                                        classes.marginTopTwo
                                    )}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                // disabled={pending}
                                // onClick={handleClick}
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Layout>
        </>
    );
};

export default ProductDetails;
