import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });

  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <img src={product.image} />

      <h2>{product.title}</h2>

      <h3>${product.price}</h3>

      <p>{product.description}</p>

    </div>
  );
}

export default ProductDetails;