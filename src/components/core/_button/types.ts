export type TButtonSizeSupport = 'larger' | 'large' | 'regular' | 'small';

export type TButtonsSize = TButtonSizeSupport | 'pagination';
export type TButton = 'button' | 'submit' | 'reset';
export type TButtonLayout = 'outline' | 'link' | 'primary' | '__dropdownItem';

export interface IButton {
  title: string;
  children?: React.ReactNode | undefined;
  disabled?: boolean;
  size?: TButtonsSize;
  icon?: any;
  iconLeft?: any;
  iconRight?: any;
  layout?: TButtonLayout;
  type?: TButton;
  block?: boolean;
  className?: string;
  callback: (event: React.SyntheticEvent) => void;
}

export interface ITabButton {
  title: string;
  selected?: boolean;
  className?: string;
  callback: (event: React.SyntheticEvent) => void;
  children?: React.ReactNode | undefined;
}

export interface ICircleButton {
  title: string;
  color?: string;
  icon: string;
  className?: string;
  callback: (event: React.SyntheticEvent) => void;
}
