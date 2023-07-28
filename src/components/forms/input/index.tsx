type CustomInputProps = {
  name?: string;
  type?: "text" | "password";
  labelText?: string;
  inputStyle?: string;
};

export const CustomInput = ({
  name,
  type,
  labelText,
  inputStyle,
}: CustomInputProps) => {
  return (
    <div className="flex gap-y-2 flex-col">
      {labelText && (
        <label htmlFor="" className="font-raleway text-lg font-medium">
          {labelText}
        </label>
      )}
      <input
        type={type}
        name={name}
        className={
          inputStyle ||
          "border-2 border-[#E8E8E8] rounded-[0.75rem] w-full outline-none px-4 h-[4rem]  "
        }
      />
    </div>
  );
};
