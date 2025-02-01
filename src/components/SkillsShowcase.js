import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { AnimatedText } from 'animated-backgrounds';



const SkillsShowcase = () => {
  return (
    <section id="skills">
      <div className="container ">
        <div className="section-title">
          <h1>
            Core System Capabilities
          </h1>

        </div>
        <div className="skills-container">


          <div className="skill node">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">Node JS</h5>
                  <img src="images/node.png" />
                </div>
                <p className="card-content">Efficient backend development with Node.js for scalable applications.</p>
              </div>
            </div>
          </div>

          <div className="skill express">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">Express JS</h5>
                  <img src="images/express.png" />
                </div>
                <p className="card-content">Fast and minimalist backend framework for Node.js.</p>
              </div>
            </div>
          </div>

          <div className="skill react">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">React JS</h5>
                  <img src="images/react.png" />
                </div>
                <p className="card-content">Building dynamic and efficient UIs with component-based architecture.</p>
              </div>
            </div>
          </div>

          <div className="skill js">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">JS</h5>
                  <img src="images/js.webp" />
                </div>
                <p className="card-content">Dynamic and interactive web development with JS.</p>
              </div>
            </div>
          </div>

          <div className="skill mongo">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">MongoDB</h5>
                  <img src="images/mongo.webp" />
                </div>
                <p className="card-content">NoSQL database for flexible and scalable data storage.</p>
              </div>
            </div>
          </div>

          <div className="skill mysql">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">MySQL</h5>
                  <img src="images/mysql.png" />
                </div>
                <p className="card-content">Reliable relational database for structured data management.</p>
              </div>
            </div>
          </div>

          <div className="skill postgres">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">Postgres</h5>
                  <img src="images/postgres.png" />
                </div>
                <p className="card-content">Advanced SQL database with powerful features.</p>
              </div>
            </div>
          </div>

          <div className="skill html">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">HTML</h5>
                  <img src="images/html.png" />
                </div>
                <p className="card-content">Structuring the web with clean and semantic markup.</p>
              </div>
            </div>
          </div>

          <div className="skill css">
            <div className="card">
              <div className="content-box">
                <div className="skill-desc">
                  <h5 className="card-title">CSS</h5>
                  <img src="images/css.png" />
                </div>
                <p className="card-content">Bringing designs to life with responsive and modern styles.</p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>

  );
};

export default SkillsShowcase;
