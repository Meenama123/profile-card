// ContactButton.jsx
import { useState } from 'react';

function ContactButton() {
  // 1. Declare the state variable
  // isContactVisible is the current value (starts as false)
  // setIsContactVisible is the function we call to change it
  const [isContactVisible, setIsContactVisible] = useState(false);

  // 2. The event handler function
  const handleClick = () => {
    // Toggle the state: if true, make it false; if false, make it true
    setIsContactVisible(!isContactVisible);
  };

  return (
    <div className="contact-section">
      {/* 3. The Button with the onClick event */}
      <button className="contact-btn" onClick={handleClick}>
        {isContactVisible ? "Close Contact" : "Contact Me"}
      </button>

      {/* 4. Conditional Rendering: Only show this if isContactVisible is true */}
      {isContactVisible && (
        <div className="contact-info">
          <p>Email me at: <strong>waminat58@gmail.com</strong></p>
        </div>
      )}
    </div>
  );
}

export default ContactButton;