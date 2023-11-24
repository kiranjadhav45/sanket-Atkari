import "./Contact.css";

const Contact = ({ type }) => {
  return (
    <div className="containerr ">
      {!type && (
        <div className="connectme mb-4">
          <button>CONNECT ME</button>
          <span>Drop mail at</span>
          <div className="">
            <img
              width={24}
              src="https://i.ibb.co/GxkhByp/basil-gmail-outline.png"
              alt="basil-gmail-outline"
              border="0"
            />
            <a
              className="mx-1 connectemail"
              href="mailto:sanketdesktop@gmail.com"
            >
              sanketdesktop@gmail.com
            </a>
          </div>
          <div className="iconss mt-4">
            <a href=" https://www.instagram.com/sanket_atkari/" target="_blank">
              <img
                width={25}
                src="https://i.ibb.co/KWkhMBs/Vector-1.png"
                alt="Vector-1"
                border="0"
              />
            </a>
            <a href="https://twitter.com/AtkariSanket" target="_blank">
              <img
                width={25}
                src="https://i.ibb.co/sF5hZNg/Group.png"
                alt="Group"
                border="0"
              />
            </a>

            <a href=" https://www.behance.net/sanketatkari" target="_blank">
              <img
                width={25}
                src="https://i.ibb.co/vX3TmNR/Group-1.png"
                alt="Group-1"
                border="0"
              />
            </a>
            <a
              href="#"
            >
              <img
                width={25}
                src="https://i.ibb.co/vhFtvwD/Group-2.png"
                alt="Group-2"
                border="0"
              />
            </a>
          </div>
        </div>
      )}
      <div className="footer my-5">
        <div className="stevejobs">
          <img
            width={18}
            height={24}
            src="https://i.ibb.co/4wysfjj/image.png"
            alt="image"
            border="0"
          />
          <span className="mx-1"> Stay Hungry Stay Foolish</span>
          <img
            width={18}
            height={24}
            src="https://i.ibb.co/4wysfjj/image.png"
            alt="image"
            border="0"
          />
        </div>
        <div className="footerlove">
          Made with by <span>❤</span> sanket
        </div>
        <div className="uikit">This Ui kit</div>
      </div>
    </div>
  );
};

export default Contact;
