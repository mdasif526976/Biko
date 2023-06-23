import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = (data) => {
    console.log(data);
  };
  return (
    <div className="flex bg-blue-300 items-center justify-center  h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
        <h1 className="text-center font-bold text-xl text-gray-800">
          Login Now
        </h1>
        <hr />
        <form onSubmit={handleSubmit(login)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Email</label>
            <input
              {...register("email", { required: "Enter your Email !" })}
              type="email"
              className="py-2 border-2 rounded px-1 border-blue-400 "
              placeholder="Enter your Email "
            />
            {errors.email && (
              <label>
                <p className="font-semibold text-red-500">
                  {errors?.email?.message}
                </p>
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer ",
                },
              })}
              placeholder="Enter your Password"
              className="py-2 px-1 border-2 rounded border-blue-400 "
            />
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="bg-blue-400 py-2 w-full text-white 
            font-semibold rounded"
            value="Login"
          ></input>
        </form>
        <p className="flex justify-between text-blue-600 font-semibold">
          Don't have a account?{" "}
          <span className="hover:underline">
            <Link to="/signup">Signup Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
