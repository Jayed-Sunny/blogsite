import React from "react";
import Container from "./Container";

type Props = {};

export default function Footer({}: Props) {
    return (
        <footer className="h-8 bg-slate-300">
            <div className="flex items-center w-full h-full">
                <Container>
                    <h6 className="text-xs text-slate-700">
                        Copyright Jayed Hasan Sunny
                    </h6>
                </Container>
            </div>
        </footer>
    );
}
