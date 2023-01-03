import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, sourceCode }) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
      <a target="_blank" href={link}>
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md: mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md mb-4 dark:border-white">
              {item}
            </span>
          ))}
        </p>
        <div className="flex flex-wrap gap-2 font-semibold">
          <a
            className="cursor-pointer hover:underline"
            target="_blank"
            href={link}
          >
            Live Preview
          </a>
          <a
            className="cursor-pointer hover:underline"
            target="_blank"
            href={sourceCode}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
export default PortfolioItem;
