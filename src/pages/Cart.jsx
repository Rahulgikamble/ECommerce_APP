import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">

      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
          />

          <div>

            <h3>{item.title}</h3>

            <p>
              Price: ${item.price}
            </p>

            <p>
              Quantity:
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              {item.quantity}

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>
            </p>

            <p>
              Subtotal:
              $
              {(
                item.price * item.quantity
              ).toFixed(2)}
            </p>

            <button
              onClick={() =>
                removeItem(item.id)
              }
            >
              Remove
            </button>

          </div>
        </div>
      ))}

      <h2>Total : ${total.toFixed(2)}</h2>

    </div>
  );
}

export default Cart;