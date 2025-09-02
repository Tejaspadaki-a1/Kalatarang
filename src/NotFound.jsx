import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="font-bold text-3xl pt-24">
      <h1 className="">404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" ><button className="border-2 text-[#E58913] m-5 p-2 cursor-pointer">Go back to Home</button></Link>
    </div>
  );
}

export default NotFound;
