import { GetParams, ResGet } from "@/server/db/db.types";
import { Tables } from "@/server/db/types/tables";

const Get = async <T extends Tables>({...p}: GetParams<T>): Promise<ResGet<T>> => {
  return {
    data: [],
    total: 0,
    page: 1,
    pageSize: 10
  };
};

export default Get;