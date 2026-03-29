export function getUserTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function formatEventDateTime(dateTimeString) {
  if (!dateTimeString) {
    return {
      date: "-",
      time: "-",
      timeZone: "-",
    };
  }

  const date = new Date(dateTimeString);
  const userTimeZone = getUserTimeZone();

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: userTimeZone,
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: userTimeZone,
  }).format(date);

  return {
    date: formattedDate,
    time: formattedTime,
    timeZone: userTimeZone,
  };
}
