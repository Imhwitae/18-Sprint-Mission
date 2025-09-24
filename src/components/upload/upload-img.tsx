"use client";

import Image from "next/image";
import styles from "./upload-img.module.css";
import plus from "../../../public/plus.svg";
import edit from "../../../public/edit.svg";
import { useRef, useState } from "react";

export default function UploadImg() {
  const [previewImg, setPreviewImg] = useState<string>("");
  const previewImgRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (previewImgRef.current && previewImgRef.current.files) {
      const file = previewImgRef.current?.files[0];
      const imgUrl = URL.createObjectURL(file);
      setPreviewImg(imgUrl);
    }
  };

  return (
    <div
      className={
        previewImg
          ? `${styles.upload_img_container} ${styles.uploaded_img}`
          : styles.upload_img_container
      }
    >
      {previewImg && (
        <Image
          className={styles.img}
          src={previewImg}
          width={384}
          height={311}
          alt="업로드 이미지"
          objectFit="fill"
        />
      )}
      <input
        id="img_upload"
        type="file"
        accept="image/*"
        ref={previewImgRef}
        onChange={handleChange}
      />
      <label
        htmlFor="img_upload"
        className={
          previewImg
            ? `${styles.input_label} ${styles.uploaded_label}`
            : styles.input_label
        }
      >
        <Image
          src={previewImg ? edit : plus}
          width={24}
          height={24}
          alt="추가"
        />
      </label>
    </div>
  );
}
