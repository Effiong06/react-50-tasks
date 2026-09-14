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
  // Task 33 & 34: teamScore state, updated with functional form
  const [teamScore, setTeamScore] = useState(0)

  // Task 36: string state for new member's name
  const [newMemberName, setNewMemberName] = useState('')

  // Task 33 & 34: increase score using functional update
  const increaseScore = () => {
    setTeamScore((prev) => prev + 1)
  }

  // Task 35: decrease score, never below 0
  const decreaseScore = () => {
    setTeamScore((prev) => (prev > 0 ? prev - 1 : 0))
  }

  // Task 38: typed change event for the controlled input
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value)
  }

  // Task 39 & 40: typed form submission, prevent default, use the value
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted member name:', newMemberName)
  }

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group application.</p>

      {/* Task 33: increase button */}
      <button onClick={increaseScore}>
        Increase Score
      </button>

      {/* Task 35: decrease button */}
      <button onClick={decreaseScore}>
        Decrease Score
      </button>

      <p>Current score: {teamScore}</p>

      {/* Task 37, 38, 39, 40: controlled input inside a form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter new member name"
        />
        <button type="submit">Add Member</button>
      </form>

      {/* Task 40: displaying the submitted name */}
      {newMemberName && <p>New member name (live): {newMemberName}</p>}
    </div>
  );
}

export default App;
