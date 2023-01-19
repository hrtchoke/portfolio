import React from 'react';
import styles from './App.module.css'

export default function About() {
    
      return (
  
        <div id="about" className={styles.background}>
          <h2 id="boldd" style={{color: "rgb(97, 28, 28)"}}><span className="font-primary">A</span>bout</h2>
          <br />
          <img style={{marginTop: '6px'}} src="img/IMG_0476.JPG" />
          <div className="name">Benjamin Williams</div>
          <div className="vocation">Full Stack Developer</div>
          <div className="skills">HTML / CSS / JavaScript / React.js / Redux <br></br>Python / Django / Express.js</div>
          <p style={{color: '#a8a8ab'}}>An innovative Software Engineer specializing in Full Stack Development.</p>
          <div className="email">benxtwillxo@gmail.com</div>
          <div className="icons">
            <a href="https://github.com/hrtchoke/" style={{color: 'rgb(97, 28, 28)'}}><i className="bi bi-github" /></a>
            <a href="https://www.linkedin.com/in/benjamin-williams--/" style={{color: 'rgb(97, 28, 28)'}}><i className="bi bi-linkedin ms-3" /></a>
          </div>
        </div>
      );
    
  };

 