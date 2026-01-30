import {ItemMenu, MenuProps} from "@/resources/types";
import Link from "next/link";

const Menu = ({items}: MenuProps) => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {
          items?.map(({link, label}: ItemMenu, index: number) => (
            <li key={index} className='nav-item'>
              <Link href={link} className='nav-link'>
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Menu;