import React from "react";

const CheckboxInput = ({ labelText, hrefText }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-5 h-5 rounded"
          required
        />
      </div>
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelText}
        <a
          href="/terms-conditions"
          className="ml-1 text-royal_purple-100 hover:underline dark:text-royal_purple-100"
        >
          {hrefText}
        </a>
      </label>
    </div>
  );
};

export default CheckboxInput;
