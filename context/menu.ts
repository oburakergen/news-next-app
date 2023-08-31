import { createContext } from "react";

export const MenuContext = createContext({
  menu: [],
  setMenu: () => {},
  menuOpen: false,
  setMenuOpen: () => {},
  menuPosition: { x: 0, y: 0 },
  setMenuPosition: () => {},
  menuTarget: null,
  setMenuTarget: () => {},
  menuType: "",
  setMenuType: () => {},
  menuData: {},
  setMenuData: () => {},
});
