import React, { useEffect, useState } from "react";

const ElementTypewriter = ({ elements, speed = 300, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleElements, setVisibleElements] = useState([]);

  // 把原始元素資料轉成真正的 JSX 元素（處理 <br>）
  const introElements = elements.map((item, index) => {
    const Tag = item.tag;
    if (Tag === "br") {
      return <br key={index} />;
    }
    return <Tag key={index}>{item.text}</Tag>;
  });

  useEffect(() => {
    setCurrentIndex(0);
    setVisibleElements([]);
  }, [elements]);

  useEffect(() => {
    if (currentIndex < introElements.length) {
      const timeout = setTimeout(() => {
        setVisibleElements((prev) => [...prev, introElements[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      if (onFinish) onFinish();
    }
  }, [currentIndex, introElements, speed, onFinish]);

  return <div>{visibleElements.map((el) => el)}</div>;
};

export default ElementTypewriter;

