'use client'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default ({ children }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}
