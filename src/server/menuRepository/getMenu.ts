import get from "@/server/services/get";
import {ItemMenu} from "@/resources/types";
import {apiRoutes} from "@/server/services/api/apiRoutes";

type Res = {
  data: ItemMenu[];
}

const getMenu = async (locale: string): Promise<Res> => {
  return await get<Res>({api: apiRoutes.menu, params: {locale}});
};

export default getMenu;