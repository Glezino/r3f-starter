import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <Link to="/scene1">Escena 1</Link> | <Link to="/scene2">Escena 2</Link>
    </div>
  );
}
