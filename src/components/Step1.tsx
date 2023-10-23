import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import TextInputField from "./form/textinput";
import { Link, useNavigate } from "react-router-dom";

interface FormCredentials {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

export default function Step1() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div>
      <FormContainer>
        <div className="lg:p-7 lg:h-screen  ">
          <div className="bg-white lg:w-[600px] w-[310px] h-[400px] lg:h-full  mt-[-90px] lg:mt-0 lg:mx-0 mx-auto p-7 lg:p-0 lg:rounded-none rounded-[10px]">
            <div>
              <p className="lg:text-[300%] text-[20px] mb-2 font-bold text-blue-950">
                {/* 500% = 36px */}
                Personal info
              </p>
              <h2 className="text-gray-400 lg:text-[150%] text-[15px] lg:mb-10 mb-3">
                please provide your name, email address, and phone number.
              </h2>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                localStorage.setItem("userData", JSON.stringify(data));
                navigate("/step2");
              })}
            >
              <div>
                <TextInputField
                  name="Name"
                  label="Name"
                  type="text"
                  placeholder="e.g Vanessa Mint"
                  register={register}
                  registerOptions={{ required: "Required" }}
                />
                <TextInputField
                  name="Email Address"
                  label="Email Address"
                  type="text"
                  placeholder="e.g Vanessamint@hotmail.com"
                  register={register}
                  registerOptions={{ required: "Required" }}
                />
                <TextInputField
                  name="Phone Number"
                  label="Phone Number"
                  type="text"
                  placeholder="e.g +234 90 3717 3468"
                  register={register}
                  registerOptions={{ required: "Required" }}
                />
              </div>
              <div className=" lg:flex lg:justify-end pr-5 lg:pr-0 lg:h-0  w-full  lg:py-0 py-4  lg:mt-1 absolute right-0 bottom-0 lg:static lg:mr-0  ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-[44px] text-[18px]  hover:bg-blue-500 text-white font-bold flex lg:ml-0 ml-auto lg:mt-10  items-center  justify-center w-[130px] bg-blue-800 rounded-[8px]"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
