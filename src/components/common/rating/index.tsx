import styles from "@/assets/styles/rating.module.css";

export const Rating = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between   ">
      <div className="flex gap-x-[1.125rem]  items-center">
        <h1
          className={`${styles.rating__text} text-4xl font-medium w-[4.5rem] md:w-fit `}
        >
          28K
        </h1>
        <div className="flex">
          <div className="h-[3rem] w-[0.0063rem] mr-[0.625rem] bg-[#E8E8E8] hidden md:inline" />
          <div className="">
            <h5 className="text-lg text-[#252525]  font-semibold">
              28K Satisfied Clients
            </h5>
            <p className="text-[#8A8A8A]">More than 28K+ are Satisfied</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-[1.125rem] items-center">
        <h1
          className={`${styles.rating__text} text-4xl font-medium w-[4.5rem] md:w-fit`}
        >
          5.0
        </h1>
        <div className="flex">
          <div className="h-[3rem] w-[0.0063rem] mr-[0.625rem] bg-[#E8E8E8]  hidden md:inline" />
          <div className="">
            <h5 className="text-lg text-[#252525]  font-semibold">
              5.0 Rated by Average
            </h5>
            <p className="text-[#8A8A8A]">Satisfied by 1.000 Users</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-[1.125rem] items-center">
        <h1
          className={`${styles.rating__text} text-4xl font-medium w-[4.5rem] md:w-fit`}
        >
          10K
        </h1>
        <div className="flex">
          <div className="h-[3rem] w-[0.0063rem] mr-[0.625rem] bg-[#E8E8E8] hidden md:inline" />
          <div className="">
            <h5 className="text-lg text-[#252525]  font-semibold">
              Passive Investment
            </h5>
            <p className="text-[#8A8A8A]">More than 10K are Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};
