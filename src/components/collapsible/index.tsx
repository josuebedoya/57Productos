import React, {useRef} from 'react';
import type {CollapsibleProps} from "@ui/collapsible/types.d.ts";
import ItemCollapsible from "@ui/collapsible/components/itemCollapsible.tsx";
import clsx from "clsx";

type ItemOpen = { [key: number]: boolean };

const Collapsible: React.FC<CollapsibleProps> = (
  {
    items,
    multiple = false,
    className,
    ...props
  }
) => {

  const [open, setOpen] = React.useState<ItemOpen>({});
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  // handle open/close of collapsible items
  const handlerOpen = (index: number): void => {
    setOpen((prevOpen): ItemOpen => (
      multiple ?
        {...prevOpen, [index]: !prevOpen[index]}
        : !prevOpen[index] ? {[index]: true} : {}
    ));
  };

  console.log(items)

  return (
    <div id='collapsible'>
      <div className={clsx('wrapper mb-2', className)}>
        {items?.map((item, i: number) => (
          <ItemCollapsible
            key={i}
            ref={(el: HTMLElement | null) => (itemRefs.current[i] = el)}
            title={item?.title}
            children={item?.children}
            isActive={open[i]}
            height={open[i] ? itemRefs.current[i]?.scrollHeight ?? 0 : 0}
            onClick={() => handlerOpen(i)}
            id={(i + 1)}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default Collapsible;