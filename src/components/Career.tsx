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
                <h4>Software Developer</h4>
                <h5>Firmwise Services India Pvt. Ltd.</h5>
              </div>
              <h3>2019 - 2019</h3>
            </div>
            <p>
              Started my professional journey, building frontend foundations and
              contributing to web-based commercial applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>TecOrb Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
            <p>
              Developed various web applications including real-time tracking
              solutions and e-commerce platforms using Angular and modern JavaScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Developer</h4>
                <h5>PureSoftware</h5>
              </div>
              <h3>2021 - PRESENT</h3>
            </div>
            <p>
              Leading frontend architecture for <b>MPWEB (MHK Market Prominence)</b>, 
              spearheading the integration of <b>Generative AI</b> into enterprise insurance 
              workflows, and optimizing <b>LLM orchestration</b> and <b>Angular Signals</b> 
              within complex Angular (v8–21) ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
