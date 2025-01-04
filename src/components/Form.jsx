import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Button from "./Button";
import UserInput from "./UserInput";
import CheckboxInput from "./CheckboxInput";

const Form = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="p-16 ml-4 relative w-full flex flex-col align-middle justify-center">
      {/* This can be further broken down into components if there are repititions */}
      <h1 className="text-white text-5xl font-normal">Create an account</h1>
      <p className="mt-6 text-grayX11-100 size-1 w-full">
        Already have an account?
        <a href="/login" className="ml-2 text-royal_purple-100 hover:underline">
          Login
        </a>
      </p>

      <form className="mt-16">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <UserInput type="text" id="first_name" placeholder="First name" />
          <UserInput type="text" id="last_name" placeholder="Last name" />
        </div>
        <div className="mb-6">
          <UserInput type="email" id="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <UserInput
            type="password"
            id="password"
            placeholder="Enter your password"
            rightIcon={
              isPasswordVisible ? (
                <FaEyeSlash
                  size={24}
                  color="lightgray"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  size={24}
                  color="lightgray"
                  onClick={togglePasswordVisibility}
                />
              )
            }
          />
        </div>
        <CheckboxInput
          labelText="I agree with the"
          hrefText="Terms and Conditions"
        />

        {/* Implement form validation on click 
            disable button if required fields are empty
            disable button after making an api call
        */}
        <Button
          id="create-account"
          title="Create account"
          containerClass="bg-royal_purple-100 rounded-md w-full font-robert-medium font-size[14px] h-auto mt-7 font-normal"
        />
      </form>
    </div>
  );
};

export default Form;
