import {Tables, TablesObj} from "@/server/db/types/tables";

export type Ascending = boolean;

export type Order = {
  order?: {
    column: string;
    ascending?: Ascending;
    foreignTable?: Tables;
  };
};

export type GETParams<T extends Tables> = {
  table: T;
  columns?: (keyof TablesObj[T])[] | '*'; // Access only to available columns from each table
  eq?: { [K in keyof TablesObj[T]]?: (TablesObj[T])[K] }; // Access only to available columns from each table
  page?: number;
  pageSize?: number;
} & Order;