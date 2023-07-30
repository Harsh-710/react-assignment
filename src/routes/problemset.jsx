import { Link } from "react-router-dom";

import problemData from "./problems.json";
const problems = problemData.PROBLEMS;

function ProblemSet() {
    const problemStatements = problems.map(problem => {
        return <ProblemStatement key= {problem.id} problem= {problem} />
    })
    return (
        <div>
            <h1 style={{ textAlign : 'center'}}> Problems </h1>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Acceptance </th>
                        <th> Difficulty </th>
                    </tr>
                </thead>
                <tbody>
                  {problemStatements}
                </tbody>
            </table>
        </div>
    )
}


function ProblemStatement({problem}) {
  const colors = new Map([
    ['Easy', 'rgb(0, 255, 0)'],
    ['Medium', 'rgb(200, 200, 0)'],
    ['Hard', 'rgb(255, 0, 0)']
  ]);

  const color = colors.get(problem.difficulty);
    
    return (
        <tr>
        <Link to= {`/problem/:${problem.id}`}>
          <td>{problem.title}</td>
        </Link>
        <td>{problem.acceptance}</td>
        <td style={{ color : color}}>{problem.difficulty}</td>
      </tr>
    );
}

export default ProblemSet;
