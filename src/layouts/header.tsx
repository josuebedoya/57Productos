import {Locale} from "@/resources/types";
import Menu from "@ui/menu";
import readMenu from "@/server/services/menu/readMenu";
import Logo from "@/components/logo";
import '@/styles/components/_header.scss';
import Icon from "@ui/icon";
import Theme from "@/components/theme";

const Header = async ({locale}: Locale) => {
  const {data: menuItems} = await readMenu(locale);

  const iconClasses = 'm-1 xl:m-2 rounded-md text-white cursor-pointer font-semibold duration-200' +
    'hover:text-primary relative overflow-hidden';

  return (
    <>
      <header
        className='container mx-auto text-center flex items-center justify-between gap-2 sm:gap-5 px-1 sm:px-3 px-xl-0'>
        <div className='py-3 order-1 flex-1 lg:flex-initial flex justify-start'>
          <Logo locale={locale}/>
        </div>
        <div className='lg:flex-1 self-center flex justify-center items-center order-3 lg:order-2'>
          <Menu
            items={menuItems}
            dir='horizontal'
            isCollapsible={true}
            classNameItem='text-base xl:text-lg px-2 py-1 hover:text-primary duration-200'
            classNameItemActive='font-bold text-primary'
            classNameIcon="mr-1.5 text-sm"
          />
        </div>
        <div className="controls flex items-center justify-end p-1 bg-primary rounded-xl max-h-max order-2 lg:order-3">
          <Icon name='search'
                strokeWidth={3}
                width='20'
                className={iconClasses}/>
          <Icon name='user'
                strokeWidth={3}
                width='20'
                className={iconClasses}/>
          <Icon name='languages'
                strokeWidth={3}
                width='20'
                className={iconClasses}/>
        </div>
      </header>
      <Theme/>
    </>
  );
}

export default Header;