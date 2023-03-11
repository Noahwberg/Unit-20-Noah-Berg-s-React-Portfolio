import React from "react";

const style = {
    color: "Blue"
}
const activeStyle = {
  textDecoration: "underline"
      , color: "red"
}
function Navigation({ currentPage, changePage }) {
  return (

    <ul className="navList">

      <li className="nav-item">
        <a href="#home" style={currentPage === 'HomePage'? activeStyle : style} onClick={() => changePage('HomePage')} className={'nav-link'}>Home</a>
      </li>

      <li className="nav-item">
        <a href="#about" style={currentPage === 'About'? activeStyle : style} onClick={() => changePage('About')} className={'nav-link'}>About</a>
      </li>

      <li className="nav-item">
        <a href="#Portfolio" style={currentPage === 'Portfolio'? activeStyle : style} onClick={() => changePage('Portfolio')} className={'nav-link'}>Portfolio</a>
      </li>

      <li className="nav-item">
        <a href="#Contact" style={currentPage === 'Contact'? activeStyle : style} onClick={() => changePage('Contact')} className={'nav-link'}>Contact</a>
      </li>

    </ul>
  )
}
export default Navigation;