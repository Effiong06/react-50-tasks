interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted: number;
}

function MemberCard({ name, role, tasksCompleted }: MemberCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
    </div>
  );
}

export default MemberCard;
