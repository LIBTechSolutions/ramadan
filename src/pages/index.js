import React from "react"

import Layout from "../components/layout"
import Form from "../components/Form";

const IndexPage = () => (
  <Layout>
    <div>
           <header id="header">
              <div className="intro">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                        <h1></h1>
                        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>"Building Together"</p>
                        <a href="#about" style={{ backgroundColor: '#362929' }} className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div id="get-touch" style={{ backgroundColor: '#362929' }}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-1">
                  <h3>Free estimate for your renovation projects</h3>
                  <p>Get started today and complete our form to request your free estimate</p>
                </div>
                <div className="col-xs-12 col-md-4 text-center"><a href="#contact" className="btn btn-custom btn-lg page-scroll">Free Estimate</a></div>
              </div>
            </div>
          </div>

          <div id="about">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-6"> <img src="/images/about_me.jpg" className="img-responsive" alt="" /></div>
                  <div className="col-xs-12 col-md-6">
                    <div className="about-text">
                      <h2>Who We Are</h2>
                      <p>Ramadan Contractor Services Incorporated (RCSI), is a Liberian owned construction company that provide the following services, General engineering and  construction related activities, Logistics and Transport,
                         Procurement of goods, services and works, these includes real estate management, construction of apartments, administrative buildings,
                         hospitals, industrial complexes, roads, bridges air and sea port facilities and dam construction for the generation of power supply. 
                      </p>
                      <p>RCSI has built a reputation for delivering innovative solutions, our growing status for excellence, resourcefulness and responsiveness is no accident.
                         It is a natural consequence of the values that have guided our corporation since its inception. These include the enthusiasm for the work we do, 
                         sensitivity to the needs of our clients, willingness to accept total responsibility for our work, and the assurance we give to our clients, that the 
                         services we provide are durable, had kept us in the race.
                      </p>
                      <h3>OUR PHILOSOPHY CORE VALUES</h3>
                      <div className="list-style">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            <li>MANAGEMENT SUPPORT</li>
                            <li>CONSULTANCY</li>
                            <li>ENGINEERING AND GENERAL CONSTRUCTION</li>
                            <li>QUALITY CONTROL SYSTEM AND SAFETY PLAN</li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            <li>Leadership</li>
                            <li>Innovation</li>
                            <li>Integrity</li>
                            <li>Honesty</li>                           
                            <li>Strong Work Ethics</li>
                            <li>Timeliness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="services">
              <div className="container">
                <div className="section-title">
                  <h2>Our Services</h2>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcselectricpic1.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Electrical Services</h3>
                      <p>We offer commercial electrical services that includes back-up generators and commercial wiring. We also offer residential electrical services like household wiring and landscape lighting.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcsrenopic1.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Renovation</h3>
                      <p>We renovate buildings and facilities through out the country.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/bridge.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Bridges & Road Construction</h3>
                      <p>Our well experienced and qualified engineers are ever prepared to take on your road and bridge construction projects. </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcshouseplan2.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>House Plan Design </h3>
                      <p>We do professional house plan designs. </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcsdemolish.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Maintenance & Demolition</h3>
                      <p>Demolish your old building today and build a new one with just the best and affordable prices ever. We also offer maintenance services.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcspaint1.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Painting & Decoration</h3>
                      <p>Contact us today for the most proffessional painters and interior decorators for quality service.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/service8.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Carpentry & Woodworks </h3>
                      <p>Experienced Woodworks delivery form the best furniture makers in town.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img src="/images/services/service-9.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Plumbing Services</h3>
                      <p>Contact us for emergency services and have your plumbing and related problems solved.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-media"> <img style={{ height: '275px' }} src="/images/services/rcstile.jpg" alt=" " /> </div>
                    <div className="service-desc">
                      <h3>Tiling services</h3>
                      <p>Tile your buildings, bathrooms, yards and even street at reasonable rates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="portfolio">
              <div className="container">
                <div className="section-title">
                  <h2>Our Works</h2>
                </div>
                <div className="row">
                  <div className="portfolio-items">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/big_1.jpg" title="Exterior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Glasses & Tiles</h4>
                          </div>
                          <img src="/images/portfolio/small_1.jpg" className="img-responsive" alt="Exterior Design" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/big_2.jpg" title="Exterior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Malls & Supermarkets</h4>
                          </div>
                          <img src="/images/portfolio/small_2.jpg" className="img-responsive" alt="Exterior Design" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/big_3.jpg" title="Exterior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Offices & Apartments</h4>
                          </div>
                          <img src="/images/portfolio/small_3.jpg" className="img-responsive" alt="Demolition" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/big_4.jpg" title="Demolition" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Demolition</h4>
                          </div>
                          <img src="/images/portfolio/small_4.jpg" className="img-responsive" alt="Demolition" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/big_5.jpg" title="Construction" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Construction</h4>
                          </div>
                          <img src="/images/portfolio/small_5.jpg" className="img-responsive" alt="Construction" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/large_.jpg" title="Interior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Painting & Electricity</h4>
                          </div>
                          <img src="/images/portfolio/smallone_.jpg" className="img-responsive" alt="Interior Design" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/newbig_7.jpg" title="Interior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Painting & Design</h4>
                          </div>
                          <img src="/images/portfolio/newbig_7.jpg" className="img-responsive" alt="Interior Design" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/newbig_8.jpg" title="Interior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Wiring</h4>
                          </div>
                          <img src="/images/portfolio/newbig_8.jpg" className="img-responsive" alt="Interior Design" /> </a> </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg"> <a href="/images/portfolio/newbig_9.jpg" title="Interior Design" data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>Painting & Wiring</h4>
                          </div>
                          <img src="/images/portfolio/newbig_9.jpg" className="img-responsive" alt="Interior Design" /> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Form />       

        </div>
  </Layout>
)

export default IndexPage
