import React, { useContext, useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import avdanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
import { useAppContext } from "../context/context";
import { Link } from "react-router-dom";
export default function Step2() {
  const [click, setClick] = useState(false);
  const [selectArcade, setSelectArcade] = useState(false);
  const [selectAdvanced, setSelectAdvanced] = useState(false);
  const [selectPro, setSelectPro] = useState(false);

  const {
    choosePlan,
    clearPlan,
    plan,
    setDuration,
    duration,
    chooseDuration,
    clearDuration,
  } = useAppContext();

  useEffect(() => {
    clearPlan();
    clearDuration();
  }, []);

  return (
    <div>
      <FormContainer>
        <div className="p-7 w-full">
          <div className="bg-white lg:w-[600px] w-[310px] h-[550px] lg:h-full  mt-[-120px] lg:mt-0 lg:mx-0 mx-auto p-7 lg:p-0 lg:rounded-none rounded-[10px]">
            <div>
              <p className="lg:text-[36px] text-[26px] capitalize mb-2 font-bold text-blue-950">
                select your plan
              </p>
              <h2 className="text-gray-400 text-[18px] mb-10">
                You have the option of monthly, or yearly billing.
              </h2>
            </div>
            <div className="lg:flex lg:ml-7 mx-auto lg:mx-0 gap-4">
              <div
                onClick={() => {
                  setSelectArcade(!selectArcade);
                  setSelectAdvanced(false);
                  setSelectPro(false);

                  if (duration == "Monthly") {
                    choosePlan({ name: "Arcade", price: "$9/mo" });
                  } else {
                    choosePlan({ name: "Arcade", price: "$90/yr" });
                  }
                }}
                className={`${
                  selectArcade
                    ? "bg-slate-100  border-[1px] border-blue-950  "
                    : null
                } lg:h-[170px] h-[90px] lg:w-[145px] w-[250px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer mb-3 flex lg:flex-col items-center gap-2 lg:justify-between p-4 rounded-md`}
              >
                <div>
                  <img src={arcade} alt="" />
                </div>
                <div>
                  {click ? (
                    <>
                      <p className="text-blue-950 font-semibold">Arcade</p>
                      <h2 className="text-gray-400 mt-1 mb-1">$90/yr</h2>
                      <p className="text-blue-950 font-normal text-[15px]">
                        2 months free
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-blue-950 mb-1 font-semibold">Arcade</p>
                      <h2 className="text-gray-400">$9/mo</h2>
                    </>
                  )}
                </div>
              </div>
              <div
                onClick={() => {
                  setSelectAdvanced(!selectAdvanced);
                  setSelectArcade(false);
                  setSelectPro(false);

                  if (duration == "Monthly") {
                    choosePlan({ name: "Advanced", price: "$12/mo" });
                  } else {
                    choosePlan({ name: "Advanced", price: "$120/yr" });
                  }
                }}
                className={`${
                  selectAdvanced
                    ? "bg-slate-100  border-[1px] border-blue-950  "
                    : null
                } lg:h-[170px] h-[90px] lg:w-[145px] w-[250px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer mb-3 flex lg:flex-col items-center gap-2 lg:justify-between p-4 rounded-md`}
              >
                <div>
                  <img src={avdanced} alt="" />
                </div>
                <div>
                  {click ? (
                    <>
                      <p className="text-blue-950 font-semibold">Advanced</p>
                      <h2 className="text-gray-400 mt-1 mb-1">$120/yr</h2>
                      <p className="text-blue-950 font-normal text-[15px]">
                        2 months free
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-blue-950 mb-1 font-semibold">
                        Advanced
                      </p>
                      <h2 className="text-gray-400">$12/mo</h2>
                    </>
                  )}
                </div>
              </div>
              <div
                onClick={() => {
                  setSelectPro(!selectPro);
                  setSelectAdvanced(false);
                  setSelectArcade(false);

                  if (duration == "Monthly") {
                    choosePlan({ name: "Pro", price: "$15/mo" });
                  } else {
                    choosePlan({ name: "Pro", price: "$150/yr" });
                  }
                }}
                className={`${
                  selectPro
                    ? "bg-slate-100  border-[1px] border-blue-950  "
                    : null
                } lg:h-[170px] h-[90px] lg:w-[145px] w-[250px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer mb-3 flex lg:flex-col items-center gap-2 lg:justify-between p-4 rounded-md`}
              >
                <div>
                  <img src={pro} alt="" />
                </div>
                <div>
                  {click ? (
                    <>
                      <p className="text-blue-950 font-semibold">Pro</p>
                      <h2 className="text-gray-400 mt-1 mb-1">$150/yr</h2>
                      <p className="text-blue-950 font-normal text-[15px]">
                        2 months free
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-blue-950 mb-1 font-semibold">Pro</p>
                      <h2 className="text-gray-400">$15/mo</h2>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[50px] lg:ml-7 flex justify-center items-center max-w-[480px] mt-6 rounded-sm gap-4 bg-gray-100">
              <p
                className={`${
                  click ? "text-gray-400" : "text-blue-950 font-semibold"
                }`}
              >
                Monthly
              </p>
              <div
                onClick={() => {
                  setClick(!click);
                  chooseDuration(duration === "Yearly" ? "Monthly" : "Yearly");
                }}
                className="bg-blue-950 h-[20px] cursor-pointer flex items-center  w-[50px] rounded-xl"
              >
                <span
                  className={`${
                    click ? "translate-x-7" : "translate-x-0"
                  } h-[15px] transition-all ml-1  w-[15px] block rounded-full bg-white`}
                ></span>
              </div>
              <h2
                className={`${
                  click ? "text-blue-950 font-semibold" : "text-gray-400"
                }`}
              >
                Yearly
              </h2>
            </div>
          </div>
          <div className="lg:justify-center  absolute bottom-0 right-0 mr-4 lg:static mb-2 lg:mb-0 flex mt-28 items-center gap-28 lg:gap-[280px]">
            <Link to="/">
              <p className="text-gray- hover:text-blue-800 cursor-pointer">
                Go Back
              </p>
            </Link>
            <div>
              <Link to="/step3">
                <button
                  type="submit"
                  className="h-[44px] text-[18px] cursor-pointer text-white font-bold flex items-center hover:bg-blue-500  justify-center w-[130px] bg-blue-950 rounded-[8px]"
                >
                  Next Step
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
