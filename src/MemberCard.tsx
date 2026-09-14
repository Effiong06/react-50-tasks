// Author: Veronicah

import "./MemberCard.css";

export interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted?: number;
  isActive: boolean;
  bio?: string;
}

function MemberCard({ name, role, tasksCompleted = 0, isActive, bio }: MemberCardProps) {
  return (
    <div className={`member-card ${isActive ? "active" : "inactive"}`}>
      <h3 className="member-name">{name}</h3>
      <p className="member-role">Role: {role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p style={{ fontWeight: "bold" }}>Status: {isActive ? "Active" : "Inactive"}</p>
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default MemberCard;
