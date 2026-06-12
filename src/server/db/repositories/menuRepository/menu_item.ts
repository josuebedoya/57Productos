import _get from "@db/services/get";
import {GetTableParams, ResGet} from "@db/db.types";
import {MenuItem} from "@db/types/tables";

type Item = MenuItem & { children?: Item[] };

const _get_menu_item = async ({...params}: GetTableParams<'menu_item'> = {})
  : Promise<ResGet<Item>> => {
  const {data, ...res} = await _get<'menu_item', Item>({
    table: 'menu_item',
    columns: ['*', 'menu_item_trans!inner(*)'],
    ...params
  })

  if (res?.error) return {data, ...res};

  const groupedByParentId = data.items.reduce((acc, item) => {
    const parentId = Number(item.parent_id) || 0;
    if (!acc[parentId]) {
      acc[parentId] = [];
    }
    acc[parentId].push({...item, children: []});
    return acc;
  }, {} as Record<number, Item[]>);

  const buildTree = (parentId: number): Item[] => {
    return (groupedByParentId[parentId] || []).map(item => ({
      ...item,
      children: buildTree(Number(item.id))
    }));
  };

  const treeData = buildTree(0);

  return {
    data: {
      items: treeData,
      count: data.count,
      page: data.page,
      pageSize: data.pageSize
    },
    ...res
  };
}

const _get_menu_item_by_id = async (id: number, params?: Omit<GetTableParams<'menu_item'>, 'eq'>)
  : Promise<ResGet<Item>> => (
  await _get<'menu_item', Item>({
    table: 'menu_item',
    columns: ['*', 'menu_item_trans!inner(*)'],
    eq: {id},
    ...params
  })
);

const _get_menu_item_by_menu_id = async (menu_id: number, params?: Omit<GetTableParams<'menu_item'>, 'eq'>)
  : Promise<ResGet<Item>> => (
  await _get<'menu_item', Item>({
    table: 'menu_item',
    columns: ['*', 'menu_item_trans!inner(*)'],
    eq: {menu_id},
    ...params
  })
);

export {
  _get_menu_item,
  _get_menu_item_by_menu_id,
  _get_menu_item_by_id
};