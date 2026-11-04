import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const userData = {
    name: "Aminat",
    title: "Frontend Developer",
    bio: "I build clean, responsive, and user-friendly interfaces. Currently mastering React and Git!",
    location: "Lagos, Nigeria",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  };
  return (
    <div className="app-container">
      <ProfileCard data={userData} />
    </div>
  );
}

export default App;