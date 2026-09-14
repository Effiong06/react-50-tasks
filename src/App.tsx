import { useState } from 'react'

function TeamDashboard() {
  const [teamScore, setTeamScore] = useState<number>(0)
  const [newMemberName, setNewMemberName] = useState<string>('')

  const increaseScore = () => {
    setTeamScore((prev) => prev + 1)
  }

  const decreaseScore = () => {
    setTeamScore((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted member name:', newMemberName)
  }

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group application.</p>
      <p>Current score: {teamScore}</p>
      <button onClick={increaseScore}>Increase Score</button>
      <button onClick={decreaseScore}>Decrease Score</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter new member name"
        />
        <button type="submit">Add Member</button>
      </form>

      {newMemberName && <p>Last submitted name: {newMemberName}</p>}
    </div>
  );
}

export default TeamDashboard;
