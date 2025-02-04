import React from "react";

const List = ( { columns = 'grid-cols-2 tl:grid-cols-3 lg:grid-cols-4', itemsShow = 3, gap = 'gap-4', itemClass = '', children } ) => {

  return (
   <div className={ `list-items grid ${ columns } ${ gap }` }>
     {
      React.Children.map( children.slice(0, itemsShow), ( child ) =>
        React.cloneElement( child, {
          className: `item ${ child.props.className || '' } ${ itemClass && itemClass }`
        })
      )}
   </div>
  );
};

export { List };