import React from "react";

export const CustomAccordion = ({
  isExpanded,
  onClicked,
  titleText,
  bodyText,
}) => {
  return (
    <div className="px-5 py-5 bg-primaryColor bg-opacity-5 xl:w-1/2 lg:w-3/4 w-full mx-auto rounded mb-2">
      <div className="flex justify-between items-center max-sm:items-start">
        <p
          className={`${
            isExpanded ? "text-primaryColor" : "text-textColor"
          } font-medium text-lg max-sm:text-base`}
        >
          {titleText}
        </p>
        <button onClick={onClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`size-5 ${
              isExpanded ? "text-primaryColor" : "text-textColor"
            }`}
          >
            {isExpanded ? (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            ) : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            )}
          </svg>
        </button>
      </div>
      <p className={`${isExpanded ? "" : "hidden"} text-textColorLight mt-2`}>
        {bodyText}
      </p>
    </div>
  );
};
