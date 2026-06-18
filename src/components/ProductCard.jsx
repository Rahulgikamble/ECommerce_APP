import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <h4>${product.price}</h4>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;