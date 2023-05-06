import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <img
        className="headergradient img-fluid"
        src="../../../public/header-gradient.svg"
        alt=""
      />
      <div className="navbarandabout ">
        <div className="navbar mt-2">
          <div className="navname navsanket  py-2">Sanket.</div>
          <div className="navname py-2">about</div>
          <div className="navname py-2">projects</div>
          <div className="navname py-2">connect</div>
          <div className="navname py-2">more</div>
          {/* <div className="navname py-2">icon</div> */}
        </div>
      </div>
      <div className="profilephotocontainer">
        <div className="profilephoto d-flex ">
          <div className="profileimage ">
            <img
              width={96}
              src="https://i.ibb.co/yPCHxpq/Ellipse-1-1.png"
              alt="Ellipse-1-1"
              border="0"
            />
          </div>
          <div className="profileimage d-flex flex-column gap-2">
            <span className="navbarname">Hello, Namaste, </span>
            <span className="imsanket">I’m Sanket Atkari</span>
            <span className="navuiuxdesign">Design. UX UI </span>
          </div>
        </div>
      </div>
      <div className="socialLink mt-4">
        <div className="socialmedia">SOCIAL MEDIA</div>
        <div className="socialmediaicons">
          <a href="">
            <img
              width={33}
              src="https://i.ibb.co/0Mqfbnr/iconoir-linkedin.png"
              alt="iconoir-linkedin"
              border="0"
            />
          </a>
          <a href="">
            <img
              width={33}
              src="https://i.ibb.co/T1Vvvkh/Icon-1.png"
              alt="Icon-1"
              border="0"
            />
          </a>
          <a href="">
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
  );
};

export default Navbar;
