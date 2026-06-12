import _get from "@db/services/get";
import {GetTableParams, ResGet} from "@db/db.types";
import {Menu} from "@db/types/tables";

const _get_menu = async ({...params}: GetTableParams<'menu'> = {})
  : Promise<ResGet<Menu>> => (
  await _get<'menu', Menu>({
    table: 'menu',
    ...params
  })
);

export default _get_menu;