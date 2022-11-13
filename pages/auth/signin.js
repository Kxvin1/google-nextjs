import { useRouter } from "next/router";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

// client side
export default function signin({ providers }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const homepage = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
              alt="goog"
              width={300}
              height={100}
              className="w-52 object-cover cursor-pointer"
              onClick={homepage}
            />
            <p className="text-sm italtic my-10 text-center">
              Google Next.js Clone
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
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
