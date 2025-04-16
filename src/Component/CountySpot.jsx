import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CountySpot = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const spots = data.data || [];

  if (spots.length === 0) {
    return (
      <div className="container mx-auto text-center py-10 md:h-[calc(100vh-285px)] flex justify-center items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {data.message || "Sorry, no data found for this country."}
          </h2>
          <p className="text-gray-500 mb-6">
            আমাদের সেবা এখনও এই দেশে উপলব্ধ নয়।
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1>hghasjkhajkhsjkahsjkhalkjsakjslkajhs</h1>
      <div>
        {" "}
        <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {spots?.map((spot) => (
            <div key={spot._id} className="card bg-white shadow-md p-4">
              <img
                src={spot.ImageURL || null}
                alt={spot.palceName}
                className="h-48 w-full object-cover rounded-md"
              />
              <div className="mt-3">
                <h2 className="text-xl font-semibold">{spot.palceName}</h2>
                <p>Country: {spot.countryName}</p>
                <p>Cost: {spot.avrageCost} Taka</p>
                <button
                  onClick={() => navigate(`/tourists-spots/${spot._id}`)}
                  className="mt-3 btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountySpot;
