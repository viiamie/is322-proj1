import React from 'react';

export const ctoF = (c) => (c * 9) / 5 + 32;

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const unixToLocalTime = (unixSeconds, timezone) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};

export const getTime = (currentTime, timezone) =>
    timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (currentTime, timezone) =>
    unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};

