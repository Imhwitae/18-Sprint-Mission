import ic_heart from '../assets/icons/ic_heart.svg';

export default function Product({ products, width, height }) {
  return (
    <>
      <div className="product-container">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <img
                  className="product-img"
                  src={product.images[0]}
                  style={{ width: width, height: height }}
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
                </p>
                <div className="product-favorite-container">
                  <img src={ic_heart} alt="하트_아이콘" />
                  <span className="product-favorite-count">
                    {product.favoriteCount}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
