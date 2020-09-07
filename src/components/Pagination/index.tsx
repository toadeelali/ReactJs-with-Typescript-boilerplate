import React, { useState, useEffect, ReactElement } from 'react';

import { Button } from '../core';
import { INavigationButton, IPageButton, IPagination } from './types';

export function NavigationButton({ callback, disabled, directionIcon }: INavigationButton): ReactElement {
  const ariaLabel = directionIcon === 'prev' ? 'Previous' : 'Next';
  const icon = directionIcon === 'prev' ? 'i-arrow-left' : 'i-arrow-right';

  return (
    <Button
      title={ariaLabel}
      size="small"
      layout="link"
      icon={icon}
      callback={callback}
      disabled={disabled}
      aria-label={ariaLabel}
    />
  );
}

export function PageButton({ pageNumber, isActive, callback }: IPageButton): ReactElement {
  return (
    <Button title={`${pageNumber}`} size="pagination" layout={isActive ? 'primary' : 'link'} callback={callback}>
      {pageNumber}
    </Button>
  );
}

export const EmptyPageButton = (): ReactElement => <span className="px-2 py-1">...</span>;

const Pagination = ({ totalResults, resultsPerPage = 10, label, onChange }: IPagination): ReactElement => {
  const [pages, setPages] = useState<(string | number)[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage);
  const FIRST_PAGE = 1;
  const LAST_PAGE = TOTAL_PAGES;
  const MAX_VISIBLE_PAGES = 7;

  function handlePreviousClick() {
    setActivePage(activePage - 1);
  }

  function handleNextClick() {
    setActivePage(activePage + 1);
  }

  useEffect(() => {
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1));
    } else if (activePage < 5) {
      // #1 active pageNumber < 5 -> show first 5
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES]);
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      // #2 active pageNumber >= 5 && < TOTAL_PAGES - 3
      setPages([1, '...', activePage - 1, activePage, activePage + 1, '...', TOTAL_PAGES]);
    } else {
      // #3 active pageNumber >= TOTAL_PAGES - 3 -> show last
      setPages([1, '...', TOTAL_PAGES - 4, TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES]);
    }
  }, [TOTAL_PAGES, activePage]);

  useEffect(() => {
    onChange(activePage);
  }, [activePage, onChange]);

  return (
    <div className="px-3 py-1 rounded-md text-xs">
      {/*
       * This (label) should probably be an option, and not the default
       */}
      <span className="flex items-center font-semibold tracking-wide uppercase">
        Showing {activePage * resultsPerPage - resultsPerPage + 1}-
        {Math.min.apply(null, [activePage * resultsPerPage, totalResults])} of {totalResults}
      </span>

      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label={label}>
          <ul className="inline-flex items-center">
            <li>
              <NavigationButton
                directionIcon="prev"
                disabled={activePage === FIRST_PAGE}
                callback={handlePreviousClick}
              />
            </li>
            {pages.map((p, i) => (
              <li key={p}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    pageNumber={p as number}
                    isActive={p === activePage}
                    callback={() => setActivePage(p as number)}
                  />
                )}
              </li>
            ))}
            <li>
              <NavigationButton directionIcon="next" disabled={activePage === LAST_PAGE} callback={handleNextClick} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
