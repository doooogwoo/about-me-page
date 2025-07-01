import { Link } from "react-router-dom";
import SkillItem from "./SkillItem";

const SkillIntro = () => {
  return (
    <>
      <div className="bg-black/45 text-white px-6">
        <section>
          <h2 className="text-3xl">個人簡介</h2>
          <p className="text-gray-300">
            來自社會學背景，擁有結構化思考與問題分析的能力。
          </p>
          <p className="text-gray-300">
            2023 年起接觸程式，從職訓局（Python、AIoT）起步，熟悉
            <span className="text-[#1BFFFF]"> Git</span>、
            <span className="text-[#1BFFFF]">VS Code</span>、
            <span className="text-[#1BFFFF]">Terminal</span>
            與基本協作流程。
          </p>
          <p className="text-gray-300">
            後轉向大數智能教育學習 Java，並於 2024 年結訓後持續自學
            <span className="text-[#39FF14]"> Spring Boot</span>
            ，同年底擔任助教，協助學員理解核心概念與實作。期間同步接觸
            <span className="text-[#1BFFFF]">Docker</span>、
            <span className="text-[#1BFFFF]">MySQL</span>，建立
            <span className="text-[#1BFFFF]">DevOps</span>、
            <span className="text-[#1BFFFF]">K8s </span>與
            <span className="text-[#1BFFFF]"> CI/CD </span>的初步認知。
          </p>
          <p></p>
          <p className="text-gray-300">
            2025 年起開始進行個人專案 —— 模擬經營型停車場遊戲，整合設計模式、
            <span className="text-[#1BFFFF]">WebSocket</span>、排程任務與 CLI
            模擬。
          </p>
          <p className="text-gray-300">
            為補足前端能力，自學<span className="text-blue-500"> React </span>
            並參加六角學院 CSS 前端體驗營，強化排版與視覺實作能力。
          </p>
          <p className="text-gray-300">
            目前正專注於 GitLab CI/CD、Spring Security
            驗證設計與專案功能擴充，持續朝向實務導向的後端工程之路邁進。
          </p>
        </section>

        <section>
          <br />
          <h2 className="text-3xl">技能摘要</h2>
          <ul className="space-y-4 text-base leading-relaxed ">
            <SkillItem
              imageSrc="Developer.svg"
              imageAlt="後端開發圖示"
              title="Java 開發："
            >
              <p>
                具備使用 Spring Boot 建構 RESTful API 的實作經驗，熟悉 JPA
                進行資料庫操作與關聯設計
              </p>
            </SkillItem>
            <SkillItem
              imageSrc="Software-code.svg"
              imageAlt="系統架構圖示"
              title="系統架構與設計模式："
            >
              <p>具備 MVC 架構實作經驗，熟悉模組化 Service 拆分。</p>
              <p>
                實際運用 Command、Observer、Factory
                等設計模式於遊戲模擬與商業邏輯中。
              </p>
            </SkillItem>

            <SkillItem
              imageSrc="Advanced.svg"
              imageAlt="前端開發圖示"
              title="前端整合："
            >
              <p>熟悉使用 React（Hooks、Component 架構）</p>
              <p> Tailwind CSS 開發響應式畫面。</p>
              <p> 具備整合 WebSocket 以實作即時資料推播功能之實務經驗。</p>
            </SkillItem>

            <SkillItem
              // imageSrc="database.svg"
              imageSrc="points-rafiki.svg"
              imageAlt="資料庫圖示"
              title="資料庫技術："
            >
              <p>熟悉 MySQL 與 H2 等關聯式資料庫。</p>
              <p>理解資料正規化、索引設計與 SQL 查詢語法。</p>
            </SkillItem>

            <SkillItem
              imageSrc="Server.svg"
              imageAlt="開發工具圖示"
              title="開發工具與環境："
            >
              <p>熟悉 IntelliJ IDEA、Git 版本控制、Postman API 測試工具。</p>
              <p>
                具備使用 Docker / Docker Compose
                進行容器化佈署的實作經驗，目前可參考範例模板完成前後端打包，並正持續熟悉
                Dockerfile 指令與最佳實踐。
              </p>
            </SkillItem>

            <SkillItem
              imageSrc="progress-bro.svg"
              imageAlt="進階技能圖示"
              title="進階技能（持續強化中）："
            >
              <p>
                具備 Spring Security 架構概念，理解 JWT、Cookie 與 OAuth
                驗證流程。
              </p>
              <p>
                熟悉 JUnit 5 與 Mockito
                測試框架，持續優化單元測試與整合測試能力。
              </p>
            </SkillItem>
            <li className="flex flex-col gap-2">
              <strong> 點擊看更多:</strong>
              <Link to="/panel">
                <button className="px-4 py-1 text-lg bg-white text-black rounded-full hover:bg-cyan-800 hover:text-white transition">
                  歷程作品介紹
                </button>
              </Link>
            </li>
          </ul>
        </section>
        <footer className="w-full text-center text-xs text-gray-400 py-4">
          © 2025 Ming-Jheng Su. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default SkillIntro;
