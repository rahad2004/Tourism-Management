import React from "react";
import { Link } from "react-router";

const CountryCard = ({ country }) => {
  const { name, capital, population, language, currency, flag } = country;

  return (
    <div className="bg-[#e8e5dc] rounded-2xl shadow-lg overflow-hidden">
      <div className="h-[250px]">
        <img src={flag} alt={`${name} flag`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <div className="flex ">
          <p className="w-1/2">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
          <p className="w-1/2">
            <span className="font-semibold">Population:</span> {population}
          </p>
        </div>
        <div className="flex">
          <p className="w-1/2">
            <span className="font-semibold">Language:</span> {language}
          </p>
          <p className="w-1/2">
            <span className="font-semibold">Currency:</span> {currency}
          </p>
        </div>
        <div>
            <Link to={`/tourists-spots/country/${name}`} className="btn btn-primary">View Sopt</Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
