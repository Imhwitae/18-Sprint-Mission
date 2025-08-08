/**
 * 서버에 상품 목록을 요청한다.
 * @param {string} orderBy
 * @returns {object}
 */
export const requestProductList = async (querys) => {
  const url = new URL("https://panda-market-api.vercel.app/products");
  url.searchParams.append("page", querys.page);
  url.searchParams.append("pageSize", querys.pageSize);
  url.searchParams.append("orderBy", querys.orderBy);

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

/**
 * 상품의 상세 정보를 요청한다.
 * @param {string} productId
 * @returns {json} response
 */
export const requestProductDetail = async (productId) => {
  const url = new URL(
    `https://panda-market-api.vercel.app/products/${productId}`
  );

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
