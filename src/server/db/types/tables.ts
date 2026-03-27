import {CommonColumns} from "@/server/db/types/common";

export type TablesObj = {
  menu: Menu;
  menu_items: MenuItems;
  menu_trans: MenuTrans;
  menu_item_trans: MenuItemTrans;
};
export type Tables = keyof TablesObj; // Key of from tables available

export type Menu = CommonColumns;
export type MenuTrans = CommonColumns;
export type MenuItemTrans = CommonColumns;
export type MenuItems = CommonColumns;