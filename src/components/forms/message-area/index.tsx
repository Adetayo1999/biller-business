type CustomTextBoxProps = {
  name?: string;
  labelText?: string;
  inputStyle?: string;
};

export const CustomTextBox = ({
  name,
  labelText,
  inputStyle,
}: CustomTextBoxProps) => {
  return (
    <div className="flex gap-y-2 flex-col">
      {labelText && (
        <label htmlFor="" className="font-raleway text-lg font-medium">
          {labelText}
        </label>
      )}
      <textarea
        name={name}
        cols={30}
        rows={10}
        className={
          inputStyle ||
          "border-2 border-[#E8E8E8] rounded-[0.75rem] w-full outline-none p-4"
        }
      ></textarea>
    </div>
  );
};
