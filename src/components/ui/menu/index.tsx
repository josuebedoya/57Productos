import {ItemClassNameMenu, ItemMenu as Item, MenuProps} from "@/resources/types";
import ItemMenu from "@ui/menu/itemMenu";
import {clsx} from "clsx";

const Menu = ({items, dir = 'vertical', ...ui}: MenuProps) => {

  const itemProps = {
    classNameItem: ui?.classNameItem,
    classNameItemActive: ui?.classNameItemActive,
    classNameLink: ui?.classNameLink,
    classNameLinkActive: ui?.classNameLinkActive,
    classNameIcon: ui?.classNameIcon

  } as ItemClassNameMenu;

  return (
    <nav className={clsx('menu', ui?.className)}>
      <ul className={clsx('nav-list flex m-0', dir === 'horizontal' ? 'flex-row' : 'flex-col')}>
        {
          items?.map(({link, label, items: subItems, ...item}: Item, index: number) => (
            <ItemMenu
              {...itemProps}
              {...item}
              key={index}
              link={link}
              label={label}
            >
              {subItems && (
                <Menu
                  key={index}
                  items={subItems}
                  dir='vertical'
                  className='bg-white pl-10 pr-10 py-4 rounded-xl z-20 shadow-xl
                  min-w-max max-w-8'
                  classNameItem='mb-1 last:mb-0'
                  classNameLink='!px-0'
                  classNameIcon='mr-1.5'
                />
              )}
            </ItemMenu>
          ))
        }
      </ul>
    </nav>
  );
};

export default Menu;