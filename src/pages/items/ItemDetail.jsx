import { useLocation, useParams } from "react-router";
import { requestProductDetail } from "../../services/itemsApi";
import { useEffect, useState } from "react";
import {
  Heart,
  HeartCount,
  InquirySubmitButton,
  InquiryTextArea,
  ProductDate,
  ProductImg,
  ProductInfoBox,
  ProductOwnerName,
  ProductPrice,
  ProductSubTitle,
  ProductTextArea,
  ProductTextBox,
  ProductTitle,
} from "../../styles/items/ItemDetailStyle";
import { ItemsTag, palette, ProfileImg } from "../../styles/commonStyles";
import icProfile from "../../assets/icons/ic_profile.svg";
import icHeartInactive from "../../assets/icons/ic_heart_inactive_large.svg";
import icHeartActive from "../../assets/icons/ic_heart_active_large.svg";

export default function ItemDetail() {
  /**
   * 상품의 id
   */
  const { productId } = useParams();

  const { state } = useLocation();

  /**
   * loading
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 상품 상세 정보를 받을 state
   */
  const [productDetail, setProductDetail] = useState({});

  /**
   * 상품의 상세 정보를 받아온다.
   * @param {string} id
   */
  const getProductDetail = async (id) => {
    try {
      setIsLoading(true);
      const data = await requestProductDetail(id);
      if (!data) {
        throw new Error("상품 정보를 불러오지 못했습니다.");
      }
      console.log(data);

      setProductDetail(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail(productId);
  }, []);

  return (
    <>
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <ProductInfoBox>
          <ProductImg src={state.images[0]} alt="상품 이미지" />
          <ProductTextBox>
            <div style={{ borderBottom: `1px solid ${palette.gray200}` }}>
              <div style={{ display: "flex" }}>
                <ProductTitle>{state.name}</ProductTitle>
              </div>
              <ProductPrice>
                {state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  "원"}
              </ProductPrice>
            </div>
            <div style={{ height: "146px" }}>
              <ProductSubTitle>상품 소개</ProductSubTitle>
              <ProductTextArea>{state.description}</ProductTextArea>
            </div>
            <div style={{ marginBottom: "90px" }}>
              <ProductSubTitle>상품 태그</ProductSubTitle>
              <div style={{ display: "flex" }}>
                {state.tags.map((tag) => {
                  return <ItemsTag key={tag}>{`#${tag}`}</ItemsTag>;
                })}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ProfileImg src={icProfile} alt="프로필 이미지" />
              <div
                style={{
                  marginLeft: "10px",
                  width: "100%",
                  borderRight: `1px solid ${palette.gray200}`,
                }}
              >
                <ProductOwnerName>
                  {!isLoading && productDetail.ownerNickname}
                </ProductOwnerName>
                <ProductDate>
                  {state.updatedAt.slice(0, 10).replaceAll("-", ". ")}
                </ProductDate>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Heart>
                  {!isLoading && productDetail.isFavorite ? (
                    <img src={icHeartActive} alt="좋아요 이미지" />
                  ) : (
                    <img src={icHeartInactive} alt="좋아요 이미지" />
                  )}
                  <HeartCount>{state.favoriteCount}</HeartCount>
                </Heart>
              </div>
            </div>
          </ProductTextBox>
        </ProductInfoBox>
        <div>
          <p
            style={{
              color: `${palette.gray900}`,
              fontWeight: "600",
              fontSize: "16px",
              margin: "40px 0px 10px",
            }}
          >
            문의하기
          </p>
          <InquiryTextArea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
          <InquirySubmitButton>등록</InquirySubmitButton>
        </div>
      </div>
    </>
  );
}
