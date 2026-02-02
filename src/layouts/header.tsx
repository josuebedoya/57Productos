import {Locale} from "@/resources/types";
import Menu from "@ui/menu";
import readMenu from "@/server/services/menu/readMenu";
import Logo from "@/components/logo";
import '@/styles/components/_header.scss';
import Icon from "@ui/icon";
import Theme from "@/components/theme";

const Header = async ({locale}: Locale) => {
  const {data: menuItems} = await readMenu(locale);

  return (
    <>
      <header className='container mx-auto text-center flex items-center justify-between'>
        <div className='flex-initial py-3'>
          <Logo locale={locale}/>
        </div>
        <div className='flex-1 self-center flex justify-center items-center'>
          <Menu
            items={menuItems}
            dir='horizontal'
            classNameItem='text-base xl:text-lg px-2 py-1 hover:text-primary duration-200'
            classNameItemActive='font-bold text-primary'
            classNameIcon="mr-1.5 text-sm"
          />
        </div>
        <div className="controls flex items-center justify-end p-1 bg-primary rounded-xl max-h-max">
          <Icon name='search'
                strokeWidth={3}
                width='20'
                className='m-2 rounded-md text-white cursor-pointer font-semibold duration-200 hover:text-primary relative overflow-hidden'/>
          <Icon name='user'
                strokeWidth={3}
                width='20'
                className='m-2 rounded-md text-white cursor-pointer font-semibold duration-200 hover:text-primary relative overflow-hidden'/>
          <Icon name='languages'
                strokeWidth={3}
                width='20'
                className='m-2 rounded-md text-sm text-white cursor-pointer font-semibold duration-200 hover:text-primary relative overflow-hidden'/>
        </div>
      </header>
      <Theme/>
    </>
  );
}

export default Header;