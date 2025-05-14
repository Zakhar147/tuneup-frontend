import React from "react";
import { NavLink } from "react-router-dom";

export const CreateAccBtn: React.FC = () => {
  return (
    <NavLink to="/registration" end>
      <button className="md:max-w-[250px] py-[8px] px-[28px] border border-accent rounded-[15px] text-textMain dark:text-dark-textMain font-bold text-[18px]">
        Create Account
      </button>
    </NavLink>
  );
};
