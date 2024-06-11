import React from "react";
import "./portfolio.module.css";
import styles from "./portfolio.module.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { LuFolder } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <div class={styles.container}>
      <div class={styles.top}>
        <div class={styles.header}>
          <div class={styles.logo}>
            <span>&#11041;</span>
            <a href="#intro">N</a>
          </div>
          <div class={styles.menu}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#exp">Experience</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#featured">Showcase</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href className={styles.resume} >Resumé</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class={styles.bottom}>
        <div class={styles.leftBar}>
          <ul>
            <li>
              <FaGithub className={styles.sidebarIcon} />
            </li>
            <li>
              <FaInstagram className={styles.sidebarIcon} />
            </li>
            <li>
              <FaTwitter className={styles.sidebarIcon} />
            </li>
            <li>
              <FaCodepen className={styles.sidebarIcon} />
            </li>
          </ul>
          <div class={styles.lineV}></div>
        </div>
        <div class={styles.centerMain}>
          {/* <!-- Introduction --> */}
          <div class={styles.intro}>
            <h4>Hi, my name is</h4>
            <h1>Niranjan Bavaskar</h1>
            <h2>I build web-applications.</h2>
            <p>
              I'm a software engineer specializing in building (and occasionally
              <br />
              designing) exceptional digital experiences. Currently, I'm focused
              <br />
              on building accessible, human-centered products at TechM.
            </p>
            <a href="">Check Out My Courses !</a>
          </div>
          {/* <!-- Introduction --> */}
          <a name="about"></a>
          {/* <!-- About Section --> */}
          <div class={styles.about}>
            <div class={styles.aboutCont}>
              <h1>
                About me
                <div class={styles.strLine}></div>
              </h1>
              <p>
                Hello! My name is Niranjan and I enjoy creating things that live on the
                internet. My interest in web development started back in 2023
                when I decided to try editing custom Tumblr themes — turns out
                hacking together a custom reblog button taught me a lot about
                HTML & CSS!
              </p>
              <br />
              <p>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients. I also recently launched a
                course that covers everything you need to build a web app with
                the Spotify API using Node & React.
              </p>
              <br />
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <span class={styles.techStack}>
                <ul>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    HTML
                  </li>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    CSS
                  </li>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    Javascript
                  </li>
                </ul>
                <ul>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    Java
                  </li>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    Node.js
                  </li>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    MongoDB
                  </li>
                </ul>
                <ul>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    React.js
                  </li>
                  <li>
                    <FaPlay className={styles.playIcon} />
                    Express
                  </li>
                </ul>
              </span>
            </div>
            <div class={styles.aboutPic}>
              <div class={styles.selfImg}>
                <img src=".\images\niraj.jpeg.jpg" alt="" />
              </div>
            </div>
          </div>
          <a name="exp"></a>
          {/* <!-- Work Experience Section --> */}
          <div class={styles.workExp}>
            <h1>
              Places I have worked
              <div class={styles.strLine}></div>
            </h1>
            <div class={styles.workExpTab}>
              <div class={styles.horizLine}></div>
              <div class={styles.horizLine1}></div>
              <ul>
                <li>
                  <input type="radio" id="upstatement" name="work" checked />
                  <label for="upstatement">Upstatement</label>
                  <div class={styles.upstatement}>
                    <h3>Engineer @ Upstatement</h3>
                    <h4>May 2018 - Present</h4>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </p>

                    <p>
                      <FaPlay className={styles.playIcon} />
                      Work with a variety of different languages, platforms,
                      frameworks, and content management systems such as
                      JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                      Prismic and Netlify
                    </p>

                    <p>
                      <FaPlay className={styles.playIcon} />
                      Communicate with multi-disciplinary teams of engineers,
                      designers, producers, and clients on a daily basis
                    </p>
                  </div>
                </li>
                <li>
                  <input type="radio" id="scout" name="work" />
                  <label for="scout">Scout</label>
                  <div class={styles.scout}>
                    <h3>Studio Developer @ Scout</h3>
                    <h4>January - April 2018</h4>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      &nbspWorked with a team of three designers to build a
                      marketing website and e-commerce platform for blistabloc,
                      an ambitious startup originating from Northeastern
                    </p>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      &nbspHelped solidify a brand direction for blistabloc that
                      spans both packaging and web
                    </p>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      &nbspInterfaced with clients on a weekly basis, providing
                      technological expertise
                    </p>
                  </div>
                </li>
                <li>
                  <input type="radio" id="apple" name="work" />
                  <label for="apple">Apple</label>
                  <div class={styles.apple}>
                    <h3>UI Engineer Co-op @ Apple</h3>
                    <h4>July - December 2017</h4>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      Developed and shipped highly interactive web applications
                      for Apple Music using Ember.js
                    </p>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      Built and shipped the Apple Music Extension within
                      Facebook Messenger leveraging third-party and internal
                      APIs
                    </p>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      Architected and implemented the front-end of Apple Music's
                      embeddable web player widget, which lets users log in and
                      listen to full songs in the browser
                    </p>
                    <p>
                      <FaPlay className={styles.playIcon} />
                      Contributed extensively to MusicKit.js, a JavaScript
                      framework that allows developers to add an Apple Music
                      player to their web apps
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Work Experience Section --> */}
          <a name="work"></a>
          {/* <!-- Featured Project Section --> */}
          <div class={styles.featuredProj}>
            <h1>
              Things I have built
              <div class={styles.strLine}></div>
            </h1>
            <div class={styles.proj}>
              <div class={styles.projImgBox}>
                <img src=".\images\halycon.png" alt="Image here" />
              </div>
              <div class={styles.projDescBox}>
                <h4>Featured Projects</h4>
                <h2>Halycon Theme</h2>
                <p>
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  <br />
                  iTerm, and more. Available on Visual Studio Marketplace,
                  <br />
                  Package Control, Atom Package Manager and npm.
                </p>
                <div class={styles.stack}>
                  <ul>
                    <li>VScode</li>
                    <li>Sublime</li>
                    <li>Atom</li>
                    <li>iterm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Archived Project Section --> */}
          <a name="featured"></a>
          <div class={styles.projects}>
            <h1>My other noteworthy projects</h1>
            <h5>view the archive</h5>
            <div class={styles.flex}>
              <div class={styles.boxContainer1}>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                  <LuFolder style={{fontSize: "44px"}}/>
                  <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                    <LuFolder style={{fontSize: "44px"}}/>
                    <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                    <LuFolder style={{fontSize: "44px"}}/>
                    <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
              </div>
              <div class={styles.boxContainer2}>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                    <LuFolder style={{fontSize: "44px"}}/>
                    <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                    <LuFolder style={{fontSize: "44px"}}/>
                    <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
                <div class={styles.box}>
                  <div class={styles.projTop}>
                    <LuFolder style={{fontSize: "44px"}}/>
                    <FaArrowUpRightFromSquare style={{fontSize: "18px"}}/>
                  </div>
                  <div class={styles.projBottom}>
                    <h2>Integrating wordpress</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, nulla?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="">Show more</a>
          </div>
          {/* <!-- Archived Project Section --> */}
          <a name="contact"></a>
          {/* <!-- Get in touch Section --> */}
          <div class={styles.contact}>
            <div class={styles.closingText}>
              <h1>Get in touch</h1>
              <p>
                Although I'm not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
              </p>
              <a href="">Say Hello</a>
            </div>
          </div>

          {/* <!-- Footer Section --> */}
          <div class={styles.footer}>
            <h4>Designed & Built by Niranjan Bavaskar</h4>
            <div class={styles.icons}>
              <div className={styles.starIcon}>
            <FaRegStar /> 5,604
            </div>
            <div className={styles.codeBranchIcon}>
            <FaCodeBranch /> 2,334
            </div>
            </div>
            </div>
          

          {/* <!-- Rightbar Section --> */}
        </div>
        <div class={styles.rightBar}>
          <h4>niranjanbavaskar301@gmail.com</h4>
          <div class={styles.lineV}></div>
        </div>
      </div>
    </div>
  );
};
