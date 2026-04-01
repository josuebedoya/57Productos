import {Data} from "@db/db.types";
import {Tables} from "@db/types/tables";

type Params = {
  success: boolean;
  message?: string;
  status: number;
  error: unknown;
  code?: string;
}

type ApiResponse<T extends Tables> = {
  data: Data<T>;
} & Params;

type ApiResponseParams<T extends Tables> = {
  data: Data<T> | null;
} & Params;

const nullDataResponse: Data<never> = {
  items: [],
  count: 0,
  page: 1,
  pageSize: 1
};

const Response =
  <T extends Tables>({data, error, status, success, message, code}: ApiResponseParams<T>)
    : ApiResponse<T> => {

    if (error || !success) console.error(error);

    return {
      data: (data ?? nullDataResponse),
      success,
      message,
      error,
      status,
      code
    };
  };

export default Response;