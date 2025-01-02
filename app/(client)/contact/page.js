import React from "react";

import Mylocation from "@/components/my-location-map";
import MySocialMedia from "@/components/my-social-media";
import { BASE_API_URL } from "@/env";

async function Contact() {
  const responeContact = await fetch(`${BASE_API_URL}/contact`);
  const responeLink = await fetch(`${BASE_API_URL}/links`);
  const resultContact = await responeContact.json();
  const resultLink = await responeLink.json();
  return (
    <div className="max-w-screen-2xl mb-10 mx-auto px-4 sm:px-6 lg:px-20 mt-5">
      <MySocialMedia resultContact={resultContact} resultLink={resultLink} />
    </div>
  );
}

export default Contact;
