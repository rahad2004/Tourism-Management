import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const MyAddList = () => {
  const { user } = useAuth();
  const [mySpots, setMyspots] = useState([]);

  const email = user.email;

  const handelAddPlace = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/tourists-spots/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();

        if (data.success) {
          setMyspots((prev) => prev.filter((spot) => spot._id !== id));

          Swal.fire({
            title: "Deleted!",
            text: `${data.message}`,
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const loaddata = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/my-sports?email=${email}`
        );

        const data = await response.json();
        setMyspots(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    loaddata();
  }, [email]);
  console.log(mySpots);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        📝 My Added Tourist Spots
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                #
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                Image
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                Place Name
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                Location
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                Cost
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mySpots.map((spot, index) => (
              <tr key={spot._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={spot.ImageURL}
                    alt={spot.placeName}
                    className="w-16 h-12 object-cover rounded shadow"
                  />
                </td>
                <td className="px-4 py-2">{spot.palceName}</td>
                <td className="px-4 py-2">{spot.location}</td>
                <td className="px-4 py-2">{spot.avrageCost}Taka</td>
                <td className="px-4 py-2  space-y-4 md:space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    onClick={() => console.log("Update", spot._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handelAddPlace(spot._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {mySpots.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-8">
                  No spots added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddList;
