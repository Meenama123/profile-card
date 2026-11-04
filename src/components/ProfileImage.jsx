// ProfileImage.jsx
function ProfileImage(props) {
  return (
    <div className="profile-image-container">
      <img src={props.imageUrl} alt="Profile picture" />
    </div>
  );
}

export default ProfileImage;