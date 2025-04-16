import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const handelAddPlace = async (data) => {
    const { countryName } = data;
    console.log(countryName);
    const email = user.email;
    data.avrageCost = parseInt(data.avrageCost);
    const Fulldata = { ...data, email };

    try {
      const response = await fetch("http://localhost:5000/add-tourists-spots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Fulldata),
      });

      const message = await response.json();
      console.log(message);
      // {success: false, message: 'this palce is allready exists'}

      if (message) {
        Swal.fire({
          title: `${message.success ? "Success" : "Unsuccess"}`,
          text: `${message.message}`,
          icon: `${message.success ? "success" : "error"}`,
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.log(error);
    }
    reset();

    console.log(Fulldata);
  };

  return (
    <div>
      <div className="container mx-auto my-4 shadow-2xl rounded-2xl">
        <h1>Add Tour A Spot</h1>
        <div className="mx-2">
          <form onSubmit={handleSubmit(handelAddPlace)} action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="palaceName"
                  className="text-gray-700 font-medium"
                >
                  Tourists Spot Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("palceName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  id="palaceName"
                  type="text"
                  placeholder="Enter the Palace Name"
                  className="input w-full"
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
                  ></textarea>
                </fieldset>
              </div>
            </div>
            <div>
              <button className="btn btn-secondary w-full my-3" type="submit">
                Add This Palce
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
