import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner";
import "./Header.css";

export default function Header() {
  return (
    <div className="mt-5 mb-5">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <h2 className="header-link">Podcaster</h2>
        </Link>
        <Spinner />
      </div>
      <hr className="shadow-lg opacity-25" />
    </div>
  );
}
