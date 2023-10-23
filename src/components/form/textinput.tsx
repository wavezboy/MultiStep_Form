import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

export default function TextInputField({
  name,
  label,
  register,
  registerOptions,
  error,
  ...props
}: TextInputFieldProps) {
  return (
    <div className="flex lg:min-h-[110px] h-[80px] w-full  lg:gap-2 flex-col">
      <label className=" font-medium lg:text-[200%] text-blue-900">
        {label}
      </label>
      <input
        className=" placeholder:text-[#CCCCCC]  font-secondary font-bold text-blue-950 rounded-[6px] outline-purple-950  border-[#CCCCCC] border w-[100%] lg:min-h-[50px] max-w-full p-2 bg-white"
        {...props}
        {...register(name, registerOptions)}
      />
    </div>
  );
}
