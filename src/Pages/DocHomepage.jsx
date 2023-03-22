import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import CompNewsletter from '../Components/CompNewsletter';
import CompNavbar from '../Components/CompNavbar';
import CompFooter from '../Components/CompFooter';
import CompPlatforms from '../Components/CompPlatforms';
import sec1bg from '../../src/Resources/images/sec1bg3.png';
import { Fade } from 'react-reveal';
const sec1pic = new URL(
  '../../src/Resources/images/image1.png',
  import.meta.url
);
const sec3pic = new URL(
  '../../src/Resources/images/sec3pic.png',
  import.meta.url
);
const sec5pic = new URL(
  '../../src/Resources/images/sec5pic.png',
  import.meta.url
);
const sec6pic = new URL(
  '../../src/Resources/images/sec6pic.png',
  import.meta.url
);
const sec7pic = new URL(
  '../../src/Resources/images/sec7pic.png',
  import.meta.url
);

const DocHomepage = () => {
  const Homecontainer = styled.div`
    background-color: #fff;
    .container1 {
      background-image: url(${sec1bg});
      background-size: cover;
      background-position: center;
      height: 90vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .sec1 {
        margin-top: 20px;
        margin-left: 35px;

        .minsec {
          width: 500px;
          h4 {
            margin-top: 20px;
            font-size: 40px;
            font-weight: bold;
            color: #00111b;

            span {
            }
          }

          p {
            margin-top: 30px;
            font-size: 15px;
            color: #64607d;
          }
        }
      }

      .sec2 img {
        margin-top: 0px;
        /* margin-right: 20px; */
        height: 800px;
        width: auto;
      }

      #sell {
        margin-top: 30px;
        background: #32cd32;
        padding: 16px 30px;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        color: aliceblue;
        cursor: pointer;
      }

      .fa-play {
        color: white;
        background: red;
        border-radius: 100%;
        margin-left: 25px;
        padding: 16px 19px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
      }

      .inner {
        display: flex;
        align-items: center;
        align-content: center;
      }

      #playlink {
        margin-left: 5px;
        font-family: 'Manrope';
        font-size: 14px;
        font-weight: 800;
        color: rgb(5, 5, 50);
        cursor: pointer;
      }
    }

    .container3,
    .container5,
    .container7 {
      background-image: url('./images/secbg2.png');
      background-size: cover;
      background-position: center;
      height: 80vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #container2 {
      margin-right: auto;
      margin-bottom: 55px;
      text-align: center;
    }

    .container3 {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 70px;

      img {
        height: 350px;
        width: 470px;
        margin-left: 45px;
      }
    }

    .card3 {
      margin-top: 80px;
      margin-bottom: 50px;
    }

    .card3 h1,
    h4,
    p,
    button {
      margin-top: 20px;
    }

    .card3 h4 {
      margin-top: 0;
    }

    .card3 h4 i {
      font-size: 13px;
      color: #32cd32;
      margin-left: 10px;
    }

    .card3b {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 24px;
      }
    }

    .card3 p {
      font-size: 15px;
      color: #64607d;
    }

    .card3 button {
      margin-top: 30px;
      background: #32cd32;
      width: fit-content;
      padding: 16px 30px;
      border-radius: 7px;
      border: none;
      font-weight: bold;
      color: aliceblue;

      i {
        margin-left: 10px;
      }
    }

    .container4 {
      color: aliceblue;
      background-color: #1b1c31;
      margin: 0px 35px;
      border-radius: 10px;
      margin-bottom: 70px;
      padding-bottom: 60px;
    }

    #cont4header {
      padding-top: 55px;
      font-weight: bold;
      font-size: 40px;
      color: aliceblue;
      text-align: center;
    }

    #cont4para {
      padding-bottom: 45px;
      color: aliceblue;
      text-align: center;
    }

    .card_container {
      color: aliceblue;
      background-color: #1b1c31;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin: 10px 35px;
    }

    .card4 h4 {
      color: black;
      text-align: center;
    }

    .card4 {
      padding: 35px 40px;
      background-color: #efefef;
      color: black;
      border-radius: 10px;
      font-size: 14px;
      color: #64607d;
    }

    .card4 i {
      padding: 21px 20px;
      border-radius: 50%;
      background-color: #98ff87;
      margin-right: 10px;
      font-size: 20px;
    }

    .container5 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 110px;
    }

    .container5 img {
      margin-top: 55px;
      height: 500px;
      width: 640px;
    }

    .card5 {
      margin-top: 10px;
    }

    .card5 h4 {
      font-size: 25px;
      padding-bottom: 10px;
    }

    .card5a {
      margin-left: 40px;
    }

    .card5 p {
      font-size: 15px;
      padding: 10px;
      height: fit-content;
      background-color: #00111b;
      border-radius: 50%;
      width: fit-content;
      color: #32cd32;
      text-align: start;
    }

    #card5start i {
      color: aliceblue;
      margin-left: 10px;
    }

    #card5start {
      background-color: #32cd32;
      padding: 13px 30px;
      border-radius: 5px;
      font-size: 15px;
      width: fit-content;
      color: aliceblue;
      text-align: start;
    }

    .card5a ol {
      padding: 15px 10;
      margin-bottom: 50px;
    }

    .it1,
    .it2,
    .it3 {
      display: flex;
      margin-top: 20px;
    }

    .card5a ol li {
      padding: 15px 0;
      margin-left: 35px;
      align-items: justify;
      font-size: 14px;
      list-style: none;
    }

    .card5 button {
      margin-top: 20px;
      background: #32cd32;
      padding: 13px 25px;
      border-radius: 7px;
      border: none;
      font-weight: bold;
      color: aliceblue;
    }

    .container6 {
      padding: 0 25px;
      background-color: #00111b;
      margin-top: 30px;
    }

    .container6 {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    .card6 {
      padding: 20px 0;
    }

    .container6 img {
      height: 500px;
      width: 670px;
    }

    .card6 h1 {
      color: aliceblue;
    }

    .card6 h3,
    h5 {
      color: aliceblue;
    }

    .card6 h3 {
      margin-top: 90px;
    }

    .card6 h1 {
      font-size: 40px;
    }

    .card6 p {
      margin-top: 30px;
      font-size: 17px;
      color: aliceblue;
    }

    .card6 button {
      margin-top: 20px;
      background: #32cd32;
      padding: 16px 30px;
      border-radius: 7px;
      border: none;
      font-weight: bold;
      color: aliceblue;
    }

    .card6 button i {
      margin-left: 10px;
    }

    .container7 {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    .container7 img {
      height: 238;
      width: 490px;
      margin-left: 45px;
    }

    .card7 {
      margin-top: 100px;
    }

    .card7 h1,
    h4,
    p,
    button {
      margin-top: 30px;
    }

    .card7 h4 {
      margin-top: 0;
      font-size: 18px;
      color: rgb(60, 26, 26);
    }

    .card7 h4 i {
      font-size: 15px;
      color: #32cd32;
      margin-left: 10px;
    }

    .card7b {
      margin-left: 35px;
    }

    .card7b p i {
      color: white;
      background: red;
      border-radius: 100%;
      padding: 16px 19px;
      font-size: 20px;
      margin: 0;
      text-align: center;
    }

    .card7b p span {
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
    }

    .container8 {
      text-align: center;
      margin-bottom: 85px;
    }

    .container8 h3 {
      font-size: 27px;
      text-align: center;
      margin-bottom: 0;
    }

    .card8 {
      text-align: start;
      justify-content: center;
      padding-left: 50px;
      padding-top: 30px;
      padding-bottom: 75px;
    }

    .card8 img {
      height: 250px;
      width: 450px;
    }

    .card8b {
      padding-left: 20px;
      padding-right: 20px;
    }

    .card8b h4 {
      font-size: 16px;
    }

    .card8b h4 i {
      font-size: 18px;
      color: #32cd32;
    }

    .card8b p {
      color: #64607d;
      font-size: 14px;
    }

    .card8b p i {
      color: #ffaa00;
      font-size: 14px;
    }

    .card8b span {
      color: #32cd32;
      margin-left: 10px;
      font-size: 11px;
    }

    /* testing swipper*/
  `;

  const navigate = useNavigate();

  return (
    <Homecontainer>
      <CompNavbar id="nav" />

      <div className="container1">
        <div className="sec1">
          <div className="minsec card">
            <h4 style={{ color: 'black' }}>
              {' '}
              <Typewriter
                style={{ zindex: 0 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `Everything you need, to buy or sell any product.`
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(
                      `Now you can go live on all platforms with one click.`
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(`Easy checkout with no hassle of anykind.`)
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(
                      `You can now recommend products to friends via chat.`
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString(`Feel free to watch our introduction video.`)
                    .pauseFor(1000)
                    .start();
                }}
                sty
              />
              <span style={{ color: '#117570' }}>in 5 minutes</span>
            </h4>

            <p>
              End-to-end e-commerce, marketting, and payment management in a
              single solution. Meet the right platform to help you buy or sale.
            </p>

            <div className="inner">
              <button
                id="sell"
                onClick={() => {
                  navigate('/create');
                }}
              >
                {' '}
                Create a free account{' '}
              </button>{' '}
              <p>
                {' '}
                <i class="fa-solid fa-play"> </i>{' '}
              </p>{' '}
              <p id="playlink"> Watch now </p>
            </div>
          </div>
        </div>

        <Fade right>
          <div className="sec2 card">
            <img src={sec1pic} alt="" />
          </div>
        </Fade>
      </div>

      <div id="container2">
        <CompPlatforms />
      </div>
      <Fade>
        <div className="container3">
          <div className="card3">
            <img src={sec3pic} alt="" />
          </div>
          <div className="card3 card3b">
            <h4>
              Go Digital <i class="fa-solid fa-arrow-trend-up"></i>{' '}
            </h4>
            <h1>
              {' '}
              Receive payments into your digital <br />
              wallet from your customers.
            </h1>
            <p>
              help your customers experience a seamless, painless shopping.
              <br /> get started once and start selling to people near you.{' '}
            </p>
            <button>
              Read the Guide <i class="fa-solid fa-angle-right"></i>{' '}
            </button>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="container4">
          <h3 id="cont4header">Amazing Features</h3>
          <p id="cont4para">
            Explore amazing features that can help you engage, delight and
            attact customers
          </p>

          <div className="card_container">
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-video"></i> LIVE VIDEO SHOPPING{' '}
              </h4>
              <p>
                Social shopping, instant product curation, and live video.
                Customer interaction like never before.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-rectangle-ad" fa-2X></i> TARGETED
                PROMOTIONS
              </h4>
              <p>
                Premium personalized lookbooks and microsites that can go viral.
                Launch retail campaigns with impact.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-shop"></i> VIRTUAL RETAIL STORES
              </h4>
              <p>
                Immersive shopping experience, virtual walkthroughs, and
                interactive hotspots. Your competitive edge.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-cubes"></i> AR PRODUCT DISPLAYS
              </h4>
              <p>
                AR-powered 360° views and virtual try-on. Greater product
                engagement and reduced product returns.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-map-location"></i> CUSTOMERS NEAR YOU{' '}
              </h4>
              <p>
                A one-stop experience in every way. Seamless e-commerce
                experience from discovery to checkout.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-eye"></i> INSIGHTS TO SELL MORE
              </h4>
              <p>
                Get Shopify integration and customer insights. Make confident
                business decisions. Grow sales exponentially.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-people-arrows-left-right"></i> AFFILIATE
                SYSTEM
              </h4>
              <p>
                Set up your own affiliate marketing system, and give a
                commission for anyone that facilitates a sale for your store.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-comments-dollar"></i> CHAT SYSTEM
              </h4>
              <p>
                End-to-end payments and financial management in a single
                solution. Meet the right platform.
              </p>
            </div>
            <div className="card4">
              <h4>
                {' '}
                <i class="fa-solid fa-share-from-square"></i> SOCIAL SELL
              </h4>
              <p>
                End-to-end payments and financial management in a single
                solution. Meet the right platform.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="container5">
          <div className="card5 card5a">
            <h4>Launch A Store In 3 Steps</h4>

            <ol>
              <div className="it1">
                <p>
                  <i class="fa-solid fa-0"></i> <i class="fa-solid fa-1"></i>
                </p>
                <li>
                  Create a website Select from any of our industry-leading
                  <br /> website templates, designer fonts, and color palettes
                  that
                  <br /> best fit your personal style and professional needs.
                </li>
              </div>

              <div className="it2">
                <p>
                  <i class="fa-solid fa-0"></i> <i class="fa-solid fa-2"></i>
                </p>
                <li>
                  Sell anything Explore which tools you want to add—whether
                  <br />
                  it’s setting up an online store, booking services, or adding
                  <br /> your favorite third-party extensions.
                </li>
              </div>

              <div className="it3">
                <p>
                  <i class="fa-solid fa-0"></i> <i class="fa-solid fa-3"></i>
                </p>
                <li>
                  Market your business Stand out in every inbox and social
                  <br /> feed. brand email campaigns and social tools make it
                  <br />
                  easy to retain customers and grow your audience.
                </li>
              </div>
            </ol>

            <span id="card5start">
              {' '}
              Get Started Now <i class="fa-solid fa-arrow-right-long"></i>
            </span>

            {/* <button className='c5btn1'> Demo Store </button> <button> Demo Admin </button> */}
          </div>

          <div className="card5">
            <img src={sec5pic} alt="" />
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="container6">
          <div className="card6">
            <img src={sec6pic} alt="" />
          </div>
          <div className="card6">
            <h3>We've got you covered, 24/7</h3>
            <h1> Join Thousands of users around the world</h1>

            <p>
              Whether you’re just getting started or are an established <br />
              brand, our powerful ecommerce cms builder helps your <br />
              business grow.{' '}
            </p>
            <button>
              Sign Up Now <i class="fa-solid fa-angle-right"></i>{' '}
            </button>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="container7">
          <div className="card7 card7b">
            <h4>
              One Live stream, 4 different locations.{' '}
              <i class="fa-solid fa-camera-viewfinder"></i>{' '}
            </h4>
            <h1>
              {' '}
              Sell On other Social Media With Our <br />
              Video Live Streaming Service.
            </h1>
            <p>
              help your customers experience a seamless, painless shopping.
              <br /> get started once and start selling to people near you.{' '}
            </p>

            <p>
              {' '}
              <i class="fa-solid fa-play"> </i> <span> Watch now. </span>{' '}
            </p>
          </div>

          <div className="card7">
            <img src={sec7pic} alt="" />
          </div>
        </div>
      </Fade>

      <Fade>
        <CompNewsletter />
      </Fade>

      <CompFooter />
    </Homecontainer>
  );
};

export default DocHomepage;
