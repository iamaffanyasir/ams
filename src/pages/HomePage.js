import React from 'react';
import '../styles/HomePage.css';

// Import local images from your assets folder
import educationImage from '../assets/images/education.jpg';
import nutritionImage from '../assets/images/nutrition.jpg';
import happierLifeImage from '../assets/images/happier-life.jpg';

// Import hero section images
import heroMainImage from '../assets/images/hero-main.jpg';
import heroSecondaryImage from '../assets/images/hero-secondary.jpg';

// Import how we work section image
import howWeWorkImage from '../assets/images/how-we-work.jpg';

// Import donation grid images
import donation1 from '../assets/images/donations/donation1.jpg';
import donation2 from '../assets/images/donations/donation2.jpg';
import donation3 from '../assets/images/donations/donation3.jpg';
import donation4 from '../assets/images/donations/donation4.jpg';
import donation5 from '../assets/images/donations/donation5.jpg';
import donation6 from '../assets/images/donations/donation6.jpg';
import donation7 from '../assets/images/donations/donation7.jpg';
import donation8 from '../assets/images/donations/donation8.jpg';

// Import blog post images
import blog1 from '../assets/images/blog/blog1.jpg';
import blog2 from '../assets/images/blog/blog2.jpg';
import blog3 from '../assets/images/blog/blog3.jpg';
import blog4 from '../assets/images/blog/blog4.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Empowering Communities, Changing Lives</h1>
            <a href="/donate" className="donate-now-btn">Donate Now <span className="arrow">→</span></a>
          </div>
          <div className="hero-images">
            <div className="main-image" style={{backgroundImage: `url(${heroMainImage})`}}></div>
            <div className="secondary-image" style={{backgroundImage: `url(${heroSecondaryImage})`}}></div>
          </div>
        </div>
        <div className="hero-description">
          <p>
            Transforming Lives Through Compassionate Action: Our Services for a Better World
          </p>
        </div>
      </section>

      <section className="donation-cards-section">
        <div className="donation-cards-container">
          <div className="donation-card">
            <div className="image-container">
              <img 
                src={educationImage} 
                alt="Child education" 
                className="donation-image" 
              />
            </div>
            <div className="donation-content">
              <h3>Help children get better education</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              
              <div className="fund-info">
                <div className="fund-text">Fund Raised</div>
                <div className="fund-amount">
                  <span className="raised">USD 10,000</span>
                  <span className="goal">(USD 20,000)</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="donation-card">
            <div className="image-container">
              <img 
                src={nutritionImage} 
                alt="Child nutrition" 
                className="donation-image" 
              />
            </div>
            <div className="donation-content">
              <h3>Help children get better nutrition</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              
              <div className="fund-info">
                <div className="fund-text">Fund Raised</div>
                <div className="fund-amount">
                  <span className="raised">USD 10,000</span>
                  <span className="goal">(USD 20,000)</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="donation-card">
            <div className="image-container">
              <img 
                src={happierLifeImage} 
                alt="Happier life" 
                className="donation-image" 
              />
            </div>
            <div className="donation-content">
              <h3>Help children get better and happier life</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              
              <div className="fund-info">
                <div className="fund-text">Fund Raised</div>
                <div className="fund-amount">
                  <span className="raised">USD 10,000</span>
                  <span className="goal">(USD 20,000)</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">240K</div>
            <div className="stat-label">
              <div>Charity Funding</div>
              <div>Sent</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$9.9M</div>
            <div className="stat-label">
              <div>Total Money</div>
              <div>Donated</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$9.9M</div>
            <div className="stat-label">
              <div>Total Money</div>
              <div>Donated</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-header">
            <span className="section-indicator"></span>
            <h3>About Us</h3>
          </div>
          <h2 className="mission-statement">
            Our mission is to enhance the lives of individuals and communities in need.
          </h2>
        </div>
      </section>
      
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="services-label">Services</span>
            <h2 className="services-title">What are we doing empowering life?</h2>
          </div>
          
          <div className="services-description">
            <p className="services-text">
              Transforming Lives Through Compassionate Action: Our Services for a Better World. Our mission is to enhance the lives of individuals and communities in need.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon housing-icon"></div>
              <h3>Houseing & Shelter</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
            
            <div className="service-card">
              <div className="service-icon care-icon"></div>
              <h3>Care & Support</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
            
            <div className="service-card">
              <div className="service-icon education-icon"></div>
              <h3>Education</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
            
            <div className="service-card">
              <div className="service-icon environment-icon"></div>
              <h3>Environmental Help</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
            
            <div className="service-card">
              <div className="service-icon food-icon"></div>
              <h3>Food Relief Funding</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
            
            <div className="service-card">
              <div className="service-icon health-icon"></div>
              <h3>Health Care</h3>
              <p>You have interesting ideas and opportunities, feel free to contact.</p>
              <a href="/donate" className="service-donate-btn">Donate Now <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="campaign-section">
        <div className="campaign-overlay">
          <div className="campaign-container">
            <div className="campaign-content">
              <span className="campaign-label">Latest Campaign</span>
              <h2 className="campaign-title">Home for Cianjur Earthquake Victim</h2>
              <a href="/donate" className="campaign-donate-btn">Donate Now</a>
            </div>
            <div className="campaign-video">
              <div className="video-play-button">
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-works-section">
        <div className="how-works-container">
          <div className="how-works-image">
            <img src={howWeWorkImage} alt="Children in classroom" />
          </div>
          <div className="how-works-content">
            <span className="how-works-label">How We Works</span>
            <h2 className="how-works-title">How We Work to Improve Lives</h2>
            
            <div className="how-works-steps">
              <div className="step">
                <span className="step-number">01.</span>
                <div className="step-content">
                  <h3 className="step-title">Choose a program to support</h3>
                  <p className="step-description">Lorem ipsum dolor sit amet consectetur. Risus vulputate tortor mauris pellentesque tortor.</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">02.</span>
                <div className="step-content">
                  <h3 className="step-title">Make a secure online donation</h3>
                  <p className="step-description">Lorem ipsum dolor sit amet consectetur. Risus vulputate tortor mauris pellentesque tortor.</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">03.</span>
                <div className="step-content">
                  <h3 className="step-title">Receive a donation receipt</h3>
                  <p className="step-description">Lorem ipsum dolor sit amet consectetur. Risus vulputate tortor mauris pellentesque tortor.</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">04.</span>
                <div className="step-content">
                  <h3 className="step-title">Track the impact</h3>
                  <p className="step-description">Lorem ipsum dolor sit amet consectetur. Risus vulputate tortor mauris pellentesque tortor.</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">05.</span>
                <div className="step-content">
                  <h3 className="step-title">Join our community of donors</h3>
                  <p className="step-description">Lorem ipsum dolor sit amet consectetur. Risus vulputate tortor mauris pellentesque tortor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-movement-section">
        <div className="join-movement-container">
          <div className="join-movement-header">
            <div className="header-content">
              <span className="movement-label">Campaign</span>
              <h2 className="movement-title">Join the Movement to Create a Better World</h2>
            </div>
            <div className="header-description">
              <p>
                Transforming Lives Through Compassionate Action: Our Services for a Better World. Our mission is to enhance the lives of individuals and communities in need.
              </p>
              <a href="/campaign" className="view-more-link">View More Campaign <span className="arrow">→</span></a>
            </div>
          </div>
          
          <div className="donation-grid">
            <div className="donation-grid-row">
              <div className="donation-item">
                <img src={donation1} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation2} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation3} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation4} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
            </div>
            
            <div className="donation-grid-row">
              <div className="donation-item">
                <img src={donation5} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation6} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation7} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
              
              <div className="donation-item">
                <img src={donation8} alt="Happy child" className="donation-photo" />
                <div className="donation-item-content">
                  <h3>Help Them Happy</h3>
                  <p>You have interesting ideas and opportunities, feel free to contact.</p>
                  <div className="fund-progress">
                    <div className="fund-raised">
                      <span>$10,000</span>
                      <span className="target">/$13,500</span>
                    </div>
                    <div className="progress-percentage">74%</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '74%'}}></div>
                  </div>
                  <a href="/donate" className="donate-now-link">Donate Now <span className="arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3>Subscribe Our Newsletter</h3>
            <h2>Join Us Empowering Communities and Changing Lives</h2>
          </div>
          
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-title-area">
              <span className="blog-label">Campaign</span>
              <h2 className="blog-title">Newest Info About Our Community</h2>
            </div>
            <div className="blog-description">
              <p>
                Transforming Lives Through Compassionate Action: Our Services for a Better World. Our mission is to enhance the lives of individuals and communities in need.
              </p>
              <a href="/blog" className="view-more-link">View More <span className="arrow">→</span></a>
            </div>
          </div>
          
          <div className="blog-posts-grid">
            <div className="blog-post">
              <div className="blog-post-image">
                <img src={blog1} alt="Destroyed buildings" />
              </div>
              <div className="blog-post-date">June 1, 2023</div>
              <h3 className="blog-post-title">Help Them Happy</h3>
              <p className="blog-post-excerpt">You have interesting ideas and opportunities, feel free to contact.</p>
            </div>
            
            <div className="blog-post">
              <div className="blog-post-image">
                <img src={blog2} alt="Food distribution" />
              </div>
              <div className="blog-post-date">June 1, 2023</div>
              <h3 className="blog-post-title">Help Them Happy</h3>
              <p className="blog-post-excerpt">You have interesting ideas and opportunities, feel free to contact.</p>
            </div>
            
            <div className="blog-post">
              <div className="blog-post-image">
                <img src={blog3} alt="Children praying" />
              </div>
              <div className="blog-post-date">June 1, 2023</div>
              <h3 className="blog-post-title">Help Them Happy</h3>
              <p className="blog-post-excerpt">You have interesting ideas and opportunities, feel free to contact.</p>
            </div>
            
            <div className="blog-post">
              <div className="blog-post-image">
                <img src={blog4} alt="Buildings destroyed" />
              </div>
              <div className="blog-post-date">June 1, 2023</div>
              <h3 className="blog-post-title">Help Them Happy</h3>
              <p className="blog-post-excerpt">You have interesting ideas and opportunities, feel free to contact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
