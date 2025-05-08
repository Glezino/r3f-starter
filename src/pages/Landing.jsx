import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <Link to="/example">scene-example</Link><br/>
      <Link to="/editable-torus">editable-torus</Link><br/>
      <Link to="/rotating-box">rotating-box</Link><br/>
      <Link to="/clickable-sphere">clickable-sphere</Link><br/>
      <Link to="/load-model">load-model</Link><br/>
      <Link to="/lightning-and-shadows">lightning-and-shadows</Link><br/>
      <Link to="/environment">environment</Link><br/>
    </div>
  );
}