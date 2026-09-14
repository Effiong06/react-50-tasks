import MemberCard from "./MemberCard";

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Track our group members, their roles, and progress.</p>
      <MemberCard name="Alice" role="Frontend Developer" />
      <MemberCard name="Brian" role="Backend Developer" />
      <MemberCard name="Chantal" role="UI Designer" />
    </>
  );
}

export default TeamDashboard;
