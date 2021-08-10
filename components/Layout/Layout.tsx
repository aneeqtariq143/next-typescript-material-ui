import React from 'react';
import {LayoutPropsType} from "./LayoutPropsType";
// import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "../../styles/website-theme";
import TopBar from "./TopBar/TopBar";

export default function Layout({children}: LayoutPropsType) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <TopBar />
                <main>{children}</main>
            </ThemeProvider>
        </>
    )
}