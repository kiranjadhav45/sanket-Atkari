import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbarimageadd">
      <div className="navbarandabout ">
        <div className="navbar mt-2">
          <div className="navsanket mx-2 py-2" onClick={() => navigate("/")}>
            Sanket.
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/about">
              about
            </Link>
          </div>
          <div className="navname py-2">
            {" "}
            <Link className="navlinks" to="/project">
              projects
            </Link>
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/connect">
              connect
            </Link>
          </div>
          <div className="navname py-2 mx-3">more</div>
          <div className="navbtn mx-3 py-2">
            <a href="https://twitter.com/AtkariSanket" target="_blank">
              <img
                width={16}
                src="https://i.ibb.co/n0rrk1Y/twitter.png"
                alt="twitter"
                border="0"
              />
            </a>
            <a href="https://www.instagram.com/sanket_atkari/" target="_blank">
              <img
                width={16}
                src="https://i.ibb.co/Sf834ZK/insta.png"
                alt="insta"
                border="0"
              />
            </a>
            <hr className="verticalline" />
            <a>
              <img
                onClick={() => {
                  setShowNav(!showNav);
                }}
                width={16}
                src="https://i.ibb.co/8PZ7pLw/hamburger.png"
                alt="hamburger"
                border="0"
              />
            </a>
          </div>
        </div>
      </div>
      {showNav && (
        <div className="nav-list-container">
          <div className="nav-list">
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4 mt-4"
            >
              <Link className="navlinks" to="/about">
                about
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4"
            >
              <Link className="navlinks" to="/project">
                projects
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4"
            >
              <Link className="navlinks" to="/connect">
                connect
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4 mb-4"
            >
              more
            </div>
          </div>
        </div>
      )}
      {!type && (
        <div>
          <div className="profilephotocontainer">
            <div className="profilephoto">
              <div className="profileimage ">
                <img
                  width={96}
                  src="https://i.ibb.co/yPCHxpq/Ellipse-1-1.png"
                  alt="Ellipse-1-1"
                  border="0"
                />
              </div>
              <div className="profileimage d-flex flex-column gap-2">
                <span className="navbarname">Hello, Namaste </span>
                <span className="imsanket">I’m Sanket Atkari</span>
                <span className="navuiuxdesign">Design. UX UI </span>
              </div>
            </div>
          </div>
          <div className="socialLink mt-4">
            <div className="socialmedia">SOCIAL MEDIA</div>
            <div className="socialmediaicons">
              <a
                href="https://www.linkedin.com/in/sanket-atkari-014a25251/"
                target="_blank"
              >
                <img
                  width={33}
                  src="https://i.ibb.co/0Mqfbnr/iconoir-linkedin.png"
                  alt="iconoir-linkedin"
                  border="0"
                />
              </a>
              <a
                href="https://www.instagram.com/sanket_atkari/"
                target="_blank"
              >
                <img
                  width={33}
                  src="https://i.ibb.co/T1Vvvkh/Icon-1.png"
                  alt="Icon-1"
                  border="0"
                />
              </a>
              <a href="https://wa.me/9561356532?text=Hello" target="_blank">
                <img
                  width={33}
                  src="https://i.ibb.co/5rTtHfg/whatsapp.png"
                  alt="whatsapp"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
