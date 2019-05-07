import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div id="contact" style={{ backgroundColor: '#362929' }}>
            <div className="container">
              <div className="col-md-8">
                <div className="row">
                  <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                  </div>
                  <form name="sentMessage" id="contactForm" novalidate>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="name" className="form-control" placeholder="Name" required="required" ref="name" />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" id="email" className="form-control" placeholder="Email" required="required" ref="email" />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="phone" id="phone" className="form-control" placeholder="Phone" ref="phone" />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" ref="message" required></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-custom btn-lg"
                    onClick={() => console.log('Thanks for you submission..')}
                    bsStyle={(!this.props.style)?("primary"):(this.props.style)}>
                    {(!this.props.msg)?("Send Message"):(this.props.msg)}
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <h4>Contact Info</h4>
                  <p><span>Address</span>Carey Street<br />
                    Monrovia, Liberia</p>
                </div>
                <div className="contact-item">
                  <p><span>Phone</span> +231-775-800-179  <br />+231-881-627-122</p>
                </div>
                <div className="contact-item">
                  <p><span>Email</span>ramadancontractorservicesinc@gmail.com</p>
                  <p><span></span>ramadanbarry30@gmail.com</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      <li><a href="https://www.facebook.com/ramadancontractorservicesinccom-363016717521869/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div> 
        )
    }
}

export default Form
