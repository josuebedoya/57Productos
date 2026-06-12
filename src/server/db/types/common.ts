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

export type Id = number | string;

export type CommonColumns = UserRelationShipsColumns & DateRelationShipsColumns & {
  id: Id;
}

export type Obj = Record<string, string | number | boolean>;

export type TransCommonColumns = CommonColumns & {
  code_lang: string;
}
