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

  // Task 48: which status to show — all members, only active, or only inactive
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  // Task 49: controlled search input to filter members by name
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  // Task 45 & 46: remove a member by id, passed down as a typed callback prop
  const removeMember = (id: number) => {
    setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
  };

  // Task 47: flip a member's active status by id
  const toggleMemberActive = (id: number) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isActive: !member.isActive } : member
      )
    );
  };

  // Task 49: typed change handler for the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Task 48 & 49: members matching both the status filter and the search term
  const visibleMembers = members
    .filter((member) => {
      if (statusFilter === "active") return member.isActive;
      if (statusFilter === "inactive") return !member.isActive;
      return true;
    })
    .filter((member) => member.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>

      <div className="status-filter">
        <button onClick={() => setStatusFilter("all")} disabled={statusFilter === "all"}>
          All
        </button>
        <button onClick={() => setStatusFilter("active")} disabled={statusFilter === "active"}>
          Active
        </button>
        <button onClick={() => setStatusFilter("inactive")} disabled={statusFilter === "inactive"}>
          Inactive
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search members by name"
        className="search-input"
      />

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
      {/* Author: Norette */}
      {/* Task 44: confirms members list renders automatically*/}
      <p>Total members: {members.length}</p>

      {/* Task 50: final integration check — filters, search, and the member list all agree */}
      {visibleMembers.length === 0 && <p>No members match the current filter and search.</p>}

      <div className="dashboard">
        {visibleMembers.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            bio={member.bio}
            onRemove={removeMember}
            onToggleActive={toggleMemberActive}
          />
        ))}
      </div>
    </>
  );
}

export default TeamDashboard;
