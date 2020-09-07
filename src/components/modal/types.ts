export interface IModal {
  children: React.ReactNode;
  callback: () => void;
  isOpen: boolean;
}

export interface IModalGen {
  children: React.ReactNode;
  className?: string;
}
