type CustomButtonProps = {
  title: string;
  onClick?(): void;
  style?: string;
};

export const CustomButton = ({ title, onClick, style }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        style ||
        "rounded-[0.75rem]  w-[17.5rem] font-bold bg-primarybg text-white outline-none px-4 h-[4rem]"
      }
    >
      {title}
    </button>
  );
};
