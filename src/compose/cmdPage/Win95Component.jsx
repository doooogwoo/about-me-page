import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Window,
  WindowHeader,
  WindowContent,
} from "react95";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

const Win95Component = () => {
  const [showAbout, setShowAbout] = useState(false);

  // 🔑 Esc 鍵關閉視窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowAbout(false);
    };
    if (showAbout) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showAbout]);

  return (
    <ThemeProvider theme={original}>
     <div className="h-screen bg-[#008080] relative overflow-hidden">

        {/* ─────── AppBar ─────── */}
        <AppBar className="absolute top-0 left-0 right-0">
          <Toolbar>
            <Button variant="menu">File</Button>
            <Button variant="menu" onClick={() => setShowAbout(true)}>
              About Me
            </Button>
            <Button variant="menu">Resume</Button>
            <Button variant="menu">Terminal</Button>
          </Toolbar>
        </AppBar>

        {/* ─────── 視窗區塊（自製 Dialog）─────── */}
        {showAbout && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowAbout(false)} // 點背景關閉
          >
            <Window
              className="relative z-50 w-[90%] max-w-3xl"
              onClick={(e) => e.stopPropagation()} // 防止內部點擊關閉
            >
              <WindowHeader className="flex justify-between items-center">
                <span>AboutMe.exe</span>
                <Button size="sm" onClick={() => setShowAbout(false)}>
                  X
                </Button>
              </WindowHeader>
              <WindowContent className="max-h-[70vh] overflow-y-auto space-y-4 leading-relaxed">
                <p>來自社會學背景，過去的學習歷程培養了我結構化思考與問題分析的能力。</p>
                <p>2020年畢業後，我曾在服務業工作數年......</p>
                <p>（略，內文請自行代入）</p>
              </WindowContent>
            </Window>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Win95Component;

