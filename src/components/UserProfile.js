import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:/Users/PC/hmat/node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logo.png';
import profileImage from './assets/profileImage.png'
import { GoBell } from "react-icons/go";


const UserProfile = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} alt="Logo" style={{ width: "120px", height: "auto", }} />
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#login">Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                    </ul>
                    <div>
                        <GoBell style={{ width: "40px", height: "40px", }} />
                    </div>
                    <div>
                        <img src={profileImage} alt="Logo" style={{ width: "50px", height: "50px", }} />
                        {/* <p>Welcome Back!</p>
                           <p>User Name</p> */}
                    </div>
                </div>
            </nav>

            {/* Sidebar & Main Content */}
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <nav className="col-md-2 d-none d-md-block bg-primary text-white sidebar p-3">
                        <h5>Demo</h5>
                        <p>demo@gmail.com</p>
                        <hr />
                        <ul className="nav flex-column">
                            <li className="nav-item"><a className="nav-link text-white" href="/">Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/">Free Members</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/">Premium Members</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/">Deleted Members</a></li>
                        </ul>
                    </nav>

                    {/* Main Content */}
                    <main className="col-md-10 p-4">
                        <h4>World's No 1 MatchMaking Service</h4>
                        <div className="card  p-4 mb-3">
                            <h5>Find your Right Match</h5>
                            <form>
                                <div className="row gx-3">
                                    <div className="form-group col-md-2">
                                        <label>I'm looking for</label>
                                        <select className="form-control">
                                            <option>Woman</option>
                                            <option>Man</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-1">
                                        <label>Aged</label>
                                        <input type="number" className="form-control" placeholder="23" />
                                        <input type="number" className="form-control" placeholder="28" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>Religion</label>
                                        <select className="form-control">
                                            <option>Select</option>
                                            <option>Hindu</option>
                                            <option>Christian</option>
                                            <option>Islam</option>

                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>Mother Tongue</label>
                                        <select className="form-control">
                                            <option>Select</option>
                                            <option>Telugu</option>
                                            <option>Hindi</option>
                                            <option>Kannada</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <button className="btn btn-primary form-control" type="submit">Search</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                        {/* Biodata Section */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card text-center p-3">
                                    <h5>Create Your Biodata</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card text-center p-3">
                                    <h5>How to Create Biodata</h5>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;