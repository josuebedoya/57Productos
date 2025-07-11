import { Tab } from "@/components/tabs/tab.jsx";
import { Body } from "@/components/body.jsx";

const Tabs = ( { children } ) => {

  Tabs.TapItem = function TapItem( { children, click, active, tapClass, activeClass } ) {
    return ( <Tab
     click={ click }
     active={ active }
     tapClass={ tapClass }
     activeClass={ activeClass }>{ children }</Tab> )
  }

  Tabs.BodyITem = function BodyITem( { children, activeClass, active } ) {
    return ( active && <Body
     bodyClass={ activeClass }>{ children }</Body> )
  }

  return ( <div className='w-full flex'>
    { children }
  </div> );
}

export { Tabs };
