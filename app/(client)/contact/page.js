import React from "react";

import MySocialMedia from "@/components/my-social-media";
import { BASE_API_URL } from "@/env";

async function Contact() {
  const responeContact = await fetch(`${BASE_API_URL}/contact`);
  const resultContact = await responeContact.json();
  const responeLink = await fetch(`${BASE_API_URL}/links`);
  const resultLink = await responeLink.json();
  return (
    <div className="min-h-[50vh] max-w-screen-2xl mb-10 mx-auto px-4 sm:px-6 lg:px-20 mt-5">
      <MySocialMedia resultContact={resultContact} resultLink={resultLink} />
    </div>
  );
}

export default Contact;
