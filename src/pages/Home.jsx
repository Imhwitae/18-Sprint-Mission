import '../style/style.css';

export default function Home() {
  return (
    <>
      <main>
        <div class="plan_card">
          <div class="slogan">
            <p class="slogan_heading">
              일상의 모든 물건을 <br class="only_pc only_mobile" />
              거래해보세요
            </p>
            <button class="large_btn">
              <a href="items.html">구경하러 가기</a>
            </button>
          </div>
          <img class="main_img" src="images/Img_home_top.png" alt="main_img" />
        </div>

        <div class="container">
          <div class="content_box">
            <img
              class="introduce_img"
              src="images/hot_item.png"
              alt="hot_item"
            />
            <div class="introduce">
              <p class="keyword">Hot item</p>
              <p class="menu_heading">
                인기 상품을 <br class="only_pc" />
                확인해 보세요
              </p>
              <h2>
                가장 HOT한 중고거래 물품을 <br />
                판다 마켓에서 확인해보세요
              </h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="content_box">
            <div class="sec_introduce">
              <p class="keyword">Search</p>
              <p class="menu_heading">
                구매를 원하는 <br class="only_pc" />
                상품을 검색하세요
              </p>
              <h2>
                구매하고 싶은 물품은 검색해서 <br />
                쉽게 찾아보세요
              </h2>
            </div>
            <img class="introduce_img" src="images/search.png" alt="search" />
          </div>
        </div>

        <div class="container">
          <div class="content_box">
            <img
              class="introduce_img"
              src="images/register.png"
              alt="register"
            />
            <div class="introduce">
              <p class="keyword">Register</p>
              <p class="menu_heading">
                판매를 원하는 <br class="only_pc" />
                상품을 등록하세요
              </p>
              <h2>
                어떤 물건이든 판매하고 싶은 상품을 <br />
                쉽게 등록하세요
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
