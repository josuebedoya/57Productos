import {Data} from "@db/db.types";

type Params = {
  success: boolean;
  message?: string;
  status: number;
  error: unknown;
  code?: string;
}

type ApiResponse<I> = {
  data: Data<I>;
  message: string;
} & Omit<Params, 'message'>;

type ApiResponseParams<I> = {
  data: Data<I> | null;
} & Params;

const nullDataResponse: Data<never> = {
  items: [],
  count: 0,
  page: 1,
  pageSize: 1
};

const Response =
  <I>({data, error, status, success, message, code}: ApiResponseParams<I>)
    : ApiResponse<I> => {

    if (error || !success) console.error(error);

    return {
      data: (data ?? nullDataResponse),
      success,
      message: message ?? '',
      error,
      status,
      code
    };
  };

export default Response;