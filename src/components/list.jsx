import React from "react";

const List = ({ columns = 3, gap = 4, itemClass = '', children }) => {
  return (
    <div className={`list-items grid grid-cols-${columns} gap-${gap}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: `item ${child.props.className || ''} ${itemClass && itemClass}`
        })
      )}
    </div>
  );
};

export { List };