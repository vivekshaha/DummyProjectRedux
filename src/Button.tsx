import { FC } from "react";
import React from "react";

type ButtonProps = {
  theme?: "primary" | "secondry";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, ...rest }) => {
  let themecolor = "bg-yellow-300";
  if (theme == "secondry") {
    themecolor = "bg-pink-600";
  }
  return (
    <button
      {...rest}
      className={"px-4 py-2 border-1 border-gray-400 rounded-md " + themecolor}
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
};
export default Button;
