import "./Project.css";

const Project = ({ type }) => {
  return (
    <div className="projectcontainer">
      <div className="projects">
        {!type && <div className="ptitle">PROJECTS</div>}

        {/* project One */}

        <div>
          {type && <div className="seondproject">PROJECTS</div>}
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
                <a
                  href="https://drive.google.com/file/d/1PqNKLakm__tiP8j-CmTLzYoUrJ6dvSJh/view?usp=sharing"
                  target="_blank"
                >
                  View case study
                </a>
                <img
                  className="mx-2 img-fluid"
                  src="https://i.ibb.co/Wz64jgX/Vector.png"
                  alt="Vector"
                  border="0"
                />
              </div>
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
            <div className="projecttile">AstroYaro</div>
            <div className="projectdeccription">
              Astrology app which help user to connect with the astrologer and
              daily horoscope
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
            <div className="projecttile">Think like Dhoni</div>
            <div className="projectdeccription">
              how do competitive analysis like dhoni observe designs and many
              more.....
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
        <div className="btnviewmore">
          <button>
            <a href="https://www.behance.net/sanketatkari" target="_blank">
              VIEW MORE
            </a>
            <img
              width={7.4}
              height={12}
              src="https://i.ibb.co/XZ9W4xP/Vector.png"
              alt="Vector"
              border="0"
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
