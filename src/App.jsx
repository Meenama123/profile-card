import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const userData = {
    name: "Aminat",
    title: "Frontend Developer",
    bio: "I build clean, responsive, and user-friendly interfaces. Currently mastering React and Git!",
    location: "Lagos, Nigeria",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: "/profile-pic.jpg"
  };
  return (
    <div className="app-container">
      <ProfileCard data={userData} />
    </div>
  );
}

export default App;