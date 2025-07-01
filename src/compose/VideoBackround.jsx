const VideoBackround = ({ src, overlayOpacity = "bg-black/60", children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* 背景影片 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* 半透明遮罩 */}
      <div className={`absolute inset-0 ${overlayOpacity} -z-5`} />

      {/* 主內容區塊 */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
export default VideoBackround;