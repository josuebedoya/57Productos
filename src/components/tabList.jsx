import { Tab } from "@/components/tabs/tab.jsx";
import { Body } from "@/components/body.jsx";

const Tabs = ( { children } ) => {

   Tabs.TapItem =  function TapItem( { children, click, active, tapClass, activeClass, ...events } ) {
    return ( <Tab
     click={ click }
     active={ active }
     tapClass={ tapClass }
     activeClass={ activeClass }
     { ...events }
    >{ children }</Tab> )
  }

  Tabs.BodyITem = function BodyITem( { children, activeClass, active } ) {
    return ( active && <div aria-selected={ active } className={ activeClass || '' }>
      <Body
       bodyClass={ activeClass }>{ children }</Body>
    </div> )
  }

  return ( <div className='w-full flex'>
    { children }
  </div> );
}

export { Tabs };
