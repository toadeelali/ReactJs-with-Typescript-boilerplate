export type TNavigationButtonDirection = 'prev' | 'next';
export interface INavigationButton {
  callback: () => void;
  disabled: boolean;
  directionIcon: TNavigationButtonDirection;
}

export interface IPageButton {
  pageNumber: number;
  isActive: boolean;
  callback: () => void;
}

export interface IPagination {
  totalResults: number;
  resultsPerPage?: number;
  label: string;
  onChange: (activePage: number) => void;
}
