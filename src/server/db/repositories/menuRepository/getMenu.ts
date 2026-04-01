import Get from "@db/services/get";
import {GetTableParams, ResGet} from "@db/db.types";

const getMenu = async ({...params}: GetTableParams<'menu'> = {})
  : Promise<ResGet<'menu'>> => (
  await Get<'menu'>({
    table: 'menu',
    ...params
  })
);

export default getMenu;