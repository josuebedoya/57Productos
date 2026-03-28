export type UserRelationShipsColumns = {
  user_created: string | null;
  user_deleted: string | null;
  user_updated: string | null;
}
export type DateRelationShipsColumns = {
  date_created: string | null;
  date_deleted: string | null;
  date_updated: string | null;
}

export type CommonColumns = UserRelationShipsColumns & DateRelationShipsColumns & {
  id: number | string;
}

export type Obj = Record<string, string | number | boolean>;
