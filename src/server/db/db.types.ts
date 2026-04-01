import {Tables, TablesObj} from "@/server/db/types/tables";

export type Ascending = boolean;

export type Order<T extends Tables> = {
  order?: {
    column: keyof TablesObj[ T ];
    ascending?: Ascending;
    foreignTable?: Exclude<Tables, T>;
  };
};

// access only to available columns from each table, and make them optional for query purposes, EJ: { menu: { id: 1, date_created: "2023-01-01" } } This is valid because, these columns exist in menu table
export type TableQueryObj<T extends Tables> = { [K in keyof TablesObj[ T ]]?: (TablesObj[ T ])[ K ] };

export type GetParams<T extends Tables> = {
  table: T;
  count?: 'exact' | 'estimated';
  justCount?: boolean; // If true, only return the count of items matching the query without fetching the actual data
  columns?: (keyof TablesObj[ T ])[] | '*'; // Access only to available columns from each table
  eq?: TableQueryObj<T>;
  page?: number;
  pageSize?: number;
  gte?: TableQueryObj<T>;
  lte?: TableQueryObj<T>;
  search?: {
    query: string;
    columns: (keyof TablesObj[ T ])[];
  };
} & Order<T>;

export type GetTableParams<T extends Tables> = Omit<GetParams<T>, 'table' | 'count'>;

export type Data<T extends Tables> = {
  items: TablesObj[ T ][] | [];
  count: number;
  page: number;
  pageSize: number;
}
export type ResGet<T extends Tables> = {
  data: Data<T>;
  success: boolean;
  message: string;
  status: number;
  error?: unknown;
  code?: string;
};