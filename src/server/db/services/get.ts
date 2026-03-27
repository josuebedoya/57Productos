import {GETParams} from "@/server/db/db.types";
import {Tables} from "@/server/db/types/tables";

const Get = async <T extends Tables>({table, columns}: GETParams<T>) => {
  console.log(table, columns);
};

export default Get;