import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import CountryList from '../../components/CountryList';
import { filterCountries } from "../../helpers";
import Loading from '../../components/Loading';

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false)

  const BASE_URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.error("An error occurred while fetching data from the API:", error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
          {!loading ? (
            searchData.map((item) => (
              <CountryList key={item.name.common} info={item} />
            ))
          ) : (
            <Loading />
          )}
      </div>
    </div>
  );
};

export default Home;