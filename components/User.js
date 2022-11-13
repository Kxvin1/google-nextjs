import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          alt="user-img"
          height={50}
          width={50}
          className={`rounded-full cursor-pointer hover:bg-gray-200 p-1 ${className}`}
          onClick={signOut}
        />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={signIn}
          className={`hover:underline bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        >
          Sign In
        </button>
      </>
    );
  }
}
