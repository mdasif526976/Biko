"use client";

import { Footer } from "flowbite-react";

export default function Footerr() {
  return (
    <Footer container className="">
      <Footer.Copyright by="Biko™" href="#" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
