"use client"
import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { MainCard } from "@/components/MainCard";
import { MainBox } from "@/components/MainBox";
import { SuggestionsBox } from "@/components/SuggestionsBox";
import { Search } from "@/components/Search";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";

import styles from "../styles/home.module.css";

export default function Home() {
  const [cityInput, setCityInput] = useState("New York");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput }),
      });
      const data = await res.json();
      setWeatherData({ ...data });
      setCityInput("");
    };
    getData();
  }, [triggerFetch]);

  return weatherData && !weatherData.message ? (
    <div className={styles.homewrapper}>
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        weatherData={weatherData}
      />
      <MainBox>
        <Header>
          <h1 className={styles.title}> What to Wear: </h1>
          <Search
            placeHolder="Search for a city..."
            value={cityInput}
            onFocus={(i) => {
              i.target.value = "";
              i.target.placeholder = "";
            }}
            onChange={(i) => setCityInput(i.target.value)}
            onKeyDown={(i) => {
              i.keyCode === 13 && setTriggerFetch(!triggerFetch);
              i.target.placeholder = "Search for a city...";
            }}
          />
        </Header>
        <SuggestionsBox weatherData={weatherData} />
      </MainBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <Error errorMessage="City not found, please try again!">
      <Search
        onFocus={(i) => (i.target.value = "")}
        onChange={(i) => setCityInput(i.target.value)}
        onKeyDown={(i) => i.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </Error>
  ) : (
    <Loading loadingMessage="Loading data..." />
  );
};
