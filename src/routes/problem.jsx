import React from "react";
import { useParams } from "react-router-dom";

import problemData from "./problems.json";
const problems = problemData.PROBLEMS;

export default function Problem() {
  const [code, setCode] = React.useState("");

  const { id } = useParams();
  const pid = id.substring(1);
  const problem = problems[pid - 1];

  return (
    <>
      <div className="problem-description"></div>
      <div className="code-editor"></div>
    </>
  );
}
