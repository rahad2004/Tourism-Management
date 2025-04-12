import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signinUser, googleSignin, FacebookSignin } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;

    signinUser(email, password)
      .then((result) => {
        Swal.fire({
          title: `Hey ${result.user.displayName}`,
          text: "Your Are successfully Login!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        Swal.fire({
          title: `Hey ${result.user.displayName}`,
          text: "Your Are successfully Login!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  const handelFacebookSignin = () => {
    FacebookSignin()
      .then((result) => {
        Swal.fire({
          title: `Hey ${result.user.displayName}`,
          text: "Your Are successfully Login!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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

                  <div className="mt-2">
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button type="submit" className="btn btn-primary mt-4">
                    Login
                  </button>
                </fieldset>
              </div>
            </form>

            {/* google and facebook login button */}
            <div className="divider">OR</div>
            <div className=" px-4 my-2 flex gap-4">
              <button
                onClick={handelGoogleSignin}
                className="btn bg-[#2F2F2F] text-white border-[#e5e5e5] flex-1/2 "
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <button
                onClick={handelFacebookSignin}
                className="btn bg-[#1A77F2] text-white border-[#005fd8] flex-1/2"
              >
                <svg
                  aria-label="Facebook logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
                Login with Facebook
              </button>
            </div>
            {/* google and facebook login button end */}

            {/* link to signup */}
            <div className="px-5 pb-2">
              <p>
                New to Avada?{" "}
                <Link
                  className="btn-link link-hover text-primary font-bold"
                  to={"/registration"}
                >
                  Create Account
                </Link>{" "}
              </p>
            </div>
            {/* link to signup end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
