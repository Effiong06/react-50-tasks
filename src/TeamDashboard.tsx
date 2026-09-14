// Author: Veronicah

import MemberCard, { type MemberCardProps } from "./MemberCard";
import "./TeamDashboard.css";

const members: MemberCardProps[] = [
  { name: "Alice", role: "Frontend Developer", tasksCompleted: 8, isActive: true, bio: "Builds the user interface." },
  { name: "Brian", role: "Backend Developer", isActive: false },
  { name: "Chantal", role: "UI Designer", tasksCompleted: 12, isActive: true, bio: "Designs layouts and styles." },
];

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>
      <div className="dashboard">
        {members.map((member) => (
          <MemberCard
            key={member.name}
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