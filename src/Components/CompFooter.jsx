import { Link } from 'react-router-dom';
import styled from 'styled-components';
import facebook from '../../src/Resources/images/facebook.svg';
import linkdin from '../../src/Resources/images/linkdin.svg';
import twitter from '../../src/Resources/images/twitter.svg';
import ig from '../../src/Resources/images/ig.svg';
const footerimg = new URL(
  "../../src/Resources/images/footerimg.png",
  import.meta.url
);

const Footer = () => {

    const Footer = styled.div`
      .footergen {
        background: #00111b;

        padding: 40px 35px;
      }

      .groupfooter1 {
        display: flex;
        justify-content: space-between;
      }

      .groupfooter1 a {
        text-decoration: none;
        font-size: 33px;
        font-weight: bold;
        color: white;
        margin-bottom: 35px;
      }

      .groupfooter1 a span {
        color: #32cd32;
      }

      .groupfooter1 p {
        color: aliceblue;
        font-size: 13px;
        margin-bottom: 35px;
        font-weight: 200;
      }

      .groupfooter1 h5 {
        color: aliceblue;
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 400;
      }

      .groupfooter1 img {
        height: 40px;
        width: auto;
      }

      .groupfooter2 {
        display: flex;
        margin-top: 0;
      }

      .groupfooter2 p {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 0;
      }

      .groupfooter2 ul {
        margin-top: 15px;
      }

      .groupfooter2 ul li {
        list-style: none;
        padding-bottom: 5px;
      }

      .groupfooter2 ul li a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 300;
      }

      .groupfooter2 ul li a:hover {
        color: #32cd32;
      }

      .sec2footer,
      .sec3footer,
      .sec4footer {
        padding: 0 25px;
      }

      .groupfooter3 {
        margin-top: 40px;
      }

      .groupfooter3 ul {
        display: flex;
        justify-content: end;
      }

      .groupfooter3 ul li {
        list-style: none;
        text-align: end;
      }

      .groupfooter3 img {
        margin: 0 10px;
        width: 30px;
      }

      .groupfooter4 {
        background-color: #00111b;
        color: aliceblue;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid gray;
        padding: 20px 35px;
        padding-bottom: 20px;

        p {
          font-size: 12px;
        }

        i {
          margin-right: 2px;
        }
      }
    `;

    return (
      <Footer>
        <div className="footergen">
          <div className="groupfooter1">
            <div className="sec1footer">
              <Link to="/documentation">
                {" "}
                Flip<span>pa </span>{" "}
              </Link>

              <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
                <br />
                thoughts all exercise blessing. Indulgence way everything joy{" "}
                <br />
                alteration boisterous the attachment.
              </p>

              <h5>Download Our Mobile App</h5>
              <img src={footerimg} alt="" />
            </div>

            <div className="groupfooter2">
              <div className="sec2footer">
                <p>Company</p>
                <ul>
                  <li>
                    {" "}
                    <Link to="/about">About Us </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/help">Help Center </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/pricing"> Pricing </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to="/faq"> FAQ</Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to="/affiliatepolicy">
                      {" "}
                      Affiliate Policy
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/sellerspolicy">
                      Sellers Policy{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/privacy">
                      {" "}
                      Privacy Policy
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/terms">
                      Terms{` & `}Conditions{" "}
                    </Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="sec2footer">
                <p>Support</p>
                <ul>
                  <li>
                    {" "}
                    <Link to="/report"> Report an account </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/hacked"> Account Hacked? </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/communityrules">Community Rules </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/complains"> Complains </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/tutorials">Tutorials </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/subscribe"> Subscribe </Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="sec3footer">
                <p>Features</p>
                <ul>
                  <li>
                    {" "}
                    <Link to="/integration"> Integrations </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/marketting">Marketting</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/livechat"> Live Chat </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/socials"> Socials </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/store">Store Front </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">Products </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/interraction">Interactions </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/feed"> Feed </Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="sec4footer">
                <p>Resources</p>
                <ul>
                  <li>
                    {" "}
                    <Link to="/">Documentations </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/suggest"> Suggest a feature </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/developer">Developer </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/team"> Join our team </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/careers">Careers </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="groupfooter3">
            <ul>
              <li>
                <a href="">
                  {" "}
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={linkdin} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={twitter} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={ig} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="groupfooter4">
          <p>
            <i class="fa-solid fa-copyright"></i>2023 Quickbaya. All rights
            reserved. -- Privacy Policy - Terms of Services
          </p>
          <p>Quickbaya Inc.</p>
        </div>
      </Footer>
    );
}

export default Footer;