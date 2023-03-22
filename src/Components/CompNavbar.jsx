import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSync } from 'react-icons/fa';

const Navgen = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  .navsection {
    justify-content: space-between;
    display: flex;
    height: 15vh;
    width: 100%;
    background-color: #fff;
    padding: 10px 35px;
    padding-top: 20px;
    align-items: center;
    font-family: 'Manrope';
    align-content: center;
  }

  .megamenu1,
  .megamenu2,
  .megamenu3 {
    display: none;
    cursor: pointer;
  }

  nav-right ul li:hover .megamenu1 {
    display: block;
    position: absolute;
    background-color: #efefef;
    flex-direction: column;
    border-radius: 7px;
  }

  nav-right ul li:hover .megamenu2 {
    display: block;
    position: absolute;
    background-color: #efefef;
    flex-direction: column;
    border-radius: 7px;
  }

  .navgen {
    position: sticky;
    top: 0;
    z-index: 100;
  }

  nav-right ul li:hover .megamenu3 {
    display: block;
    margin-top: 5px;
    position: absolute;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    background-color: #d2e6d2;
    font-weight: 400;
    flex-direction: column;
    border-radius: 7px;
  }

  .navsection ul {
    display: inline-flex;
    align-items: center;

    li {
      cursor: pointer;
    }
  }

  nav-left a {
    text-decoration: none;
    font-family: 'Manrope';
    font-size: 33px;
    font-weight: bold;
    color: #000;
    margin-bottom: 33px;
  }

  nav-left a span {
    color: #32cd32;
  }

  nav-right {
    font-size: 14px;
    font-weight: 400;
    color: black;
    font-family: 'Manrope';
  }

  nav-right .rightsec1 {
    margin-right: 80px;
  }

  nav-right:first-child {
    margin-right: 0;
  }

  nav-right ul li {
    margin-left: 35px;
    font-weight: 600;
    list-style: none;
  }

  nav-right ul li a {
    text-decoration: none;
    color: black;
  }

  nav-right i {
    margin-left: 5px;
  }

  .vshop {
    padding: 16px 44px;
    background-color: #32cd32;
    border-radius: 25px;
  }

  a {
    text-decoration: none;
    .vshop {
      font-size: 13px;
      font-family: 'Manrope';
      font-weight: 600;
      color: aliceblue;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Navbar = () => {
  return (
    <Navgen>
      <header className="navsection">
        <nav-left>
          <Link to="/">
            {' '}
            Flip<span>pa</span>{' '}
          </Link>
        </nav-left>

        <nav-right>
          <ul className="rightsec1">
            <li>
              {' '}
              Features <i class="fa-solid fa-angle-down"> </i>
            </li>
            <li>
              {' '}
              <Link to="/documentation/blog"> Blog </Link>
            </li>
            <li>
              {' '}
              <Link to="/helpcenter"> Help Center </Link>
            </li>
            <li>
              {' '}
              Support <i class="fa-solid fa-angle-down"> </i>
            </li>
            <li>
              {' '}
              <Link to="/documentation/faq"> FAQ </Link>
            </li>
          </ul>

          <ul className="megamenu3">
            <li>
              {' '}
                Login
            </li>
            <Link to="/">
              <li className="vshop">
                {' '}
                Sign up
              </li>
            </Link>{' '}
          </ul>
        </nav-right>
      </header>
    </Navgen>
  );
};

export default Navbar;
