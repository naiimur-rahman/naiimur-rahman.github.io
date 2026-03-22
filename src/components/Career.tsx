import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>UIU CGPA Calculator</h5>
              </div>
              <h3>OCT 2025</h3>
            </div>
            <p>
              Developed and deployed a comprehensive CGPA calculation web application tailored specifically for students. Managed the full project lifecycle from initial coding and debugging to live hosting on GitHub Pages.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Incognito Chat</h5>
              </div>
              <h3>DEC 2025</h3>
            </div>
            <p>
              Developed a real-time, anonymous messaging application prioritizing user privacy. Integrated WebSockets for instant, low-latency communication and designed a frictionless interface that allows seamless interaction without traditional authentication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>UIU Bus Tracker</h5>
              </div>
              <h3>DEC 2025</h3>
            </div>
            <p>
              Built a responsive web application designed to track university buses. Focused on improving the daily student commute by developing functional tracking features, resolving bugs, and iterating based on user feedback.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer & Creator</h4>
                <h5>UIU LinkSphere</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building UIU LinkSphere, a centralized link-saving platform designed to organize university resources efficiently. Concurrently applying UI/UX design principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
