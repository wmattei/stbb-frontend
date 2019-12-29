export interface NavigationOptions {
  toolbar?: ToolbarOptions;
  sidenav?: SidenavOptions;
  footer?: FooterOptions;
}

export interface FooterOptions {
  showFooter?: boolean;
}

export interface ToolbarOptions {
  showToolbar?: boolean;
  showMenu?: boolean;
  backgroundColor?: string;
  color?: string;
  leftButton?: ToolbarOptionsButton;
  rightButton?: ToolbarOptionsButton;
}

export interface SidenavOptions {
  showToolbar?: boolean;
  toolbarHeight?: number;
  toolbarColor?: string;
  width?: number;
  menuItens?: SidenavMenuItem[];
}

export enum ToolbarOptionsButton {
  BACK, //0
  MENU, //1
  MORE, //2
  SEARCH //3
}

export interface SidenavMenuItem {
  icon?: string;
  label?: string;
  color?: string;
  iconColor?: string;
  link?: string;
  perms?: string | string[];
  subItens?: SidenavMenuItem[];
  open?: boolean;
  type?: string;
}
