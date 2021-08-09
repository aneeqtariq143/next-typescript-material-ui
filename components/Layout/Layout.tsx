import React from 'react';
import {LayoutPropsType} from "./LayoutPropsType";


export default function Layout({ children }: LayoutPropsType) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}