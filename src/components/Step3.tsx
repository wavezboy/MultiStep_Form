import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { FaCheck } from "react-icons/fa";
import { useAppContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Step3() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const { addsOn, chooseAddOn, clearAddOn, duration } = useAppContext();
  useEffect(() => {
    clearAddOn();
  }, []);

  return (
    <div>
      <FormContainer>
        <div className="p-7">
          <div className="bg-white lg:w-[600px] w-[310px] h-[400px] lg:h-full  mt-[-120px] lg:mt-0 lg:mx-0 mx-auto p-7 lg:p-0 lg:rounded-none rounded-[10px]">
            <div>
              <p className="text-[36px] capitalize mb-2 font-bold text-blue-950">
                Pick adds-on
              </p>
              <h2 className="text-gray-400 text-[18px] lg:mb-10 mb-3">
                Adds-on help enhance gaming experence
              </h2>
            </div>
            <div
              onClick={() => {
                setCheck1(!check1);
                duration === "Yearly"
                  ? chooseAddOn({ name: "Larger storage", price: "+$10" })
                  : chooseAddOn({ name: "Larger storage", price: "+$1" });
              }}
              className={`${
                check1
                  ? "bg-slate-100 border-[1.3px] border-purple-900  "
                  : "border-[1.3px] border-gray-300"
              } lg:h-[80px] h-[60px] mb-4 lg:p-0 p-2 flex items-center cursor-pointer  justify-center lg:w-[480px] w-[250px]  hover:border-[1.3px] hover:border-purple-900  rounded-md`}
            >
              <div className="flex items-center lg:gap-[115px]">
                <div className="flex items-center lg:gap-6 gap-2">
                  <div
                    className={`${
                      check1
                        ? "bg-[#473ddd]"
                        : "bg-white border border-gray-400"
                    } lg:h-[20px] lg:w-[20px] w-[18px] h-[18px] flex items-center justify-center rounded-sm `}
                  >
                    <FaCheck
                      className={`${
                        check1 ? "visible" : "hidden"
                      } text-white text-[12px]`}
                    />
                  </div>

                  <div>
                    <p className="text-blue-950 text-[13px] lg:text-[17px] font-semibold">
                      Online service
                    </p>
                    <h2 className="text-gray-400 text-[12px] lg:text-[17px]">
                      Access to multiplayer games
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[#473ddd] text-[13px] lg:text-[17px]">
                    {duration === "Yearly" ? "+$10/yr" : "+$1/mo"}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setCheck2(!check2);
                duration === "Yearly"
                  ? chooseAddOn({ name: "Larger storage", price: "+$20" })
                  : chooseAddOn({ name: "Larger storage", price: "+$2" });
              }}
              className={`${
                check2
                  ? "bg-slate-100 border-[1.3px] border-purple-900  "
                  : "border-[1.3px] border-gray-300"
              } lg:h-[80px] h-[60px] mb-4 lg:p-0  flex items-center cursor-pointer p-2 lg:justify-center lg:w-[480px] w-[250px]  hover:border-[1.3px] hover:border-purple-900  rounded-md`}
            >
              <div className="flex items-center  lg:gap-40">
                <div className="flex items-center lg:gap-6 gap-2">
                  <div
                    className={`${
                      check2
                        ? "bg-[#473ddd]"
                        : "bg-white border border-gray-400"
                    } lg:h-[20px] lg:w-[20px] w-[18px] h-[18px] flex items-center justify-center rounded-sm  `}
                  >
                    <FaCheck
                      className={`${
                        check2 ? "visible" : "hidden"
                      } text-white text-[12px]`}
                    />
                  </div>

                  <div className=" mr-8 lg:mr-0">
                    <p className="text-blue-950 text-[13px] lg:text-[17px] font-semibold">
                      Larger storage
                    </p>
                    <h2 className="text-gray-400 text-[12px] lg:text-[17px]">
                      Extra 1TB of cloud save
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[#473ddd] text-[13px] lg:text-[17px]">
                    {duration === "Yearly" ? "+$20/yr" : "+$2/mo"}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setCheck3(!check3);
                duration === "Yearly"
                  ? chooseAddOn({ name: "Larger storage", price: "+$20" })
                  : chooseAddOn({ name: "Larger storage", price: "+$2" });
              }}
              className={`${
                check3
                  ? "bg-slate-100 border-[1.3px] border-purple-900"
                  : "border-[1.3px] border-gray-300"
              } lg:h-[80px] h-[60px] lg:p-0 p-2 flex items-center cursor-pointer  lg:justify-center lg:w-[480px] w-[250px]  hover:border-[1.3px] hover:border-purple-900  rounded-md`}
            >
              <div className="flex items-center lg:gap-28">
                <div className="flex items-center lg:gap-6">
                  <div
                    className={`${
                      check3
                        ? "bg-[#473ddd]"
                        : "bg-white border border-gray-400"
                    } lg:h-[20px] lg:mr-0 mr-1 lg:w-[20px] w-[18px] h-[18px] flex items-center justify-center rounded-sm `}
                  >
                    <FaCheck
                      className={`${
                        check3 ? "visible" : "hidden"
                      } text-white text-[12px]`}
                    />
                  </div>

                  <div>
                    <p className="text-blue-950 text-[13px] lg:text-[17px] font-semibold">
                      Customizable
                    </p>
                    <h2 className="text-gray-400 text-[12px] lg:text-[17px]">
                      Custom theme on your profile
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[#473ddd] text-[13px] lg:text-[17px]">
                    {duration === "Yearly" ? "+$20/yr" : "+$2/mo"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:justify-center  absolute bottom-0 right-0 mr-4 lg:static mb-2 lg:mb-0 flex mt-28 items-center gap-28 lg:gap-[280px]">
            <Link to="/step2">
              <p className="text-gray- hover:text-blue-800 cursor-pointer">
                Go Back
              </p>
            </Link>
            <div>
              <Link to="/step4">
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
