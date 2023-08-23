import Container from "@/components/Container";
import React from "react";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <section className="py-5 mt-12">
                <Container>
                    <h1 className="text-3xl">এটি একটি ব্লগ ওয়েবসাইট</h1>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <p>বিশ্বের সাম্প্রতিক সকল তথ্য সম্পর্কে জানুন আমাদের সাথে</p>
                </Container>
            </section>
            <section className="py-5 mt-6   ">
                <Container>
                    <p>এই ওয়েবসাইটটি NextJS দিয়ে বানানো।</p>
                </Container>
            </section>
        </>
    );
}
