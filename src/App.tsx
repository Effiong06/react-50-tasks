import { useState } from 'react'

interface TeamMember {
  id: number
  name: string
  role: string
  email: string
  isActive: boolean
  joinedDate: Date
}

function App() {
  const [teamScore, setTeamScore] = useState(0)

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group application.</p>
      <button onClick={() => setTeamScore((prev) => prev + 1)}>
        Team Score: {teamScore}
      </button>
      <p>Current score: {teamScore}</p>
    </div>
  );
}

export default App;
