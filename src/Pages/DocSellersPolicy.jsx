import styled from 'styled-components';
import CompNavbar from "../Components/CompNavbar";
import CompFooter from "../Components/CompFooter";
import headerbg from "../../src/Resources/images/headerbg.png";

const Termsgeneral = styled.div`
  background-color: #fff;
  .termsec1 {
    background-image: url(${headerbg});
    background-position: center;
    background-size: cover;
    height: 40vh;
    width: 100%;
    color: aliceblue;
    padding-top: 60px;
    padding-left: 85px;
    margin-bottom: 70px;
  }

  .termsec1 h4 {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 0;
  }

  .termsec1 p {
    margin-top: 0;
    font-size: 14px;
  }

  .termsec2 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 65px;
  }

  .termsec2 p {
    font-size: 15px;
    padding: 30px;
    margin: 0 35px;
    background-color: #efefef;
    width: fit-content;
  }

  .termsec2 h5 {
    font-family: 16px;
    color: black;
    margin-top: 25px;
  }
`;

const DocSellersPolicy = () => {
  return (
    <Termsgeneral>
      <CompNavbar />
      <div className="termsec1">
        <h4>Seller Policy</h4>
        <p>Updated: 22 January 2022</p>
      </div>

      <div className="termsec2">
        <p id="terminitials">
          {" "}
          Thank you for trading on Kshop.com.ng's web based transaction
          platforms. This Service Agreement describes the terms and conditions
          on which you conclude online transactions for products and services by
          using the websites, mobile sites, mobile applications and other online
          transaction portals owned, operated, branded or made available by
          Kshop. <br /> <br />
          <h5>Eligibility: </h5>
          Use of Kshop Website is available only to persons who can form legally
          binding contracts under Nigerian governing laws. If you are a minor
          i.e. under the age of 18 years, you shall not register as a member of
          Kshop.com.ng and shall not transact or use Kshop platforms. <br />{" "}
          <br />
          As a minor if you wish to use or transact on Kshop.com.ng, such use or
          transaction may be made by your legal guardian or parents who have
          registered as users of Kshop. Kshop Group reserves the right to
          terminate your membership and refuse to provide you with access to
          Kshop.com.ng <br /> <br />
          <h5>Shipping: </h5>
          If Kshop (“we”) has your product(s) in stock, we will email you a
          shipping notice confirming that the items have shipped and are
          en-route to you or, in the case of delivered orders, a special
          delivery notice confirming the scheduled delivery date; that shipping
          notice or special delivery notice, as applicable, is our acceptance of
          your order. <br /> <br />
          In-stock orders (excluding scheduled delivery items) normally ship
          within 24 hours of placing <br />
          your order. Out-of-stock orders will ship once the item is back in
          stock.
          <br />
          <h5>Pre-orders: </h5>
          Release dates for products can sometimes change without notice or
          liability. If you’ve pre- ordered a product, we’ll ship it as soon as
          possible after its final release date, which may be different from the
          initial date advertised. <br /> <br />
          <h5>Payments:</h5>
          You must make payments due under these general terms and conditions in
          accordance with the Payments Information and Guidelines on the
          marketplace. <br /> <br />
          <h5>Returns and refunds:</h5>
          Returns of products by buyers and acceptance of returned products by
          sellers shall be managed by us in accordance with the returns page on
          the marketplace, as may be amended from time to time. Acceptance of
          returns shall be in our discretion, subject to compliance with
          applicable laws of the territory <br /> <br />
          We reserve the right to disable / ban a Vendor if the companies right
          has been violated. To the extent permitted by law, we reserve the
          right at any time to reject, correct, cancel or terminate any order
          for any reason whatsoever. If the price of any product you order was
          incorrectly displayed on our Web Site, we will provide you with an
          opportunity to place an order at the correct price. <br /> <br />
          Advertisements on our Web Site are invitations to you to make offers
          to purchase products and services on the Web Site and are not offers
          to sell. Your properly completed and delivered order form constitutes
          your offer to purchase the products or services referenced in your
          order. <br />
          <br />
          Your order will be deemed to be accepted only if and when we send a
          shipping notice email or special delivery notice email for scheduled
          delivery items, to your email address or via call. That shipping
          notice email or special delivery notice email constitutes our
          acceptance of your order and forms a legally binding contract with
          Kshop Nigeria Ltd.
          <br />
          <br />
          The total price of your order will be charged to your credit card when
          our shipping notice email or special delivery notice email has been
          sent to your email address. If you wish to cancel an order, you may
          request a cancellation by logging into your account and cancelling
          your order or by calling +234 903 552 5951. <br />
          <br />
          However, we may not receive and process your cancellation request
          before we accept your order, in which case your cancellation request
          may not be effective. If for any reason you are not completely
          satisfied with a product you have purchased, you may return it
          according to our Returns and Exchanges policy. <br />
          <br />
          We rely on the information you provide through the Web Site, including
          registration information (name and email address), payment information
          (credit card numbers and expiration dates), and transaction-related
          information, which must be true, accurate, current and complete. You
          will be solely responsible and liable for any and all loss, damage,
          and additional costs that you, we or any other person may incur as a
          result of your submission of any false, incorrect or incomplete
          information or your failure to update your registration information
          and payment information within 30 days of any change.
          <h5>Start Shopping today!</h5>
        </p>
      </div>

      <CompFooter />
    </Termsgeneral>
  );
};

export default DocSellersPolicy;