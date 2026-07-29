import ProfileCard from "./ProfileCard";

function ProfileContainer() {
  return (
    <div className="profile-container">
      <h1>Profile Cards</h1>

      <ProfileCard
        name="Alex"
        age="25"
        bio="Frontend Developer who loves React."
      />

      <ProfileCard
        name="Sarah"
        age="30"
        bio="UI Designer creating beautiful interfaces."
      />

      <ProfileCard
        name="John"
        age="28"
        bio="Full Stack Developer building web apps."
      />
    </div>
  );
}

export default ProfileContainer;