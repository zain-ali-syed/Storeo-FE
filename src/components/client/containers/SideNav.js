import React from 'react';

const SideNav = () => {
  return (
    <div>
           <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
              <div className="background">
                <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg"></img>
              </div>
              <a href="#user"><img className="circle" src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg"></img></a>
              <a href="#name"><span className="white-text name">John Doe</span></a>
              <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>
    </div>
  );
};

export default SideNav;

