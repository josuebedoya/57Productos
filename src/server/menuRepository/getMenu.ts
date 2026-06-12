import get from "@/server/services/get";
import {MenuItem} from "@/server/db/types/tables";
import {apiRoutes} from "@/server/services/api/apiRoutes";

type Res = {
  data: {
    items: MenuItem[];
  };
}

const getMenu = async (locale: string): Promise<Res> => {
  return await get<Res>({api: apiRoutes.menu, params: {locale}});
};

export default getMenu;