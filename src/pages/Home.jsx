import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (
    <div>

      <select
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">
          Men's Clothing
        </option>
        <option value="women's clothing">
          Women's Clothing
        </option>
      </select>

      <div className="products">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;