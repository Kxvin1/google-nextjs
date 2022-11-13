/* eslint-disable @next/next/no-img-element */

import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 px-3 space-x-4">
        {results.items?.map((result) => {
          return (
            <div className="mb-12" key={result.link}>
              <div className="group">
                <a href={result.image.contextLink}>
                  {/* image result */}
                  <img
                    className="group-hover:shadow-xl w-full h-60 object-contain"
                    src={result.link}
                    alt="img"
                  />
                </a>
                {/* title of result*/}
                <a
                  className="group-hover:underline"
                  href={result.image.contextLink}
                >
                  <h2 className="truncate text-xl">{result.title}</h2>
                </a>
                {/* display link (truncated) */}
                <a
                  className="group-hover:underline"
                  href={result.image.contextLink}
                >
                  <p className="text-gray-600">{result.displayLink}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sm:ml-[15%] lg:ml-[30%] 2xl:ml-[40%]">
        <PaginationButtons />
      </div>
    </div>
  );
}
