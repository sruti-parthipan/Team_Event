import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params=useParams();
  console.log(params)
  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top' id='main-nav'>
        <div className='container'>
          <a href="#" className="navbar-brand">template4u</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-col">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='nav-col'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='#home' className='nav-link'>Home</a>
              </li>
              <li className='nav-item'>
                <a href='#explore' className='nav-link'>Explore</a>
              </li>
              <li className='nav-item'>
                <a href='#create' className='nav-link'>Create</a>
              </li>
              <li className='nav-item'>
                <a href='#share' className='nav-link'>Share</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id='home1'>
        <div className='da-overlay'>
          <div className='home-content'>
            <h1>Eventzz with us</h1>
            <p>Plan, manage, and execute unforgettable events with ease. Join us in creating moments that matter. At Eventzz, we are passionate about helping you create memorable events that leave a lasting impression. Whether you're planning a corporate conference, a wedding, or a community gathering, our platform provides everything you need to streamline the process and ensure success.</p>
            <a href='#explore' className='btn btn-outline-light btn-lg'>Discover More</a>
          </div>
        </div>
      </div>

      <div id='explore' className='explore-content bg-dark text-white'>
        <div className='container'>
          <h2>Explore</h2>
          <p>Find inspiration, venues, and services to make your event exceptional.</p>
          <a href='#create' className='btn btn-outline-info btn-lg'>Get Started</a>
        </div>
      </div>

      <div id='create' className='create-content bg-primary'>
        <div className='container'>
          <h2>Create</h2>
          <p>Turn your vision into reality with our powerful event planning tools.</p>
          <a href='#share' className='btn btn-outline-light btn-lg'>Share Your Story</a>
        </div>
      </div>

      <div id='share' className='share-content bg-light'>
        <div className='container'>
          <h2>Share</h2>
          <p>Connect with your audience and celebrate your successful events.</p>
          <a href='#contact' className='btn btn-outline-primary btn-lg'>Contact Us</a>
        </div>
      </div>

      <div className='bg-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center text-light py-3'>
              <h3>Template4u</h3>
              <p>&copy; 2024 All rights reserved.</p>
              <button className='btn btn-primary' data-toggle='modal' data-target='#contact'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div id='contact' className='modal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Contact Us</h4>
              <button className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
