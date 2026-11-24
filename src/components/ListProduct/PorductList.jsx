import products from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

function ProductList() {
  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products-position">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;