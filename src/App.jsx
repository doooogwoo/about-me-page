import "./App.css";
import ProfileIntro from "./compose/introPage/ProfileIntro";
import VideoBackround from "./compose/VideoBackround";

import ProjectShowCase from "./compose/cmdPage/ProjectShowCase";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillIntro from "./compose/introPage/Skillintro";

// import HeroPage from "./components/HeroPage";
// import Intro from "./components/Intro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <VideoBackround src="/code.mp4">
              <div className="flex flex-col md:flex-row gap-4 items-center px-4 md:px-8 py-10">
                {/* 左側區塊 */}
                <aside className="w-full md:w-[420px]">
                  <ProfileIntro />
                </aside>

                {/* 右側區塊 */}
                <main className="w-full md:flex-1 md:max-h-[500px] md:overflow-y-auto">
                  <SkillIntro />
                </main>
              </div>
            </VideoBackround>
          }
        />
        <Route path="/panel" element={<ProjectShowCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
