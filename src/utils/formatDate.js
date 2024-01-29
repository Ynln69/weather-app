const formatDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const dateString = date.toLocaleDateString("en-EN", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  const timeString = date.toLocaleTimeString("en-EN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${dateString}, ${timeString}`;
};

export default formatDate;
