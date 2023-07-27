import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useScrollTrigger, Zoom, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define the prop types for the ScrollToTopBtn component
interface ScrollToTopProps {
    window?: () => Window;
    children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));

const ScrollTopBar: React.FC<ScrollToTopProps> = (props: ScrollToTopProps) => {
    const classes = useStyles();
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        const anchor = document.querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <Zoom in={trigger}>
            <div
                onClick={() => handleClick()}
                role="presentation"
                className={classes.root}
            >
                {children}
            </div>
        </Zoom>
    );
};

const ScrollToTopBtn: React.FC = () => {
    return (
        <ScrollTopBar>
            <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTopBar>
    );
};

export default ScrollToTopBtn;
