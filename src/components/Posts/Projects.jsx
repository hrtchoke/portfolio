import React from 'react';
import twitterClone from '../../assets/img/twitterClone.png'
import lemonade from '../../assets/img/lemonade.png'
import hive from '../../assets/img/hive.png'
import dropship from '../../assets/img/dropship.png'
export default function Projects() {
    
      return (
  
        <div id="project">
          <h2 style={{color: '#a8a8ab'}}>Projects</h2>
          
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
                      Email: test@test.com<br />
                      Pass: TEST!!
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="https://hive-frontend.hive-techwear.repl.co/" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/HIVE-Techwear/HIVE-Frontend" target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
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
                      Email: test@test.com<br />
                      Pass: TEST!!
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="https://lemonade-frontend.hrtchoke.repl.co/" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/lemonade-frontend" target="_blank"  rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
            
          </div>
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
                      Email: Coming Soon<br />
                      Pass: Coming Soon
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="https://twitterclone.hrtchoke.repl.co/" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/twitterClone" target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            {/* row, for a row devided by 12 */}
            <div className="row">
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-4">
                <img src={dropship} className="card-img-top" />
              </div>
              {/* col-md-4, use 4/12 width, but wrap in case ofless width than medium breakpoints */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Dropshipping Store</strong></h5>
                  <p className="card-text">
                    <strong>Project Description:</strong> Industry-Level Dropshipping project.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Test Login Account<br />
                      Email: test@test.com<br />
                      Pass: TEST!!
                    </small>
                  </p>
                  {/* btn, button */}
                  {/* btn-secondary, gray color button */}
                  {/* btn-dark, dark color button */}
                  <a href="https://dropship-frontend.hrtchoke.repl.co/" target="_blank" className="btn btn-secondary">Website</a>&nbsp;&nbsp;
                  <a href="https://github.com/hrtchoke/dropship-frontend" target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          
          
          
        </div>
        
        
      );
    }
  ;

