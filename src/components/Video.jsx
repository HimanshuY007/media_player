import usePlayer from "../zustand/usePlayer";

const Video = ({ videoRef, source, handleMetadata, handleUpdate }) => {
  const { setLoading } = usePlayer();
  return (
    <>
      <video
        ref={videoRef}
        className="w-full h-full object-cover "
        src={source}
        autoPlay
        onLoadedMetadata={handleMetadata}
        onTimeUpdate={handleUpdate}
        onLoadStart={() => {
          setLoading(true);
        }}
        onCanPlay={() => {
          setLoading(false);
        }}
        onSeeking={() => {
          setLoading(true);
        }}
        onPlaying={() => {
          setLoading(false);
        }}
      />
    </>
  );
};

export default Video;
