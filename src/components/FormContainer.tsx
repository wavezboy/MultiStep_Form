import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface FormContainerProps {
  children: JSX.Element;
}

export default function FormContainer({ children }: FormContainerProps) {
  const Routes = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (!Routes) {
      return;
    }
    setPath(Routes.pathname);
  }, [Routes]);
  return (
    <div className="w-full flex items-center justify-center overflow-hidden h-screen">
      <div className="lg:flex lg:justify-evenly lg:px-[10%] lg:gap-[10%] w-full h-full lg:h-[90%] flex flex-col  lg:flex-row ">
        <div className="lg:h-full h-[250px] lg:w-[35%] lg:rounded-lg lg:overflow-hidden lg:bg-cover bg-cover lg:bg-hero bg-no-repeat bg-heroMobile">
          <div className="lg:min-h-[568px]  lg:flex lg:flex-col lg:justify-normal lg:mt-16 lg:gap-[28px] lg:px-20  mt-[35px] flex justify-center gap-[20px] ">
            <div className=" flex items-center  lg:w-[200px] gap-3">
              <div
                className={`${
                  path === "/" ? "bg-blue-400 border-none text-black" : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                1
              </div>
              <div className="lg:flex lg:justify-center lg:flex-col hidden">
                <p className="text-gray-500 font-bold text-[12px]">STEP 1</p>
                <h2 className="text-white  font-bold">YOUR INFO</h2>
              </div>
            </div>
            <div className="flex items-center lg:w-[200px] gap-3">
              <div
                className={`${
                  path === "/step2"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                2
              </div>
              <div className="lg:flex lg:justify-center lg:flex-col hidden">
                <p className="text-gray-500 font-bold text-[12px]">STEP 2</p>
                <h2 className="text-white font-bold">SELECT PLAN</h2>
              </div>
            </div>
            <div className="flex items-center lg:w-[200px] gap-3">
              <div
                className={`${
                  path === "/step3"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                3
              </div>
              <div className="lg:flex lg:justify-center lg:flex-col hidden">
                <p className="text-gray-500 font-bold text-[12px]">STEP 3</p>
                <h2 className="text-white font-bold">ADDS-ON</h2>
              </div>
            </div>
            <div className="flex items-center lg:w-[200px] gap-3">
              <div
                className={`${
                  path === "/step4"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                4
              </div>
              <div className="lg:flex lg:justify-center lg:flex-col hidden">
                <p className="text-gray-500 font-bold text-[12px]">STEP 4</p>
                <h2 className="text-white font-bold">SUMMARY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:h-[568px] h-screen lg:w-[65%] w-full lg:bg-white bg-slate-200 ">
          {children}
        </div>
      </div>
    </div>
  );
}
