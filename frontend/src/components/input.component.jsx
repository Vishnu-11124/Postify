import React, { useState } from "react";

const InputBox = ({ name, type, icon, value, placeholder, id }) => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-[100%] mb-4 ">
      <input
        id={id}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") 
          : type
        }
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        className="input-box"
      />
      <i className={`fi fi-rr-${icon} input-icon`}></i>

      {type === "password" ? (
        <i
          className={`fi fi-rr-${
            passwordVisible ? "eye" : "eye-crossed"
          } input-icon left-auto right-4 cursor-pointer`}
          onClick={() => setPasswordVisible(!passwordVisible)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
