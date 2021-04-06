import React, { FC, ReactNode } from "react";
import "./Starter.scss";

export interface StarterProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Starter: FC<StarterProps> = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default Starter;
