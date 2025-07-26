import { useEffect, useState } from 'react';
import Product from '../../components/Product';
import '../../styles/items/items.css';
import { requestProductList } from '../../services/itemsApi';
import ic_search from '../../assets/icons/ic_search.svg';
import DropdownList from '../../components/DropdownList';

export default function Items() {
  /**
   * 전체 상품 목록
   */
  const [products, setProducts] = useState([]);

  /**
   * 베스트 상풍 목록
   */
  const [bestProducts, setBestProducts] = useState([]);

  /**
   * loading
   */
  const [loading, setLoading] = useState(true);

  /**
   * 전체 상품 목록과 베스트 상품 목록을 가져온다.
   */
  const getProducts = async () => {
    try {
      setLoading(true);
      const productList = await requestProductList();
      const { list: bestList } = await requestProductList('favorite', 1, 4);

      if (!productList) {
        throw new Error('상품목록 데이터를 불러오지 못했습니다.');
      }
      setProducts(productList.list);

      if (!bestList) {
        throw new Error('베스트 상품 목록 데이터를 불러오지 못했습니다.');
      }
      setBestProducts(bestList);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="items-container">
        <div className="items-best-container">
          <p className="items-title">베스트 상품</p>
          {!loading && (
            <Product products={bestProducts} width={282} height={282} />
          )}
          <div className="items-list-container">
            <p className="items-title title-text">전체 상품</p>
            <input
              type="text"
              className="items-search"
              placeholder="검색할 상품을 입력해주세요"
            />
            <button className="common-btn items-add-btn">상품 등록하기</button>
            <DropdownList />
          </div>
        </div>
      </div>
    </>
  );
}
