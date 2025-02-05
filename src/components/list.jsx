import React from "react";

const List = ( { columns = 4, itemsShow = 3, gap = 'gap-4', itemClass = '', children } ) => {

  const optionsGrid = [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12'
  ]

  return (
   <div className={ `list-items grid ${ optionsGrid[ columns - 1] } ${ gap }` }>
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