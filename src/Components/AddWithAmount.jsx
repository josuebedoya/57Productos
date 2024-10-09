import { useState } from "react";
import { Button } from "./Button";
import { AddCircleIcon, AddCircleLineIcon, RemoveCircleIcon, RemoveCircleIconLine } from "../Resources/Icons";
import { InputNumber } from "./Input";

const AddWithAmount = () => {
  const [changeIconBtnAdd, setChangeIconBtnAdd] = useState(false);
  const [changeIconBtnRemove, setChangeIconBtnRemove] = useState(false);
  const [amount, setAmount] = useState(1);
  const [intervalId, setIntervalId] = useState(null);

  const incrementAmount = () => {
    const id = setInterval(() => {
      setAmount((prevAmount) => prevAmount + 1);
    }, 130);
    setIntervalId(id);
  };

  const decrementAmount = () => {
    const id = setInterval(() => {
      setAmount((prevAmount) => Math.max(0, prevAmount - 1));
    }, 130); // Decrementa cada 100 ms
    setIntervalId(id);
  };

  const stopChangingAmount = () => {
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="btn-add-amount">
        <Button
          onMouseEnter={() => setChangeIconBtnAdd(true)}
          onMouseLeave={() => { setChangeIconBtnAdd(false); stopChangingAmount(); }}
          onMouseDown={incrementAmount}
          onMouseUp={stopChangingAmount}
        >
          {!changeIconBtnAdd ? <AddCircleLineIcon /> : <AddCircleIcon />}
        </Button>
        <InputNumber value={amount} />
        <Button
          onMouseEnter={() => setChangeIconBtnRemove(true)}
          onMouseLeave={() => { setChangeIconBtnRemove(false); stopChangingAmount(); }}
          onMouseDown={decrementAmount}
          onMouseUp={stopChangingAmount}
        >
          {!changeIconBtnRemove ? <RemoveCircleIconLine /> : <RemoveCircleIcon />}
        </Button>
      </div>
      <div>
        <Button>
          Añadir
        </Button>
      </div>
    </>
  );
};

export { AddWithAmount };
