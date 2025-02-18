function calculateWatchTime(watchTimes) {
  if (!Array.isArray(watchTimes)) {
    return "Invalid";
  }
  for (let i = 0; i < watchTimes.length; i++) {
    if (typeof watchTimes[i] !== "number") {
      return "Invalid";
    }
  }

  let totalSecond = 0;
  for (let i = 0; i < watchTimes.length; i++) {
    totalSecond += watchTimes[i];
  }

  const hours = Math.floor(totalSecond / 3600);
  const minutes = Math.floor((totalSecond % 3600) / 60);
  const seconds = totalSecond % 60;
  return {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
}

const result = calculateWatchTime([100, 3800, "90"]);
console.log(result);
