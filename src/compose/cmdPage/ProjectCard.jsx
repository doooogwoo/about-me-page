import React from "react";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { Frame } from "react95";

// props: videoUrl, thumbnailSrc, altText, statusText, children
const ProjectCard = ({
  videoUrl,
  thumbnailSrc,
  altText = "YouTube Thumbnail",
  statusText = "This is the default status bar text.",
  children,
}) => {
  return (
    <ThemeProvider theme={original}>
      <div className="flex justify-center items-center w-[900px] gap-4">
        <Frame variant="outside" shadow className="p-4 w-[450px] flex">
          <div className="w-[400px]">
            <Frame variant="field" className="h-[300px] w-full overflow-hidden">
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={thumbnailSrc}
                  alt={altText}
                  className="w-full h-full object-cover"
                />
              </a>
            </Frame>

            <Frame
              variant="well"
              className="mt-2 px-2 py-[0.1rem] w-full text-sm"
            >
              {statusText}
            </Frame>
          </div>
        </Frame>

        <div className="flex-1 bg-[#C4C4C4] p-4 h-[250px]">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default ProjectCard;
