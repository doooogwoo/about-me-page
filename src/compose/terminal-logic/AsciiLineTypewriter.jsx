import React, { useEffect, useState } from 'react';

const AsciiLineTypewriter = ({ text, speed = 100, onFinish, className = "" }) => {
  const [asciiLines, setAsciiLines] = useState([]);
  const [displayLines, setDisplayLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // 當 text 更新時，重新初始化狀態
  useEffect(() => {
    if (!text) return;
    const lines = text.split('\n');
    setAsciiLines(lines);
    setDisplayLines([]);
    setCurrentLineIndex(0);
  }, [text]);

  // 逐行打字效果
  useEffect(() => {
    if (asciiLines.length === 0) return;

    const typeLine = () => {
      if (currentLineIndex < asciiLines.length) {
        setDisplayLines((prev) => [...prev, asciiLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        if (onFinish) onFinish();
      }
    };

    const timeout = setTimeout(typeLine, speed);
    return () => clearTimeout(timeout);
  }, [asciiLines, currentLineIndex, speed]);

  return (
    <pre className={`font-mono text-sm leading-[1.2em] whitespace-pre overflow-hidden ${className}`}>
      {displayLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </pre>
  );
};

export default AsciiLineTypewriter;
