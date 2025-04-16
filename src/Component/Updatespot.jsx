import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const Updatespot = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const params = useParams();

  const [spot, setSpot] = useState(null);

  useEffect(() => {
    const loaddata = async () => {
      const response = await fetch(
        `http://localhost:5000/tourists-spots/${params.id}`
      );

      const data = await response.json();
      setSpot(data.data);
      const { _id, ...rest } = data.data;
      reset(rest);
    };
    loaddata();
  }, [params.id, reset]);

  const updatePlace = async (data) => {
    data.avrageCost = parseInt(data.avrageCost);
    console.log(data);

    try {
      const response = await fetch(
        `http://localhost:5000/tourists-spots/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resdata = await response.json();

      if (resdata.success) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Tourist spot has been updated successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while updating!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto my-4 shadow-2xl rounded-2xl">
        <h1>Add Tour A Spot</h1>
        <div className="mx-2">
          <form onSubmit={handleSubmit(updatePlace)} action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="palaceName"
                  className="text-gray-700 font-medium"
                >
                  Tourists Spot Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("palceName")}
                  id="palaceName"
                  type="text"
                  placeholder="Enter the Palace Name"
                  className="input w-full"
                  defaultValue={spot?.palceName}
                />
                {errors.palceName && (
                  <p className="text-red-600">{errors.palceName.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="countryName"
                  className="text-gray-700 font-medium"
                >
                  Country Name
                </label>
                <input
                  {...register("countryName")}
                  id="countryName"
                  type="text"
                  placeholder="Enter the Country Name"
                  className="input w-full"
                  defaultValue={spot?.countryName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="imageURL" className="text-gray-700 font-medium">
                  Image URL
                </label>
                <input
                  {...register("ImageURL")}
                  id="ImageURL"
                  type="text"
                  placeholder="Enter the ImgURL"
                  className="input w-full"
                  defaultValue={spot?.ImageURL}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-gray-700 font-medium">
                  Location
                </label>
                <input
                  {...register("location")}
                  id="location"
                  type="text"
                  placeholder="Enter the Full Location"
                  className="input w-full"
                  defaultValue={spot?.location}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="avrageCost"
                  className="text-gray-700 font-medium"
                >
                  Average Cost
                </label>
                <input
                  {...register("avrageCost")}
                  id="avrageCost"
                  type="text"
                  placeholder="Total Avrage Cost"
                  className="input w-full"
                  defaultValue={spot?.avrageCost}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="seasonality"
                  className="text-gray-700 font-medium"
                >
                  Seasonality
                </label>
                <input
                  {...register("seasonality")}
                  id="seasonality"
                  type="text"
                  placeholder="Seasonality"
                  className="input w-full"
                  defaultValue={spot?.seasonality}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="TravelTime"
                  className="text-gray-700 font-medium"
                >
                  Travel Time
                </label>
                <input
                  {...register("TravelTime")}
                  id="TravelTime"
                  type="text"
                  placeholder="Travel Time"
                  className="input w-full"
                  defaultValue={spot?.TravelTime}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="TotalVisitorsPerYear"
                  className="text-gray-700 font-medium"
                >
                  Total Visitors Per Year
                </label>
                <input
                  {...register("TotalVisitorsPerYear")}
                  id="TotalVisitorsPerYear"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="input  w-full"
                  defaultValue={spot?.TotalVisitorsPerYear}
                />
              </div>
              <div className="flex flex-col gap-2  md:col-span-2">
                <label
                  htmlFor="ShortDescription"
                  className="text-gray-700 font-medium"
                >
                  Short Description
                </label>
                <fieldset className="fieldset">
                  <textarea
                    {...register("sortDescription")}
                    className="textarea h-24 resize-none w-full"
                    placeholder="Short Description"
                    id="ShortDescription"
                    defaultValue={spot?.sortDescription}
                  ></textarea>
                </fieldset>
              </div>
            </div>
            <div>
              <button className="btn btn-secondary w-full my-3" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatespot;
