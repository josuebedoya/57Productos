import { useState } from "react";
import { Button } from "./Button";
import { AddCircleIcon, AddCircleLineIcon, RemoveCircleIcon, RemoveCircleIconLine } from "./Icons";

const AddWithAmount = () => {
  const [ addIconHovered, setAddIconHovered ] = useState(false);
  const [ removeIconHovered, setRemoveIconHovered ] = useState(false);

  const TT = () => {

    setAddIconHovered(!addIconHovered);
    console.log(addIconHovered);
  };


  return (
    <div className="btn-add-amount">
      <Button
        onMouseEnter={() => TT()}
        
        onMouseLeave={() => setAddIconHovered(false)}
      >
        {!addIconHovered ? <AddCircleLineIcon /> : <AddCircleIcon />}
      </Button>
      <Button
        onMouseEnter={() => setRemoveIconHovered(true)}
        onMouseLeave={() => setRemoveIconHovered(false)}
      >
        {!removeIconHovered ? <RemoveCircleIconLine /> : <RemoveCircleIcon />}
      </Button>

      <span onMouseEnter={() => setRemoveIconHovered(true)}
        onMouseLeave={() => setRemoveIconHovered(false)}>
        {!removeIconHovered ? <RemoveCircleIconLine /> : <RemoveCircleIcon />}
      </span>
    </div>
  );
};

export { AddWithAmount };