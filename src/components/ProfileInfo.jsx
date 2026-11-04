function ProfileInfo(props) {
    return (
        <div className="profile-info">
            <h2>{props.name}</h2>
            <p className="title">{props.title}</p>
            <p className="bio">{props.bio}</p>
            <p className="location">{props.location}</p>
        </div>
    );
}

export default ProfileInfo;