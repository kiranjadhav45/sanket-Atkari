import "./Project.css";

const Project = () => {
  return (
    <div className="projectcontainer">
      <div className="projects">
        <div className="ptitle">PROJECTS</div>
        {/* project One */}
        <div className="spotfinder">
          <div className="projectImage">
            <img
              width={342}
              className="img-fluid"
              src="https://i.ibb.co/88TQpMG/headimage.png"
              alt="headimage"
              border="0"
            />
          </div>
          <div className="projectdce">
            <div className="projecttile">SpotFinder</div>
            <div className="projectdeccription">
              Spotfinder App is a platform that help user to find there new
              business location spot in offline market
            </div>

            <div className="projectcasestudy">
              <a href="">View case study</a>
              <img
                className="mx-2 img-fluid"
                width={13}
                src="https://i.ibb.co/Wz64jgX/Vector.png"
                alt="Vector"
                border="0"
              />
            </div>
          </div>
        </div>
        {/* project second */}
        <div className="spotfinder">
          <div className="projectImage">
            <img
              width={342}
              className="img-fluid"
              src="https://i.ibb.co/kQDGq0z/Group-1971.png"
              alt="Group-1971"
              border="0"
            />
          </div>
          <div className="projectdce">
            <div className="projecttile">SpotFinder</div>
            <div className="projectdeccription">
              Spotfinder App is a platform that help user to find there new
              business location spot in offline market
            </div>

            <div className="projectcasestudy">
              <a href="">View case study</a>
              <img
                className="mx-2 img-fluid"
                width={13}
                src="https://i.ibb.co/Wz64jgX/Vector.png"
                alt="Vector"
                border="0"
              />
            </div>
          </div>
        </div>
        {/* project third */}
        <div className="spotfinder">
          <div className="projectImage">
            <img
              width={342}
              className="img-fluid"
              src="https://i.ibb.co/GdRtWwx/Frame-2039.png"
              alt="Frame-2039"
              border="0"
            />
          </div>
          <div className="projectdce">
            <div className="projecttile">SpotFinder</div>
            <div className="projectdeccription">
              Spotfinder App is a platform that help user to find there new
              business location spot in offline market
            </div>

            <div className="projectcasestudy">
              <a href="">View case study</a>
              <img
                className="mx-2 img-fluid"
                width={13}
                src="https://i.ibb.co/Wz64jgX/Vector.png"
                alt="Vector"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
