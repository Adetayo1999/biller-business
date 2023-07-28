"use client";
import { FC } from "react";

interface Props {
  children: any;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="w-[90%] md:w-[85%] mx-auto h-full ">{children}</div>;
};
