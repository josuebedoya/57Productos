import { CommonColumns, Id, TransCommonColumns } from "@/server/db/types/common";

export type TablesObj = {
  menu: Menu;
  menu_item: MenuItem;
  menu_trans: MenuTrans;
  menu_item_trans: MenuItemTrans;
};
export type Tables = keyof TablesObj; // Key of from tables available

export type Menu = CommonColumns;

export type MenuTrans = TransCommonColumns & {
  menu_id: Id;
};
export type MenuItem = CommonColumns & {
  menu_id: Id;
  parent_id: Id | null;
  order_num: number;
};

export type MenuItemTrans = TransCommonColumns & {
  menu_item_id: Id;
  title: string;
  href: string;
};