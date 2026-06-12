import {Locale} from "@/resources/types";
import Menu from "@ui/menu";
import Logo from "@/components/logo";
import '@/styles/components/_header.scss';
import Icon from "@ui/icon";
import Theme from "@/components/theme";
import _get_menu from "@db/repositories/menuRepository/menu";

const Header = async ({locale}: Locale) => {
  const {data: {items: menuItems}} = await _get_menu();

  const iconClasses = 'm-1 xl:m-2 rounded-md text-primary cursor-pointer font-semibold duration-200 ' +
    ' relative overflow-hidden dark:text-white dark:hover:bg-white/10';

  return (
    <>
      <header className='px-1 sm:px-3 px-xl-0 z-modal sticky top-0'>
        <div className='container mx-auto text-center flex items-center justify-between gap-2 sm:gap-5'>
          <div className='py-2 order-1 flex-1 lg:flex-initial flex justify-start'>
            <Logo locale={locale}/>
          </div>
          <div className='lg:flex-1 self-center flex justify-center items-center order-3 lg:order-2'>
            <Menu
              items={menuItems as never}
              dir='horizontal'
              isCollapsible={true}
              classNameItem='text-base xl:text-[17px] px-2 py-1 hover:text-primary dark:hover:text-white dark:text-light duration-200'
              classNameItemActive='font-bold text-primary dark:text-white'
              classNameIcon="mr-1 text-sm"
              classNameLink='no-underline hover:no-underline font-light'
              classNameLinkActive='!font-bold'
            />
          </div>
          <div
            className="controls flex items-center justify-end px-1  max-h-max order-2 lg:order-3">
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
        </div>
      </header>
      <Theme/>
    </>
  );
}

export default Header;