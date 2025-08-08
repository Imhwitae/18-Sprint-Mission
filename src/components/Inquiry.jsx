import { useEffect, useState } from "react";
import { palette } from "../styles/commonStyles";
import {
  InquiryContent,
  InquiryDate,
  InquiryProfileImg,
  InquirySubmitButton,
  InquiryTextArea,
  InquiryTitle,
  InquiryWriter,
} from "../styles/components/InquiryStyles";
import { requestInquiryLists } from "../services/itemsApi";
import icProfile from "../assets/icons/ic_profile.svg";
import { formatTimeAgo } from "../util/formatTimeAgo";

export default function Inquiry({ id }) {
  /**
   * 버튼 활성화 state
   */
  const [isActive, setIsActive] = useState(false);

  /**
   * loading
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 문의내역을 담을 state
   */
  const [inQuiryLists, setInquiryLists] = useState({});

  const getInquiryLists = async (productId) => {
    try {
      setIsLoading(true);
      const lists = await requestInquiryLists(productId);
      if (!lists) {
        throw new Error("문의 목록을 받아오지 못했습니다.");
      }

      setInquiryLists(lists);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInquiryLists(id);
  }, []);

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <InquiryTitle>문의하기</InquiryTitle>
        <InquiryTextArea
          onChange={(e) => {
            e.target.value !== "" ? setIsActive(true) : setIsActive(false);
          }}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></InquiryTextArea>
        <InquirySubmitButton isActive={isActive}>등록</InquirySubmitButton>
      </div>
      {!isLoading &&
        inQuiryLists.list?.map((el) => {
          return (
            <div
              style={{ borderBottom: `1px solid ${palette.gray200}` }}
              key={el.id}
            >
              <div style={{ display: "flex", margin: "20px 0px 20px" }}>
                <InquiryContent>{el.content}</InquiryContent>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <InquiryProfileImg src={icProfile} alt="작성자 프로필 이미지" />
                <div style={{ marginLeft: "10px" }}>
                  <InquiryWriter>{el.writer.nickname}</InquiryWriter>
                  <InquiryDate>{formatTimeAgo(el.updatedAt)}</InquiryDate>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
