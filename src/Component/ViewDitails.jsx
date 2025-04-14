import React from "react";
import { useLoaderData } from "react-router";

const ViewDitails = () => {
  const spot = useLoaderData();
  console.log(spot);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[500px]">
          <img
            src={spot.ImageURL}
            alt={spot.placeName}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white drop-shadow-md">
            {spot.placeName}
          </h1>
        </div>

        {/* Right: Content */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-[16px] leading-relaxed">
            <p>
              <strong>🌍 Country:</strong> {spot.countryName}
            </p>
            <p>
              <strong>📍 Location:</strong> {spot.location}
            </p>
            <p>
              <strong>💰 Avg. Cost:</strong> {spot.avrageCost} Taka
            </p>
            <p>
              <strong>🕒 Travel Time:</strong> {spot.TravelTime}
            </p>
            <p>
              <strong>📅 Seasonality:</strong> {spot.seasonality}
            </p>
            <p>
              <strong>👥 Visitors/Year:</strong> {spot.TotalVisitorsPerYear}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-1 inline-block">
              📝 Description
            </h2>
            <p className="text-gray-600">{spot.sortDescription}</p>
          </div>

          {/* Optional: Button */}
          <div className="pt-4">
            <button className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDitails;
