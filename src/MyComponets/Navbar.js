import React from 'react'


function Navbar(props) {

  
    return (
        <>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active home" aria-current="page" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  href="/">{props.about}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore More
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">UpperCase</a></li>
                    <li><a className="dropdown-item" href="/">LowerCase</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Rohit Ambawata</a></li>
                  </ul>
                </li>
              </ul>
              <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{marginTop:"8px"}} onClick={props.toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontWeight:900,fontSize:"18px"}}>{props.mode} Mode</label>
</div>
             
            </div>
          </div>
        </nav>
            </>
    )
  }
Navbar.defaultProps = {
  title:"Your Name Here",
  about:"About Section",
  home:"Home Section",
  placeholder:"Search..."
}

  export default Navbar