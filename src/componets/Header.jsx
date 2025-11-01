import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bagItems = useSelector((state) => state.bagItems);
  const bagItemsLength = bagItems.length;
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.svgContent}>
          <Link to="/"><img src={logo} alt="Myntra Logo" srcSet="" />  </Link>
          
          </div>
          <div className={styles.navLinks}>
            <ul>
              <li>
                <a href="">MEN</a>
              </li>
              <li>
                <a href="">WOMEN</a>
              </li>
              <li>
                <a href="">KIDS</a>
              </li>
              <li>
                <a href="">HOME & LIVING</a>
              </li>
              <li>
                <a href="">BEAUTY</a>
              </li>
              <li>
                <a href="">
                  STUDIO<sup>NEW</sup>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.searchBar}>
            <i className="fas fa-search"></i>
            <input
              type="search"
              name=""
              placeholder="search for products, brands, more"
              id=""
            />
          </div>

          <div className={styles.Profile}>
            <div className={styles.icons}>
              <span>
                <CgProfile />
              </span>
              <span> Profile</span>
            </div>

            <div className={styles.icons}>
              <span>
                {" "}
                <CiHeart />
              </span>
              <span>WishList</span>
            </div>

            <div className={styles.icons}>
              <Link to="/bag" className={styles.bagLink}>
                <div className={styles.iconContainer}>
                  <FaShoppingBag className={styles.bagIcon} />
                  {bagItemsLength > 0 && (
                    <sup className={styles.badge}>{bagItemsLength}</sup>
                  )}
                </div>
                <span className={styles.bagText}>Bag</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
