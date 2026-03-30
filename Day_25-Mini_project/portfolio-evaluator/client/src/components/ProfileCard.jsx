function ProfileCard({ profile, scores }) {
  return (
    <div>
      <img
        src={profile.avatar}
        width="100"
        style={{ borderRadius: "50%" }}
      />
      <h2>{profile.username}</h2>
      <p>Followers: {profile.followers}</p>

      <h3>🎯 Score: {scores.overall}</h3>
    </div>
  );
}

export default ProfileCard;