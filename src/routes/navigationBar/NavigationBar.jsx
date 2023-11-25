import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";
import { clearTheWholeCart, toggleCartDropdown } from "../../redux/cartSlice";

import { Outlet, Link, useNavigate } from "react-router-dom";

import { signOutUser } from "../../utilities/firebase/firebase";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import "./navigationBar.css";

function NavigationBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(setCurrentUser(null));
    dispatch(clearTheWholeCart());
    navigate("/");

    localStorage.clear()
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <svg // svg of the logo
            className="logo"
            width="50px"
            height="39px"
            viewBox="0 0 50 39"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>Group</title>
            <desc>Created with Sketch.</desc>
            <g
              id="WiP"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g id="Artboard" transform="translate(-90.000000, -38.000000)">
                <g id="Group" transform="translate(90.000000, 38.000000)">
                  <polygon
                    id="Rectangle"
                    fill="#808282"
                    points="3 14 25 26.5 47 14 40.855176 39 9.08421785 39"
                  />
                  <polygon
                    id="Triangle"
                    fillOpacity="0.262838724"
                    fill="#101A1A"
                    points="25 8 40 39 10 39"
                  />
                  <circle id="Oval" fill="#5E6363" cx={2} cy={9} r={2} />
                  <circle id="Oval" fill="#5E6363" cx={25} cy={2} r={2} />
                  <circle id="Oval" fill="#5E6363" cx={48} cy={9} r={2} />
                </g>
              </g>
            </g>
          </svg>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link auth-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link auth-link" to="/authentication">
              SIGN IN
            </Link>
          )}

          <CartIcon handleDisplayCart={() => dispatch(toggleCartDropdown())} />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />

      <hr className="footer-hr" />

      <footer className="footer">
        <div>
          <a className="footer-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <span>info@crownclothing.net</span>
          </a>
        </div>

        <div>
          <a className="footer-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <span>+23 576 8978 </span>
          </a>
        </div>

        <div>
          <a className="footer-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <span>Crown Clothing</span>
          </a>
        </div>

        <div>
          <a className="footer-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            <span>crownclothing99</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default NavigationBar;
