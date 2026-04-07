/**
 * Embed a video from YouTube/Vimeo or a local MP4 file.  Accepts a video
 * URL and decides whether to render an iframe or a video tag based on the
 * extension.  Set the aspect ratio to 16:9 using a wrapper div.
 */
export default function VideoEmbed({ videoUrl = '' }) {
  // Simple heuristics: if the URL ends with .mp4 treat it as a local file.
  const isMp4 = videoUrl.toLowerCase().endsWith('.mp4');
  return (
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg bg-black">
      {videoUrl && !isMp4 && (
        <iframe
          src={videoUrl}
          title="Overview Video"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {videoUrl && isMp4 && (
        <video
          src={videoUrl}
          controls
          className="absolute top-0 left-0 w-full h-full"
        ></video>
      )}
      {!videoUrl && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 text-sm">
          Video coming soon
        </div>
      )}
    </div>
  );
}