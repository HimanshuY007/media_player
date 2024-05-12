import usePlayer from "../zustand/usePlayer";

const Audio = ({ audioRef, source, handleMetadata, handleUpdate }) => {
  const { setLoading } = usePlayer();
  return (
    <>
      <img
        src="/audio.jpg"
        alt="Sound Image"
        className="w-full h-full object-cover"
      />
      <audio
        ref={audioRef}
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

export default Audio;
