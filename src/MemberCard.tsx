interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

function MemberCard({ name, role, tasksCompleted, isActive }: MemberCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default MemberCard;
