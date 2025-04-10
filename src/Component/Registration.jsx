import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signinUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;

    signinUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      maxLength: {
                        value: 80,
                        message: "Maximum length is 80",
                      },
                    })}
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}

                  <label className="fieldset-label mt-4">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum length is 6 characters",
                      },
                    })}
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary mt-4">
                    Register
                  </button>
                </fieldset>
              </div>
            </form>
            <div className="px-5 pb-2">
              <p>
                If You Registration
                <Link
                  className="btn-link text-primary font-bold ml-2"
                  to={"/login"}
                >
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
