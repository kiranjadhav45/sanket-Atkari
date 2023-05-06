import "./Quotes.css";

const Quotes = () => {
  return (
    <div className="quotescontainer">
      <div className="quotes">
        <div className="myprojectstitle mb-5">MY favorite quotes </div>
        <div className="firstrow">
          <div className="firstcol">
            <div>
              <img
                width={286}
                className="img-fluid"
                src="https://i.ibb.co/rtwHFdP/image-first.png"
                alt="image-first"
                border="0"
              />
            </div>
            <div>
              <img
                width={335}
                className="img-fluid"
                src="https://i.ibb.co/RY4cVFN/YELLOW-IMG-PC.png"
                alt="YELLOW-IMG-PC"
                border="0"
              />
            </div>
          </div>
          <div className="secondcol">
            <div>
              <img
                width={453}
                className="img-fluid"
                src="https://i.ibb.co/HNR3NF1/1-4u-JQ9-Pa-FSRcw-C8-YWTvfr-Q-1.png"
                alt="1-4u-JQ9-Pa-FSRcw-C8-YWTvfr-Q-1"
                border="0"
              />
            </div>
            <div>
              <img
                width={453}
                className="img-fluid"
                src="https://i.ibb.co/Jdm5VjT/1-1z-R2x-Wg-J6-QQgi-H37g-ALAFw-1.png"
                alt="1-1z-R2x-Wg-J6-QQgi-H37g-ALAFw-1"
                border="0"
              />
            </div>
            <div>
              <img
                width={368}
                className="img-fluid"
                src="https://i.ibb.co/JQk1r9s/Frame-2038.png"
                alt="Frame-2038"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
