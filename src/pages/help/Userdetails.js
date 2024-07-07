import React from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      <p>Details about {userId}</p>
    </div>
  );
};

export default Userdetails;
