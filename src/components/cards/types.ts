export interface ICardBody {
  className?: string;
  padding?: string;
  children: React.ReactNode;
}

export interface ICard {
  className?: string;
  colored?: boolean;
  children: React.ReactNode;
}

export interface ICardInfo {
  title: string;
  value: string;
  children: React.ReactNode;
  icon?: string;
}
