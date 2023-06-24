import React, { useEffect, useState, useRef } from "react";

const Item = (props) => {
  const [num, setNum] = useState(0);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const addToCart = () => {
    const totalPrice = props.price * num;
    props.setSum((prevSum) => prevSum + totalPrice);

    let name = props.name;
    props.setItems((oldItems) => [...oldItems, { name, num, totalPrice }]);
    setNum(0);
    inputRef.current.value = "";
  };

  const set = (e) => {
    setNum(e.target.value);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (num == 0) button.disabled = true;
    else button.disabled = false;
  }, [num]);

  return (
    <div>
      <p>
        {props.name}-{props.price}$
      </p>
      <input ref={inputRef} onChange={set} min={0} type="number"></input>
      <button onClick={addToCart} ref={buttonRef} className="addToCart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
