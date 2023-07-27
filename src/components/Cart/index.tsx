import React from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

interface CartProps {
    isCartDrawerOpen: boolean;
    setIsCartDrawerOpen: (isCartDrawerOpen: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ isCartDrawerOpen, setIsCartDrawerOpen }) => {
    return (
        <Drawer
            anchor={'right'}
            open={isCartDrawerOpen}
            onClose={() => setIsCartDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: { xs: "100%", sm: 500 },
                    padding: 1
                },
            }}
        >
            <Box
                role="presentation"
                onClick={() => setIsCartDrawerOpen(false)}
                onKeyDown={() => setIsCartDrawerOpen(false)}
            >
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" padding={1}>
                    <Typography
                        variant="h6"
                    >
                        Your Cart
                    </Typography>
                    <IconButton onClick={() => setIsCartDrawerOpen(false)}>
                        <CloseIcon color="inherit" />
                    </IconButton>
                </Box>
                <Divider />

                <Box margin={1}>
                    <Button disabled variant="contained" sx={{ position: 'absolute', bottom: 20, right: 25 }}>
                        Total: $109.95
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}

export default React.memo(Cart);