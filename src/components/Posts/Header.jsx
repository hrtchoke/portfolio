import React from 'react';

export default function Header() {
    
      return (
  
        <nav className="navbar navbar-expand-lg shadow-sm navbar-dark">
          <div className="container">
            <a style={{color: 'rgb(255, 255, 255)'}} className="navbar-brand title-icon " href="#">Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ms-auto mb-2">
                <li className="nav-item">
                  <a style={{color: '#a8a8ab', position:'relative', top:'5px'}} className="nav-link font-black" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a style={{color: '#a8a8ab', position:'relative', top:'5px'}} className="nav-link font-black" href="#project">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    
  };


