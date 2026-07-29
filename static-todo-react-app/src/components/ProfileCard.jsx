function ProfileCard({ name, age, bio }) {
  return (
    <div className="profile-card">

      <div className="info-box">
        <p><strong>Name:</strong> {name}</p>
      </div>

      <div className="info-box">
        <p><strong>Age:</strong> {age}</p>
      </div>

      <div className="info-box">
        <p><strong>Bio:</strong> {bio}</p>
      </div>

    </div>
  );
}

export default ProfileCard;