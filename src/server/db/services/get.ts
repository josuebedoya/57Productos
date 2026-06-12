import {GetParams, ResGet} from "@/server/db/db.types";
import {Tables} from "@/server/db/types/tables";
import {createClient} from "@db/client";
import Response from "@/server/db/services/response";

const _get = async <T extends Tables, I>(q: GetParams<T>): Promise<ResGet<I>> => {
  const {table} = q;

  try {
    const supabase = createClient();

    const columns = q.columns ? [...q.columns].join(', ') : '*';

    const query = supabase
      .from(table)
      .select(columns, {count: q.search ? 'estimated' : 'exact'});

    const {data, error, count, status} = await query;

    const resData = error
      ? null
      : {
        items: (data ?? []) as I[],
        count: count ?? 0,
        page: q.page ?? 1,
        pageSize: q.pageSize ?? (data?.length ?? 0)
      };

    return Response<I>({
      data: resData,
      success: !error,
      message: error ? (error.message || '') : `Data retrieved successfully from ${table} table`,
      status,
      error,
      code: error ? error.code : 'DB_CLIENT_SUCCESS'
    });

  } catch (err) {
    return Response<I>({
      data: null,
      success: false,
      message: `Error getting data from ${table} table`,
      status: 500,
      error: err,
      code: 'DB_CLIENT_ERROR'
    });
  }
};

export default _get;
