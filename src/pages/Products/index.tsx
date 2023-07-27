import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopBtn from "../../components/ScrollToTop";
import ProductList from "../../components/ProductList";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/Product/ProductThunks";

const Products: React.FC = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Layout>
                <ProductList />
                <ScrollToTopBtn />
            </Layout>
            {/* <Footer /> */}
        </>
    );
};

export default Products;
