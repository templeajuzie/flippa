import styled from "styled-components";
import flag1 from "../../src/Resources/images/1flag-us.svg";
import flag2 from "../../src/Resources/images/2flag-fr.svg";
import flag3 from "../../src/Resources/images/3flag-za.svg";
import flag4 from "../../src/Resources/images/4flag-lr.svg";
import flag5 from "../../src/Resources/images/5flag-gh.svg";
import flag6 from "../../src/Resources/images/6flag-td.svg";
import flag7 from "../../src/Resources/images/7flag-gb.svg";

const CompPlatforms = () => {
  const Container = styled.div`
    #container2 {
      margin-right: auto;
      margin-bottom: 35px;
      text-align: center;

      p {
        text-align: center;
        word-spacing: 1px;
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 450;
        color: #3f3c3c;
      }

      #partner {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap: 20px;

        p {
          margin-top: auto;
          margin-bottom: auto;
        }

        .div6 {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 30px;
        }
      }

      img {
        width: 60px;
        height: auto;
        border-radius: 5px;
        -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
      }
    }

    @media (max-width: 1100px) {
      #container2 {
        margin-right: auto;
        margin-bottom: 35px;
        text-align: center;

        p {
          text-align: center;
          word-spacing: 1px;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 450;
          padding: 0 20px;
          color: #3f3c3c;
        }

        #partner {
          margin-top: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          align-items: center;
          justify-content: center;
          gap: 5px;

          p {
            margin-top: auto;
            margin-bottom: auto;
          }
        }

        img {
          height: 70px;
          width: auto;
          border-radius: 10px;
          -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
          -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
          box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        }
      }
    }

    @media (max-width: 600px) {
      #container2 {
        margin-right: auto;
        text-align: center;

        p {
          text-align: center;
          word-spacing: 1px;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 450;
          padding: 0 20px;
          color: #3f3c3c;
        }

        #partner {
          margin-top: 10px;
          display: grid;
          grid-template-columns: auto auto auto;
          align-items: center;
          justify-content: center;
          gap: 10px;

          p {
            margin-top: auto;
            margin-bottom: auto;
          }
        }

        img {
          width: 40px;
          height: auto;
          border-radius: 10px;
          -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
          -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
          box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        }
      }
    }
  `;

  return (
    <Container>
      <div id="container2">
        <p>
          Join over 300+ Customers and businesses accross the globe, growing
          with Quickbaya
        </p>

        <div id="partner">
          <div className="1">
            <img src={flag1} alt="" />
          </div>
          <div className="2">
            <img src={flag2} alt="" />
          </div>
          <div className="3">
            <img src={flag3} alt="" />
          </div>
          <div className="4">
            <img src={flag4} alt="" />
          </div>
          <div className="5">
            <img src={flag5} alt="" />
          </div>
          <div className="div6">
            <img src={flag6} alt="" />
          </div>

          <div className="div6">
            <img src={flag7} alt="" />
          </div>

          <p>{`& more`}</p>
        </div>
      </div>
    </Container>
  );
};

export default CompPlatforms;
