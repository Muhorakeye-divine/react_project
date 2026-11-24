import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-location">
          {product.location}
        </p>

        <div className="product-footer">

          <strong className="product-price">
            {product.price.toLocaleString('fr-FR')} Fbu
          </strong>

          <Link
          to={`/checkout/${product.id}`}
          className="product-button">
            Buy
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;


