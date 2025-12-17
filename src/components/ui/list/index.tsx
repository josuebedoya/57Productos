import React from 'react';
import type {ListProps} from "@ui/list/types.d.ts";
import clsx from "clsx";
import Alert from "@ui/alert/index.tsx";

const List: React.FC<ListProps<any>> = (
  {
    items,
    renderItem,
    keyExtractor,
    propsItem,
    className,
    cols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    colItem = 'col-span-full md:col-span-2 lg:col-span-1',
    classNameLabelEmpty,
    labelEmpty = 'No hay elementos para mostrar'
  }
) => {

  if (!items || !items.length) {
    return <Alert
      className={clsx('rounded-lg shadow-white bg-gray-400', classNameLabelEmpty)}
      iconProps={{className: 'icon text-lg animate-shaking', name: ' '}}
      icon='FaDropbox'
    >
      {labelEmpty}
    </Alert>
  }

  return (
    <div className='list-wrapper'>
      <div className={clsx('list-items grid', className, cols)}>
        {
          items.map((item: any, index: number) => (
            <div
              {...propsItem}
              className={clsx('item', colItem, propsItem?.className ?? 'mb-4')}
              key={keyExtractor(item, index)}
            >
              {renderItem(item, index)}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default List;