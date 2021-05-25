import React, { Component } from "react";
import ParticlesBackground from "./ParticlesBackground";
import Clients from "./Clients";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";


// import noise from "./images/noise.png";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div>
          <ParticlesBackground />
        </div>
        <div>
        <SmoothScroll/>
        </div>
        <section className="viewport">
          <div id="scroll-container" className="scroll-container">
            <div className="content">
              <div className="content-wrapper">
                <div className="work-heading internal-heading">
                  <h1>
                    <div className="anim-heading"></div>
                    <div className="span8">
                      <span>About</span>
                    </div>
                  </h1>
                </div>
                <div className="about-container">
                  <div className="insight-contianer">
                    <div>
                      <img
                        src="images/foresight-insight.svg"
                        alt="foresight-insight"
                        className="insight-img"
                      />
                      <div className="insight-heading">
                        <h2>
                          Foresight through
                          <br />
                          insight
                        </h2>
                      </div>
                    </div>
                    <div className="insight-content">
                      <p>
                        We believe that the secret to creativity lies in asking
                        the right questions. An inquiring mind catalyses
                        innovation and a whole new landscape is created. At
                        Raasta Studios, we have partnered with our clients to
                        build differentiated insights into brand and
                        institutional storytelling. Together we have often
                        chosen the path less travelled and delivered audio-
                        visual content and formats that stand out and create a
                        unique footprint.
                      </p>
                    </div>
                  </div>
                  <div className="journey-container">
                    <div className="journey-block">
                      <div className="journey-heading">
                        <h2>
                          Our journey has
                          <br />
                          just begun.
                        </h2>
                      </div>
                      <div className="journey-count">
                        <div id="counter">
                          <div className="d-flex">
                            <div className="counter-value" data-count="90">
                              0
                            </div>
                            <div className="plus">+</div>
                            <div>
                              <span>Clients</span>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="counter-value" data-count="200">
                              0
                            </div>
                            <div className="plus">+</div>
                            <div>
                              <span>Videos</span>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="counter-value" data-count="20">
                              0
                            </div>
                            <div className="plus">+</div>
                            <div>
                              <span>Formats</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pedigree-container">
                    <div className="pedigree-block">
                      <div className="pedigree-heading">
                        <h3>Our Degree is Pedigree</h3>
                      </div>
                      <div className="pedigree-flex d-flex">
                        <div className="pedigree-img">
                          <img
                            src="images/pedigree.svg"
                            alt="Degree is Pedigree"
                          />
                        </div>
                        <div className="pedigree-content">
                          <p>
                            The past seven years have seen Raasta Studios
                            approach business uniquely. We have traversed
                            through documentaries, commercials, brand films,
                            corporate films, marketing communications and from
                            time lapse videos to virtual reality, we have
                            consistently raised our exacting standards of
                            quality and variety. In the process we have
                            significantly helped our clients’ equity. The awards
                            and accolades we keep winning stand testimony to
                            this.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pedigree-container">
                    <div className="pedigree-block">
                      <div className="pedigree-heading">
                        <h3>Dream Team of Space- Mongers</h3>
                      </div>
                      <div className="pedigree-flex d-flex">
                        <div className="pedigree-img mongers-img">
                          <img
                            src="images/mongers.svg"
                            alt="Degree is Pedigree"
                          />
                        </div>
                        <div className="pedigree-content">
                          <p>
                            We are a team of 25 discerning, dedicated and
                            passionate writers, artists, graphic designers,
                            cinematographers, directors, producers, musicians,
                            and editors. A team which feels your pulse and
                            brings your stories to life. Human capabilities when
                            married to state of the art technology, deliver
                            compelling experiences for your brands and
                            institutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-container">
                    <div className="core-heading">
                      <div>
                        <h3>Core Team</h3>
                      </div>
                    </div>
                    <div className="team-block">
                      <div className="team-item">
                        <div className="member-img">
                          <img src="images/naren.png" alt="Naren" />
                        </div>
                        <div className="mamber-name">
                          <p>Naren</p>
                          <a
                            href="https://www.linkedin.com/in/narendatta"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="zmdi zmdi-hc-fw"></i>
                          </a>
                        </div>
                      </div>
                      <div className="team-item">
                        <div className="member-img">
                          <img src="images/prem.png" alt="Prem" />
                        </div>
                        <div className="mamber-name">
                          <p>Prem</p>
                          <a
                            href="https://www.linkedin.com/in/premkumarvislawath/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="zmdi zmdi-hc-fw"></i>
                          </a>
                        </div>
                      </div>
                      <div className="team-item">
                        <div className="member-img">
                          <img src="images/sai.png" alt="Sai" />
                        </div>
                        <div className="mamber-name">
                          <p>Sai</p>
                          <a
                            href="https://www.linkedin.com/in/csaikumarr/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="zmdi zmdi-hc-fw"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Clients />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default About;
