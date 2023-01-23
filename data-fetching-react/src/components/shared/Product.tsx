import { Product as ProductType } from "../../products";

import closeIcon from "../../assets/icons/close.svg";

interface Props {
  product: ProductType;
  onRemove: (id: number) => void;
}

export const Product = ({ product, onRemove }: Props) => {
  return (
    <div className="products-section-item">
      <div className="products-section-item__thumb">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="products-section-item__content">
        <div className="products-section-item__headings">
          <h3 className="products-section-item__title">{product.title}</h3>

          <p className="products-section-item__description">
            {product.description}
          </p>
        </div>

        <span className="products-section-item__price">{product.price}€</span>

        <div
          onClick={() => onRemove(product.id)}
          className="products-section-item__remove"
        >
          <img src={closeIcon} />
        </div>
      </div>
    </div>
  );
};
