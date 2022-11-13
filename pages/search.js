import Head from "next/head";
import { useRouter } from "next/router";

import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
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

      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const testData = true; // set to true when testing (so we don't keep making requests)
  const data = testData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
