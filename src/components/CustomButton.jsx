import React from "react";

export const CustomButton = ({ text }) => {
  return (
    <button className="bg-secondaryColor hover:bg-opacity-90 px-4 py-1.5 text-sm text-white rounded">
      {text}
    </button>
  );
};
