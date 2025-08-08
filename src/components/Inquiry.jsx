import { useState } from "react";
import { palette } from "../styles/commonStyles";
import {
  InquirySubmitButton,
  InquiryTextArea,
} from "../styles/items/ItemDetailStyle";

export default function Inquiry() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
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
      <InquiryTextArea
        onChange={(e) => {
          e.target.value !== "" ? setIsActive(true) : setIsActive(false);
        }}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      ></InquiryTextArea>
      <InquirySubmitButton isActive={isActive}>등록</InquirySubmitButton>
    </>
  );
}
