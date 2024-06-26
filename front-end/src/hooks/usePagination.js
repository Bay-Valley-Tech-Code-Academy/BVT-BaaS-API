// Alan Ibarra's custom pagination hook
import React from "react";

export function usePagination({ data, itemsPerPage }) {
  const countPerPage = React.useRef(itemsPerPage);
  const [currPage, setCurrPage] = React.useState(1);
  const hasPrev = currPage > 1;
  const hasNext = currPage * countPerPage.current < data.length;
  const currData = data.slice(
    (currPage - 1) * countPerPage.current,
    currPage * countPerPage.current,
  );
  // Added a bit of logic to get the number of pages - Manuel Manriquez
  const numPages = Math.floor(data.length / itemsPerPage + 1);

  function nextPage() {
    if (hasNext) {
      setCurrPage(currPage + 1);
    }
  }
  function prevPage() {
    if (hasPrev) {
      setCurrPage(currPage - 1);
    }
  }
  return {
    currPageItems: currData,
    currPage,
    nextPage,
    prevPage,
    hasPrev,
    hasNext,
    countPerPage: countPerPage.current,
    numPages,
  };
}
