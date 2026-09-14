import MemberCard from "./MemberCard";

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>
      <MemberCard name="Alice" role="Frontend Developer" tasksCompleted={8} isActive={true} bio="Builds the user interface." />
      <MemberCard name="Brian" role="Backend Developer" tasksCompleted={5} isActive={false} />
      <MemberCard name="Chantal" role="UI Designer" tasksCompleted={12} isActive={true} bio="Designs layouts and styles." />
    </>
  );
}

export default TeamDashboard;
