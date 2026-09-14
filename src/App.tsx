import { useState } from 'react'

function TeamDashboard() {
  const [teamScore, setTeamScore] = useState<number>(0)

  const increaseScore = () => {
    setTeamScore(teamScore + 1)
  }

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group application.</p>
      <p>Current score: {teamScore}</p>
      <button onClick={increaseScore}>Increase Score</button>
    </div>
  );
}

export default TeamDashboard;
