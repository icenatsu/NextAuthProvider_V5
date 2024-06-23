"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { GoogleProviderButton, GithubProviderButton } from "@/app/Components/Auth/ButtonProvider/ButtonProvider";

const page = () => {
  return (
    <div>
      <GoogleProviderButton />
      <GithubProviderButton />
    </div>
  );
};

export default page;
