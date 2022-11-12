import React from "react";
import Header from "../../components/Header";
import { getProviders } from "next-auth/react";
import Image from "next/image";

// client side
export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
              alt="goog"
              width={300}
              height={100}
            />
            <p>Google Next.js Clone</p>
            <button>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
}

// server side
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
