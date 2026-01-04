import React from "react";
import InputBox from "../components/input.component";
import googleLogo from "../imgs/google.png";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper keyvalue={type}>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-12">
            {type === "sign-in" ? "Welcome Back" : "Join Postify Today"}
          </h1>
          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="user"
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email Address"
            icon="envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="key"
          />

          <button className="btn-dark center mt-12" type="submit">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </button>

          <div className="relative flex w-full gap-2 my-8 opacity-12 uppercase text-black font-bold items-center">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleLogo} className="w-5" alt="" />
            Continue with Google
          </button>

          {type === "sign-in" ? (
            <p className="text-center text-dark-grey text-xl mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black underline text-xl ">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-center text-dark-grey text-xl mt-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-black underline text-xl">
                Sign In
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
