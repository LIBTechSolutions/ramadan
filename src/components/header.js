import React from 'react'

const Header = () => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div class="container"> 
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <a style={{ color: '#362929' }} className="navbar-brand page-scroll" href="#page-top">RCS <span style={{ fontSize: '20px' }}>Inc.</span></a> 
              <div style={{ fontWeight: 'bold', fontSize: '20px' }} className="phone"><span style={{ color: '#362929' }}>Call Us Today</span>+231-775-800-179</div>
            </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about" className="page-scroll">About</a></li>
                <li><a href="#services" className="page-scroll">Services</a></li>
                <li><a href="#portfolio" className="page-scroll">Projects</a></li>
                <li><a href="#contact" className="page-scroll">Contact</a></li>
              </ul>
            </div>
          </div>
      </nav>
    )
} 

export default Header
