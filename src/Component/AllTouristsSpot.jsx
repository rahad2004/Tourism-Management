import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AllTouristsSpot = () => {
  const navigate = useNavigate();
  const { register, watch } = useForm();
  const sortOrder = watch("sort");
  const [spots, setspot] = useState(null);

  useEffect(() => {
    const fetchSpot = async () => {
      try {
        let url = "http://localhost:5000/tourists-spots";

        if (sortOrder) {
          url = url + `?sort=${sortOrder}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setspot(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpot();
  }, [sortOrder]);

  console.log(spots);

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">All Tourist Spots</h1>
          <form>
            <select {...register("sort")} className="select select-bordered">
              <option value="">Sort by Cost</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spots?.map((spot) => (
            <div key={spot._id} className="card bg-white shadow-md p-4">
              <img
                src={spot.ImageURL}
                alt={spot.palceName}
                className="h-48 w-full object-cover rounded-md"
              />
              <div className="mt-3">
                <h2 className="text-xl font-semibold">{spot.palceName}</h2>
                <p>Country: {spot.countryName}</p>
                <p>Cost: {spot.avrageCost} Taka</p>
                <button
                  onClick={() => navigate(`/spot/${spot._id}`)}
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

export default AllTouristsSpot;
