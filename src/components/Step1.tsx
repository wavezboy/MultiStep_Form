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
        <div className="p-7 h-full">
          <div className="h-[100%]">
            <div>
              <p className="text-[500%] mb-2 font-bold text-blue-950">
                {/* 500% = 36px */}
                Personal info
              </p>
              <h2 className="text-gray-400 text-[250%] mb-10">
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
              <div className=" flex justify-end mt-1 sm:mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-[44px] text-[18px] hover:bg-blue-500 text-white font-bold flex items-center mt-10 justify-center w-[130px] bg-blue-800 rounded-[8px]"
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
