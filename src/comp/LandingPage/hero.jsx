import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic4.jpg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Zaynab Awofeso</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:zayawofeso@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1x5KoIwlurZDiVCxNmf9qSyczBwUOOg0w/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ebunoluwazaynab" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/zaynab-awofeso" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          
          <p>
            I am Zaynab Awofeso, a final-year Computer Science student at the University of Lagos, Nigeria,
            and an independent researcher at <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer"> ML Collective</a>, 
            an open science community for self-driven AI researchers. 
            I was also recently a Research Intern at the <a href="https://is.mpg.de/" target="_blank" rel="noopener noreferrer"> Max Planck Institute for Intelligent Systems</a>, supervised by <a href="http://orvi.altervista.org/" target="_blank" rel="noopener noreferrer"> Dr. Antonio Orvieto</a> and <a href="https://jonasgeiping.github.io/" target="_blank" rel="noopener noreferrer"> Dr. Jonas Geiping</a>.
          </p>

          <p>
            My research interests center on efficient model design and understanding how learning systems 
            generalize under limited computational resources. I am driven by the view that reducing resource 
            demands enables more accessible and equitable deployment of advanced machine learning.
          </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;