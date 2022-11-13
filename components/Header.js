import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 space-x-4">
      {/* Left Part of Header */}
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google/" className="link" target={"_blank"}>
          About
        </Link>
        <Link
          href="https://store.google.com/"
          className="link"
          target={"_blank"}
        >
          Store
        </Link>
      </div>

      {/* Right Part of Header */}
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="link" target={"_blank"}>
          Gmail
        </Link>

        <a
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
