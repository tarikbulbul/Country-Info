import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FcHome } from "react-icons/fc";
import { BiMapPin } from "react-icons/bi";

const CountryInfo = ({ countryData }) => {
  const { name, capital, subregion, population, flags, maps } = countryData;

  return (
    <div key={name.common}>
      <div className="home-icon">
        <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Home">
          <FcHome />
        </Link>
      </div>

      <div className="custom-container">
        <div className="d-flex flex-column align-items-center">
          <img
            className="img-fluid shadow-lg"
            src={flags.svg}
            alt="flag"
            width="300px"
            loading="lazy"
          />
          <h1 className="fw-bold">{name.common}</h1>
        </div>

        <div className="d-flex align-items-center gap-5 my-5">
          <div>
            <p>Name</p>
            <p>Capital</p>
            <p>Continent</p>
            <p>Population</p>
          </div>

          <div>
            <p>{name.official}</p>
            <p>{capital}</p>
            <p>{subregion}</p>
            <p>{population.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center pt-2 gap-3 map-icon">
        <a rel="noopener" target={"_blank"} href={maps.googleMaps}>
          <Button className="shadow-lg">
            Google map <BiMapPin />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CountryInfo;
