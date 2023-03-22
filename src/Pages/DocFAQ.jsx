import CompNavbar from "../Components/CompNavbar";
import CompFooter from "../Components/CompFooter";
import faqcard1 from "../../src/Resources/images/faqcard1.svg";
import faqcard2 from "../../src/Resources/images/faqcard2.svg";
import faqcard3 from "../../src/Resources/images/faqcard3.svg";
import faqcard4 from "../../src/Resources/images/faqcard4.svg";
import faqcard5 from "../../src/Resources/images/faqcard5.svg";
import faqcard6 from "../../src/Resources/images/faqcard6.svg";
import headerbg from "../../src/Resources/images/headerbg.png";
import styled from "styled-components";

const Faqgeneral = styled.div`
  background-color: #fff;
  .faqheader {
    background-image: url(${headerbg});
    background-position: center;
    background-size: cover;
    height: 40vh;
    width: 100%;
    margin-bottom: 80px;
    color: aliceblue;
    text-align: center;
  }

  .faqheader h4 {
    font-size: 12px;
    padding-top: 35px;
    font-weight: 400;
    margin-bottom: 0;
    color: #99aaab;
  }

  .faqheader h1 {
    margin-top: 0;
    padding-top: 0;
    font-size: 34px;
    font-weight: 800;
    margin-bottom: 0;
    padding-bottom: 10px;
  }

  .faqheader p {
    margin-top: 0;
    font-size: 14px;
    color: #99aaab;
    font-weight: 400;
  }

  .faqform {
    background-color: #efefef;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    justify-content: center;
    padding: 8px 15px;
    border-radius: 5px;
  }

  .faqform i {
    color: #1b1c31;
    margin-right: 10px;
    font-size: 14px;
  }

  .faqform input {
    outline: none;
    border: none;
    background-color: #efefef;
  }

  .faqgrid {
    margin-bottom: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .faqcard1 {
    padding: 20px 25px;
  }

  .faqcard1 h4 {
    padding-top: 10px;
    margin-top: 0;
    font-family: "Manrope";
    font-size: 14px;
    margin-bottom: 0;
    padding-bottom: 10px;
  }

  .faqcard1 p {
    margin-top: 0;
    font-family: "Manrope";
    font-size: 13px;
    color: #53686a;
    line-height: 20px;
  }

  .faqsec3 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: #98ff87;
    border-radius: 7px;
    padding: 10px 25px;
  }

  .faqs3 h3 {
    font-size: 13px;
    font-weight: bold;
    padding-top: 10px;
  }

  .faqs3 p {
    margin-top: 0;
    padding-top: 8px;
    font-size: 13px;
    font-weight: 500;
  }

  .faq3b {
    text-align: end;
  }

  .faq3b button {
    padding: 10px 25px;
    border: none;
    background-color: #1b1c31;
    color: aliceblue;
    border-radius: 5px;
    font-weight: bold;
    justify-content: center;
  }

  .faqgen2 {
    margin: 70px 90px;
  }
`;

const DocFAQ = () => {
  return (
    <Faqgeneral>
      <CompNavbar />
      <div className="faqheader">
        <h4>FAQs</h4>
        <h1>Ask us anything</h1>
        <p>Have any questions? We're here to assist you.</p>

        <form action="" className="faqform">
          <i class="fa-solid fa-search"> </i>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search here"
            size={25}
          />
        </form>
      </div>

      <div className="faqgen2">
        <div className="faqgrid">
          <div className="faqcard1">
            <img src={faqcard1} alt="" />
            <h4>How do I change my account email?</h4>
            <p>
              You can log in to your account and change it from <br />
              your Profile {`>`} Edit Profile. Then go to the general
              <br />
              tab to change your email.
            </p>
          </div>

          <div className="faqcard1">
            <img src={faqcard2} alt="" />
            <h4>What should I do if my payment fails?</h4>
            <p>
              If your payment fails, you can use the (COD)
              <br />
              payment option, if available on that order. If your <br />
              payment is debited from your account after a<br />
              payment failure, it will be credited back within
              <br /> 7-10 days.
            </p>
          </div>

          <div className="faqcard1">
            <img src={faqcard3} alt="" />
            <h4>What is your cancellation policy?</h4>
            <p>
              You can now cancel an order when it is in packed <br />
              -shipped status. Any amount paid will be credited
              <br />
              into the same payment mode using which the
              <br />
              payment was made
            </p>
          </div>

          <div className="faqcard1">
            <img src={faqcard4} alt="" />
            <h4>How do I check order delivery status ?</h4>
            <p>
              Please tap on “My Orders” section under main
              <br /> menu of App/Website/M-site to check your order
              <br /> status.
            </p>
          </div>

          <div className="faqcard1">
            <img src={faqcard5} alt="" />
            <h4>What is Instant Refunds?</h4>
            <p>
              Upon successful pickup of the return product at <br />
              your doorstep, Myntra will instantly initiate the
              <br />
              refund to your source account or chosen method
              <br />
              of refund. Instant Refunds is not available in a few
              <br /> select pin codes and for all self ship returns.
            </p>
          </div>

          <div className="faqcard1">
            <img src={faqcard6} alt="" />
            <h4>How do I apply a coupon on my order?</h4>
            <p>
              You can apply a coupon on cart page before order
              <br />
              placement. The complete list of your unused and
              <br />
              valid coupons will be available under “My
              <br />
              Coupons” tab of App/Website/M-site.
            </p>
          </div>
        </div>

        <div className="faqsec3">
          <div className="faqs3 faq3a">
            <h3>Still have any questions?</h3>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="faqs3 faq3b">
            <button>Get in touch</button>
          </div>
        </div>
      </div>

      <CompFooter />
    </Faqgeneral>
  );
};

export default DocFAQ;
