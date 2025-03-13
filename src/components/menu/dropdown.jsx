import { Link } from "react-router-dom";

const Dropdown = ( { items, level = 0, target, classLink = "px-2", handleOpenModal } ) => (
 <ol className={ level > 0 ? `sub-level-${ level }` : "" }>
   { Object.entries( items ).map( ( [ key, item ] ) =>
    item.items ? (
     <ul key={ key } className="menu-item dropdown relative list-disc ml-7 my-3 mx-3">
       <li>
         <Link to={ item.url } className={ `item-link ${ classLink }` } onClick={ handleOpenModal }
               target={ target && item.target }>
           { item.name }
         </Link>
         <Dropdown items={ item.items } level={ level + 1 } classLink={ classLink } target={ target }
                   handleOpenModal={ handleOpenModal }/>
       </li>
     </ul>
    ) : (
     <li key={ key } className="menu-item list-disc ml-7 my-3">
       <Link to={ item.url } className={ `item-link ${ classLink }` } onClick={ handleOpenModal }
             target={ target && item.target }>
         { item.name }
       </Link>
     </li>
    )
   ) }
 </ol>
);

export { Dropdown };