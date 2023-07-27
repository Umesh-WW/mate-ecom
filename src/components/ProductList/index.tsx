import React from "react";
import ProductCard from "../ProductCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductListingSkeleton } from "../Skeletons";
import {
    selectAllProducts,
    selectIsLoading,
} from "../../redux/Product/ProductSelectors";

const renderProductCard = (productList: []) => {
    return productList.map((item: any, index: number) => {
        return <ProductCard key={index} item={item} />;
    });
};

const ProductList = () => {
    const isLoading = useSelector(selectIsLoading);
    const productList = useSelector(selectAllProducts);
    console.log("$$$$$$$$$$$$$$$", isLoading, productList);

    return (
        <Grid container spacing={2}>
            {isLoading && (
                <>
                    <ProductListingSkeleton />
                    <ProductListingSkeleton />
                </>
            )}
            {!isLoading && productList.length && renderProductCard(productList)}
        </Grid>
    );
};

export default ProductList;
