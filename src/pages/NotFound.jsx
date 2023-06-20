import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Page not found</div>{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to home
      </button>{" "}
    </div>
  );
};

export default NotFound;
