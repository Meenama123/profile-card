// ProfileCard.jsx
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import Skills from './Skills';
import SocialLinks from './SocialLinks';
import ContactButton from './ContactButton';

function ProfileCard(props) {
  // We are receiving the data object from App.jsx
  const { data } = props;

  return (
    <div className="profile-card">
      <ProfileImage imageUrl={data.imageUrl} />
      
      <div className="card-content">
        <ProfileInfo 
          name={data.name} 
          title={data.title} 
          bio={data.bio} 
          location={data.location} 
        />
        
        <Skills skills={data.skills} />

        <SocialLinks />

        {/* Add the button component here */}
        <ContactButton />
      </div>
    </div>
  );
}

export default ProfileCard;