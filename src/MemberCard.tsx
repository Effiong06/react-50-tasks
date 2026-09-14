// Author: Veronicah

import "./MemberCard.css";

export interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted?: number;
  isActive: boolean;
  bio?: string;
}

// Task 45 & 46: card also needs its id and a typed callback to remove itself
// Task 47: plus a typed callback to toggle its active status
interface MemberCardComponentProps extends MemberCardProps {
  id: number;
  onRemove: (id: number) => void;
  onToggleActive: (id: number) => void;
}

function MemberCard({ id, name, role, tasksCompleted = 0, isActive, bio, onRemove, onToggleActive }: MemberCardComponentProps) {
  return (
    <div className={`member-card ${isActive ? "active" : "inactive"}`}>
      <h3 className="member-name">{name}</h3>
      <p className="member-role">Role: {role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p style={{ fontWeight: "bold" }}>Status: {isActive ? "Active" : "Inactive"}</p>
      {bio && <p>{bio}</p>}
      <button onClick={() => onToggleActive(id)}>
        Mark {isActive ? "Inactive" : "Active"}
      </button>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
}

export default MemberCard;
