import React from 'react';
import twitterClone from '../../assets/img/twitterClone.png'
import lemonade from '../../assets/img/lemonade.png'
import hive from '../../assets/img/hive.png'
export default function Projects() {
    
      return (
  
        <div id="project">
          <h2 style={{color: '#a8a8ab'}}><span className="font-primary">P</span>rojects</h2>
          <br />
          <div className="card mb-3">
            {/* row, for a row devided by 12 */}
            <div className="row">
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-4">
                <img src={twitterClone} className="card-img-top" />
              </div>
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Twitter Clone</strong></h5>
                  <p className="card-text">
                    <strong>Project Description:</strong> Twitter based project.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Test Login Account<br />
                      Email: COMING SOON<br />
                      Pass: COMING SOON
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="#" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/" target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            {/* row, for a row devided by 12 */}
            <div className="row">
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-4">
                <img src={lemonade} className="card-img-bottom" />
              </div>
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Lemonade Shop</strong></h5>
                  <p className="card-text">
                    <strong>Project Description:</strong> Lemonade E-Commerce.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Test Login Account<br />
                      Email: COMING SOON<br />
                      Pass: COMING SOON
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="#" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/" target="_blank"  rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="card mb-3">
            {/* row, for a row devided by 12 */}
            <div className="row">
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-4">
                <img src={hive} className="card-img-top" />
              </div>
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>HIVE Tech Wear</strong></h5>
                  <p className="card-text">
                    <strong>Project Description:</strong> Industry Level E-commerce
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Test Login Account<br />
                      Email: COMING SOON<br />
                      Pass: COMING SOON
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="#" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/" target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  ;

