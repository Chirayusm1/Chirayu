import React from 'react';
import './css/Projects.css';
import kannada from 'D:/react/portfolio1/src/assets/images/kannada.jpeg'
import music from 'D:/react/portfolio1/src/assets/images/music.png'
import brain from 'D:/react/portfolio1/src/assets/images/brain.webp'


const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            <span>My</span> Learnings
          </h1>
        </div>

        <div className="all-projects">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-info">
              <a
                href="none"
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                KANNADA HANDWRITTEN CHARACTER RECOGNITION
              </a>
              <p>
              • CharacterIdentification Model Development: Designed and implemented a
                characteridentification model utilizing the Chars-74k dataset.
              • Achieved an impressive accuracy rate of 86.2% in characteridentification.
              </p>
              <h3>Tech Stack: Python, CNN</h3>
            </div>
            <div className="project-img">
              <img
                src={kannada}
                alt="KANNADA HANDWRITTEN CHARACTER RECOGNITION"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item reverse">
            <div className="project-info">
              <a
                href="none"
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                AUDIO MUSIC FINGERPRINT RECOGNITION
              </a>
              <p>
              •Audio fingerprinting succinctly captures essential features of an audio signal
                for compactrepresentation.
              • Acoustic fingerprinting, with applications in content-based audio retrieval
                and broadcast monitoring.
              • The proposed method ensures real-time music recognition across different
                applications, allowing background recording and instant linking to the
                recognized song.
              </p>
              <h3>Tech Stack: Python, React Native.js</h3>
            </div>
            <div className="project-img">
              <img
                src={music}
                alt="AUDIO MUSIC FINGERPRINT RECOGNITION"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item">
            <div className="project-info">
              <a
                href="https://github.com/Chirayusm1/parkinson-disease-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                PARKINSON’S DISEASE DETECTION
              </a>
              <p>
              • Implemented deep neural network and ML models (SVM, Random Forest,
                XGBoost) with 100 percent accuracy
              • Despite 197 instances, suggests boosting accuracy with a larger dataset and
                combined patient data.
              • Merging voice data with additional patient features forrobustresults.
              </p>
              <h3>Tech Stack: Python, ML</h3>
            </div>
            <div className="project-img">
              <img
                src={brain}
                alt="PARKINSON’S DISEASE DETECTION"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
