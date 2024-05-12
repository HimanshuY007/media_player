const getTimeFormat = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  return formattedTime;
};

export default getTimeFormat;
