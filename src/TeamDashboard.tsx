// Author: Veronicah

import { useState } from "react";
import MemberCard, { type MemberCardProps } from "./MemberCard";
import "./TeamDashboard.css";

// Author: Norette
// Task 41
interface Member extends MemberCardProps {
  id: number;
}

// Author: Norette
// Task 42: adding id field to each object
const initialMembers: Member[] = [
  { id: 1, name: "Alice", role: "Frontend Developer", tasksCompleted: 8, isActive: true, bio: "Builds the user interface." },
  { id: 2, name: "Brian", role: "Backend Developer", isActive: false },
  { id: 3, name: "Chantal", role: "UI Designer", tasksCompleted: 12, isActive: true, bio: "Designs layouts and styles." },
];
function TeamDashboard() {
  // Task 31 & 32: teamScore state and display
  const [teamScore, setTeamScore] = useState<number>(0);

  // Task 36: string state for new member's name
  const [newMemberName, setNewMemberName] = useState<string>("");

  // Author: Norette
  // Task 42: array state for members
  const [members, setMembers] = useState<Member[]>(initialMembers);

  // Task 33 & 34: increase score using a functional update
  const increaseScore = () => {
    setTeamScore((prev) => prev + 1);
  };

  // Task 35: decrease score, never below 0
  const decreaseScore = () => {
    setTeamScore((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Task 37 & 38: controlled input with typed change event
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value);
  };

  // Task 39 & 40: typed form submission, prevent default, use the value
  // Author: Norette
  // Task 43: add the new member to state on submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newMemberName.trim()) return;

    const newMember: Member = {
      id: Date.now(),
      name: newMemberName,
      role: "Unassigned",
      tasksCompleted: 0,
      isActive: true,
    };

    setMembers((prevMembers) => [...prevMembers, newMember]);
    setNewMemberName("");
  };

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>

      <section className="team-score">
        <p>Current score: {teamScore}</p>
        <button onClick={increaseScore}>Increase Score</button>
        <button onClick={decreaseScore}>Decrease Score</button>
      </section>

      <form onSubmit={handleSubmit} className="add-member-form">
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter new member name"
        />
        <button type="submit">Add Member</button>
      </form>
      {newMemberName && <p>Last submitted name: {newMemberName}</p>}

      <div className="dashboard">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            bio={member.bio}
          />
        ))}
      </div>
    </>
  );
}

export default TeamDashboard;
