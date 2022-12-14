import Head from "next/head";
import { useRouter } from "next/router";

import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import ImageResults from "../components/ImageResults";

import Response from "../Response";

export default function search({ results }) {
  console.log(results);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <SearchHeader />

      {/* Show image results if on image tab, else show regular results */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  const testData = false; // set to true when testing images (so we don't keep making api requests)
  const data = testData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
