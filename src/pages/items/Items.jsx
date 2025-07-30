import { useCallback, useEffect, useState } from 'react';
import Product from '../../components/Product';
import '../../styles/items/items.css';
import { requestProductList } from '../../services/itemsApi';
import DropdownList from '../../components/DropdownList';
import Pagination from '../../components/Pagination';

export default function Items() {
  /**
   * 전체 상품 목록
   */
  const [products, setProducts] = useState({});

  /**
   * 베스트 상풍 목록
   */
  const [bestProducts, setBestProducts] = useState([]);

  /**
   * 현재 페이지 번호
   */
  const [pageNum, setPageNum] = useState(1);

  /**
   * 정렬 조건
   */
  const [order, setOrder] = useState('recent');

  /**
   * 페이지에 보여줄 컨텐츠의 개수
   */
  // const [contentNum, setContentNum] = useState(10);

  /**
   * loading
   */
  const [loading, setLoading] = useState(true);

  /**
   * 베스트 상품 목록을 가져온다.
   */
  const getBestProducts = async () => {
    try {
      const { list: bestList } = await requestProductList('favorite', 1, 4);
      if (!bestList) {
        throw new Error('베스트 상품 목록 데이터를 불러오지 못했습니다.');
      }
      setBestProducts(bestList);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * 전체 상품 목록을 가져온다.
   */
  const getProducts = async (order, page) => {
    let pageSize =
      products.totalCount - page * 10 < 10
        ? products.totalCount - page * 10
        : 10;

    try {
      const productList = await requestProductList(order, page, pageSize);

      if (!productList) {
        throw new Error('상품목록 데이터를 불러오지 못했습니다.');
      }
      setProducts(productList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts(order, pageNum);
    setLoading(false);
  }, [order, pageNum]);

  useEffect(() => {
    getBestProducts();
  }, []);

  return (
    <>
      <div className="items-container">
        <div className="items-best-container">
          <p className="items-title">베스트 상품</p>
          <Product products={bestProducts} />
        </div>
        <div className="items-list-container">
          <div className="items-menus">
            <p className="items-title title-text">전체 상품</p>
            <input
              type="text"
              className="items-search"
              placeholder="검색할 상품을 입력해주세요"
            />
            <button className="btn-hover btn-active common-btn items-add-btn">
              상품 등록하기
            </button>
            <DropdownList changeOrder={setOrder} />
          </div>
          <Product products={products.list} style={'all'} />
        </div>
        <Pagination
          currentNum={pageNum}
          setPageNum={setPageNum}
          totalCount={products.totalCount}
          // contentNum={contentNum}
        />
      </div>
    </>
  );
}
