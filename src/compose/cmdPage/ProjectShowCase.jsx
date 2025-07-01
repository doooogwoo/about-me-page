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
import ProjectCard from "./ProjectCard";
import AsciiLineTypewriter from "../terminal-logic/AsciiLineTypewriter";
import { terminalTitle3 } from "../utils/AsciiArt";

const ProjectShowCase = () => {
  const [showAbout, setShowAbout] = useState(false);

  // Esc 鍵關閉視窗
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
      <div
        className="min-h-screen bg-black text-green-600 flex flex-col
       items-center justify-start pt-[48px] relative"
      >
        {/* ─────── AppBar 固定在頂部 ─────── */}
        <AppBar className="fixed top-0 left-0 right-0 z-50">
          <Toolbar>
            <Button variant="menu">File</Button>
            <Button variant="menu" onClick={() => setShowAbout(true)}>
              About Me
            </Button>
            <Button variant="menu">Note</Button>
            <Button variant="menu">Terminal</Button>
            <Button variant="menu">Credits</Button>
          </Toolbar>
        </AppBar>

        {/* ─────── ASCII 區塊 ─────── */}
        <div className="p-5 border-black rounded-lg border-4 bg-black mt-12">
          <AsciiLineTypewriter text={terminalTitle3} />
        </div>

        {/* ─────── 主內容區 ─────── */}
        <div className="w-[95%] max-w-full p-2 bg-[#008080] text-black flex flex-col gap-6">
          <div className="flex justify-center items-center flex-col gap-8 mt-10 mb-10">
            <ProjectCard
              videoUrl="https://www.youtube.com/watch?v=MDRbR9FZO6k"
              thumbnailSrc="/img/todo.jpg"
              altText="待辦事項縮圖"
              statusText="🟢 Ready | 最後更新：2025/06/27"
            >
              <h3 className="text-lg font-bold">Todo List 小專案</h3>
              <p>
                一個結合 React、WebSocket、Tailwind 打造的 CLI
                風格代辦系統，支援即時狀態更新與視覺特效。
              </p>
              <p> -CICD -AWS</p>
            </ProjectCard>
            <ProjectCard thumbnailSrc={"/img/lot-2.jpg"} />
            <ProjectCard thumbnailSrc={"/img/ecom.jpg"} />
            <ProjectCard
              videoUrl="https://doooogwoo.github.io/0605/"
              thumbnailSrc={"/img/hex.jpg"}
            ><p>部屬至GitHub Pages</p></ProjectCard>
            <ProjectCard thumbnailSrc={"/img/project-web.jpg"} ></ProjectCard>
          </div>
        </div>

        {/* ─────── About Me 浮窗 ─────── */}
        {showAbout && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setShowAbout(false)}
          >
            <Window
              className="relative z-50 w-[90%] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <WindowHeader className="flex justify-between items-center">
                <span>AboutMe.exe</span>
                <Button size="sm" onClick={() => setShowAbout(false)}>
                  X
                </Button>
              </WindowHeader>
              <WindowContent className="max-h-[70vh] overflow-y-auto space-y-4 leading-relaxed">
                <p>
                  來自社會學背景，過去的學習歷程培養了我結構化思考與問題分析的能力。
                </p>
                <p>
                  2020年畢業後，我曾在服務業工作數年，直到2023年參加政府開辦的
                  AIoT 職訓課程，正式踏入程式開發的領域。
                </p>
                <p>（略，請自行補入其餘介紹）</p>
              </WindowContent>
            </Window>
          </div>
        )}
      </div>
      <footer className="w-full text-center text-xs text-gray-400">
        © 2025 Ming-Jheng Su. All rights reserved.
      </footer>
    </ThemeProvider>
  );
};

export default ProjectShowCase;
