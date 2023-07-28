import React, { useEffect, useRef } from "react";
import { Avatar, Box, Container, Grid, Toolbar } from "@mui/material";
import Header from "../../components/Header";

//Home Slders
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import image1 from "../../static/img/slide-01.jpg";
import image2 from "../../static/img/slide-02.jpg";
import image3 from "../../static/img/slide-03.jpg";

//secont top product
import { Typography, Button } from "@mui/material";
import prod1 from "../../static/img/product-01.jpg";
import prod2 from "../../static/img/product-02.jpg";
import prod3 from "../../static/img/product-03.jpg";
import { Link } from "react-router-dom";

//rating section
import Rating from "@mui/material/Rating";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box component={"section"} style={{ width: "100%" }} sx={{ p: 0 }}>
        <Toolbar />
        <MySlider />
        <SecondBanner />
        <AboutSection /> 
        <CustomerReviewSection />
         <ProductSlider />
        <AboutUsWithImg />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Home;
//About us with image

const aboutusDetails = {
  title: "About us",
  image: prod1, // Replace with the image path of the aboutus
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget elit arcu.adipiscing elit. Nullam eget elit arcu.adipiscing elit. Nullam eget elit arcu.",
};

const useStylesAboutUs = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(4),
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  aboutusImageContainer: {
    display: "flex",
    justifyContent: "center", // Center the image horizontally
    alignItems: "center", // Center the image vertically
    width: "50%", // Half of the container width
    padding: theme.spacing(8),
  },
  aboutusImage: {
    maxWidth: "80%",
    maxHeight: "80%",
    borderRadius: theme.spacing(2),
  },
  aboutusDetails: {
    width: "50%", // Half of the container width
    padding: theme.spacing(2),
    textAlign: "left", // Center the text content
  },
  aboutusName: {
    fontSize: "3rem", // Big title
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  aboutusDescription: {
    fontSize: "1rem",
  },
}));

const AboutUsWithImg = () => {
  const classes = useStylesAboutUs();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} className={classes.aboutusImageContainer}>
        <img
          src={aboutusDetails.image}
          alt={aboutusDetails.title}
          className={classes.aboutusImage}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.aboutusDetails}>
        <Box>
          <Typography variant="h1" className={classes.aboutusName}>
            {aboutusDetails.title}
          </Typography>
          <Typography variant="body1" className={classes.aboutusDescription}>
            {aboutusDetails.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
//product detail section

const productDetails = [
  {
    id: "product-01",
    image: prod1,
    name: "Product 1",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    stock: 10,
  },
  {
    id: "product-02",
    image: prod2,
    name: "Product 2",
    detail:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3.8,
    stock: 5,
  },
  {
    id: "product-03",
    image: prod3,
    name: "Product 3",
    detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    rating: 4.2,
    stock: 20,
  },
];
const useStylesProductSlider = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  productSliderItem: {
    display: "flex",
    alignItems: "center",
    // Add any additional styles for the product slider item here
  },
  rootForConteiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px", // Adjust this height as needed
  },
  productImage: {
    width: "50%",
    height: "auto",
  },
  productDetails: {
    width: "50%",
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  productName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  productDetail: {
    marginBottom: theme.spacing(2),
  },
  productRating: {
    marginBottom: theme.spacing(2),
  },
  productStock: {
    color: theme.palette.primary.main,
  },
}));

const ProductSlider = () => {
  const classes = useStylesProductSlider();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={classes.root}>
      {productDetails.map((product, index) => (
        <div key={index} className={classes.productSliderItem}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src={product.image}
                alt={product.name}
                className={classes.productImage}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.productDetails}>
              <Typography variant="h3" className={classes.productName}>
                {product.name}
              </Typography>
              <Typography variant="body1" className={classes.productDetail}>
                {product.detail}
              </Typography>
              <Rating
                value={product.rating}
                precision={0.1}
                readOnly
                className={classes.productRating}
              />
              <Typography variant="body1" className={classes.productStock}>
                In Stock: {product.stock}
              </Typography>
            </Grid>
          </Grid>
        </div>
      ))}
    </Slider>
  );
};

// customer review section
const customerReviews = [
  {
    avatar: "customer1.jpg",
    name: "John Doe",
    comment: "Great product! I love the design and quality.",
    rating: 5,
  },
  {
    avatar: "customer2.jpg",
    name: "Jane Smith",
    comment: "Fast shipping and excellent customer service.",
    rating: 4,
  },
  // Add more customer reviews here
];
const useStylesCustomerReviews = makeStyles((theme: any) => ({
  customerReviewTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  sliderRoot: {
    position: "relative",
  },
  slider: {
    display: "flex",
    alignItems: "center",
  },
  sliderButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1,
    "&:hover": {
      background: "#f5f5f5",
    },
  },
  sliderPrev: {
    left: "-5%",
  },
  sliderNext: {
    right: "-5%",
  },
}));

const CustomerReviewSection: React.FC = () => {
  const classesCustomerReviews = useStylesCustomerReviews();
  const sliderRef = useRef<Slider | null>(null);
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settingsReview = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Typography
        variant="h2"
        className={classesCustomerReviews.customerReviewTitle}
      >
        Customer Reviews
      </Typography>
      <Box className={classesCustomerReviews.sliderRoot}>
        <Slider
          {...settingsReview}
          className={classesCustomerReviews.slider}
          ref={(slider) => (sliderRef.current = slider)}
        >
          {customerReviews.map((review, index) => (
            <CustomerReview key={index} {...review} />
          ))}
        </Slider>
        <div
          onClick={handlePrev}
          className={`${classesCustomerReviews.sliderButton} ${classesCustomerReviews.sliderPrev}`}
        >
          <ChevronLeftIcon />
        </div>
        <div
          className={`${classesCustomerReviews.sliderButton} ${classesCustomerReviews.sliderNext}`}
          onClick={handleNext}
        >
          <ChevronRightIcon />
        </div>
      </Box>
    </Container>
  );
};
const useStylesReview = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  name: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  comment: {
    marginBottom: theme.spacing(1),
  },
}));

interface CustomerReviewProps {
  avatar: string;
  name: string;
  comment: string;
  rating: number;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
  avatar,
  name,
  comment,
  rating,
}) => {
  const classes = useStylesReview();

  return (
    <Box className={classes.root}>
      <Avatar src={avatar} alt={name} className={classes.avatar} />
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
      <Rating value={rating} readOnly />
      <Typography variant="body1" className={classes.comment}>
        {comment}
      </Typography>
    </Box>
  );
};

//about section
const useStylesAbout = makeStyles((theme: any) => ({
  aboutSection: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(6, 0),
    textAlign: "center",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "opacity 0.5s, transform 0.5s",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

const AboutSection: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const classesAbout = useStylesAbout();

  const handleScroll = () => {
    if (aboutSectionRef.current) {
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.8) {
        aboutSectionRef.current.classList.add(classesAbout.visible);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={aboutSectionRef} className={`${classesAbout.aboutSection}`}>
      <Container>
       < Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Welcome to our e-commerce store! We offer the latest fashion trends
          and high-quality products for both men and women. Our hand-picked
          collection includes a wide range of clothing, bags, and accessories.
          Shop now and stay in style with our stunning collection!
        </Typography>
      </Container>
    </Box>
  );
};

//second banner
const bannerData = [
  {
    image: prod1,
    name: "Women",
    info: "Spring 2018",
    link: "product.html",
  },
  {
    image: prod2,
    name: "Men",
    info: "Spring 2018",
    link: "product.html",
  },
  {
    image: prod3,
    name: "Bags",
    info: "New Trend",
    link: "product.html",
  },
];

const SecondBanner: React.FC = () => {
  return (
    <BannerGrid>
      {bannerData.map((item, index) => (
        <BannerBlock key={index} {...item} />
      ))}
    </BannerGrid>
  );
};

const useStylesForGrid = makeStyles((theme: any) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: theme.spacing(4),
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    margin: theme.spacing(2),
  },
  bannerTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  "@media (max-width: 600px)": {
    gridContainer: {
      flexDirection: "column",
    },
  },
}));

const BannerGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStylesForGrid();
  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.bannerTitle}>
        Featured Products
      </Typography>
      <Box className={classes.gridContainer}>{children}</Box>
    </Box>
  );
};

interface BannerBlockProps {
  image: string;
  name: string;
  info: string;
  link: string;
}

const useStylesForGridItem = makeStyles((theme: any) => ({
  block1: {
    position: "relative",
    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  block1Text: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    opacity: "0",
    transition: "opacity 0.3s ease",
    "&:hover": {
      opacity: "1",
    },
  },
  blockName: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  blockInfo: {
    fontSize: "1.2rem",
  },
  shopNowButton: {
    fontSize: "1.2rem",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    marginTop: theme.spacing(1),
  },
}));

const BannerBlock: React.FC<BannerBlockProps> = ({
  image,
  name,
  info,
  link,
}) => {
  const classes = useStylesForGridItem();

  return (
    <Box className={classes.block1}>
      <img src={image} alt={name} />
      <Link to={link} className={classes.block1Text}>
        <Box>
          <Typography variant="h5" className={classes.blockName}>
            {name}
          </Typography>
          <Typography variant="subtitle1" className={classes.blockInfo}>
            {info}
          </Typography>
        </Box>
        <Button variant="contained" className={classes.shopNowButton}>
          Shop Now
        </Button>
      </Link>
    </Box>
  );
};

// slider component

const useStylesSlider = makeStyles({
  root: {
    position: "relative",
    textAlign: "center",
    verticalAlign: "middle",
    width: "100%",
    minHeight: "0",
    backgroundColor: "red",
  },
  sliderImage: {
    width: "100%",
    height: "auto",
  },
  slideContent: {
    position: "absolute",
    right: "20%",
    top: "50%",
    width: "100%",
    transform: "translateY(-50%)",
    opacity: 0,
    transition: "opacity 0.3s, transform 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  active: {
    opacity: 1,
    transform: "translateY(0)",
  },
  slideTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    // color: "#fff",
    marginBottom: "1rem",
  },
  slideSubHeader: {
    fontSize: "1.5rem",
    color: "rgba(0, 0, 0, 0.87)",
    marginBottom: "2rem",
  },
  slideButton: {
    fontSize: "1.2rem",
    color: "rgba(0, 0, 0, 0.87)",
    border: "2px solid #1976d2",
    backgroundColor: "transparent",
    marginTop: "1rem",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
});

const source = [
  {
    id: "ban-01",
    intro: "true",
    img: image1,
    title: "Welcome to Our Beauty Store",
    subheader: "Discover the Latest Beauty Trends",
    buttonLink: "#",
  },
  {
    id: "ban-02",
    intro: "true",
    img: image2,
    title: "Shop the Best Beauty Products",
    subheader: "Quality Products at Affordable Prices",
    buttonLink: "#",
  },
  {
    id: "ban-03",
    intro: "true",
    img: image3,
    title: "Stay Gorgeous and Stylish",
    subheader: "Explore Our Exclusive Collections",
    buttonLink: "#",
  },
];

const SlideItem = (props: any) => {
  const classes = useStylesSlider();
  return (
    <div className={classes.root}>
      <img src={props.img} alt="heroSlide" className={classes.sliderImage} />
      <div
        className={`${classes.slideContent} ${
          props.intro === "true" ? classes.active : ""
        }`}
      >
        <Typography variant="h2" className={classes.slideTitle}>
          {props.title}
        </Typography>
        <Typography variant="h4" className={classes.slideSubHeader}>
          {props.subheader}
        </Typography>
        <Button
          variant="contained"
          className={classes.slideButton}
          component="a"
          href={props.buttonLink}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const MySlider: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {source.map((item) => {
        return (
          <SlideItem
            key={item.id}
            img={item.img}
            intro={item.intro}
            title={item.title}
            subheader={item.subheader}
            buttonLink={item.buttonLink}
          />
        );
      })}
    </Slider>
  );
};
