import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LoginModal from "./Modals/Login";


export default function TopBar() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2, display: {xs: 'block', lg: 'none'}}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Case Law E-Library
                            </Typography>
                            <LoginModal />
                            <Button color="inherit">
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    sx={{mr: 1}}
                                >
                                    <PersonAddIcon />
                                </IconButton>

                                Signup
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    );
}