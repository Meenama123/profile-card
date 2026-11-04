function Skills(props) {
    return (
        <div className="skills-container">
            {props.skills.map((skill, index) => (
                <span key={index} className="skill-pill">
                    {skill}
                </span>
            ))}
        </div>
    );
}

export default Skills;