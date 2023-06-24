import React, { useEffect, useState, useRef } from "react";
import Item from "./Item";
import "../styles/Shop.css";

const Shop = () => {
  const [sum, setSum] = useState(0);
  const [items, setItems] = useState([]);

  const checkoutButtonRef = useRef(null);

  const handleCheckout = () => {
    setSum(0);
    setItems([]);
    alert("Order Submitted");
  };

  useEffect(() => {
    const checkoutButton = checkoutButtonRef.current;
    if (sum === 0) checkoutButton.disabled = true;
    else checkoutButton.disabled = false;
  }, [sum]);

  const handleRemoveItem = (index, totalPrice) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });

    setSum((prevSum) => prevSum - totalPrice);
  };

  return (
    <div id="shop">
      <h1>This is where you shop for groceries</h1>
      <div id="sum-section">
        <h3>Total:{sum}$</h3>
        <p>Items:</p>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              {item.name}: {item.num}-
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(i, item.totalPrice)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleCheckout}
        ref={checkoutButtonRef}
        id="checkout-button"
      >
        Checkout
      </button>
      <div id="shop-section">
        <div className="shop-part">
          <h3>Fruit Section(Per Kg)</h3>
          <ul>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={5}
                name="Apple"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={2.5}
                name="Banana"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={1.5}
                name="Orange"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={4}
                name="Strawberry"
              />
            </li>
          </ul>
        </div>
        <div className="shop-part">
          <h3>Meat Section(Per Kg)</h3>
          <ul>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={5}
                name="Beef"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={4}
                name="Turkey"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={3.5}
                name="Pork"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={11.5}
                name="Chicken"
              />
            </li>
          </ul>
        </div>
        <div className="shop-part">
          <h3>Vegetable Section(Per Kg)</h3>
          <ul>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={2.5}
                name="Cucumber"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={4}
                name="Tomato"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={2}
                name="Onion"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={3.5}
                name="Broccoli"
              />
            </li>
          </ul>
        </div>
        <div className="shop-part">
          <h3>Drink Section(Per Bottle)</h3>
          <ul>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={0.5}
                name="Water"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={1.5}
                name="Juice"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={4}
                name="Beer"
              />
            </li>
            <li>
              <Item
                setSum={setSum}
                items={items}
                setItems={setItems}
                price={2}
                name="Milk"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
