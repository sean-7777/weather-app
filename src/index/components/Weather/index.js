import React, { useEffect, useState } from "react";
import Weather from "../../containers/Weather";

export default function () {
  const [search, setSearch] = useState({});
  let weather = {};
  useEffect(() => {
    weather = { search };
    console.log(weather, search);
  }, [search]);

  return (
    <>
      <Weather.Search onSearch={search => setSearch(search)} />
      <Weather.Display weather={weather} />
    </>
  );
}
