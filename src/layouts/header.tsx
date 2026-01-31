import {Locale} from "@/resources/types";
import Menu from "@ui/menu";
import readMenu from "@/server/services/menu/readMenu";
import Logo from "@/components/logo";

const Header = async ({locale}: Locale) => {
  const {data: menuItems} = await readMenu(locale);

  return (
    <header className='container mx-auto text-center flex'>
      <div className='flex-initial py-3'>
        <Logo locale={locale}/>
      </div>
      <div className='flex-1 self-center flex justify-end'>
        <Menu
          items={menuItems}
          dir='horizontal'
          classNameItem='first-letter:uppercase lowercase text-base xl:text-lg px-2 py-1'
          classNameItemActive='font-bold text-primary'
        />
      </div>
    </header>
  );
}

export default Header;