import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TextUtils2</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/about"}>About</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch" >
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
