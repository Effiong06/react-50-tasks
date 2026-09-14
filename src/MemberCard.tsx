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
    <div className="member-card">
      <h3 className="member-name">{name}</h3>
      <p className="member-role">Role: {role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default MemberCard;