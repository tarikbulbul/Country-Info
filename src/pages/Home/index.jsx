import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import CountryList from '../../components/CountryList';
import { filterCountries } from "../../helpers";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const BASE_URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.error("An error occurred while fetching data from the API:", error);
      }
    };
    fetchData();
  }, []);

  const searchData = filterCountries(data, search);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex flex-wrap align-item-center justify-content-center">
          {searchData.map((item) => (
            <CountryList key={item.name.common} info={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;