import axios from "axios";

type Props = { api: string; params?: Record<string, string>; };

async function get<T = unknown>({api, params = {}}: Props): Promise<T> {
  const {data} = await axios.get<T>(api, {params});
  return data;
}

export default get;