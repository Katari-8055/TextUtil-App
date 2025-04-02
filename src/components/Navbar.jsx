import React from 'react';

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sg  p-4 mb-4 " style={{background: props.mode === 'light'?'black': 'white', color: props.mode === 'light'?'white': 'black'}}>
      <div className=" d-flex justify-content-center align-items-center" >
          <a className="navbar-brand " style={{ fontSize: '25px', fontWeight: 'bold' , color: props.mode === 'light'?'white': 'black'}} href="#">TextUtils</a>
          <a className="navbar-brand" style={{color: props.mode === 'light'?'white': 'black'}} aria-current="page" href="#">Home</a>
          <a className="navbar-brand" style={{color: props.mode === 'light'?'white': 'black'}} href="#">About</a>
      </div>
      <div class="form-check form-switch">
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Dark & Ligth</label>
      </div>
    </nav>
  );
};