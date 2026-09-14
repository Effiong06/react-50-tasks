import MemberCard from "./MemberCard";

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>
      <MemberCard name="Alice" role="Frontend Developer" tasksCompleted={8} />
      <MemberCard name="Brian" role="Backend Developer" tasksCompleted={5} />
      <MemberCard name="Chantal" role="UI Designer" tasksCompleted={12} />
    </>
  );
}

export default TeamDashboard;
