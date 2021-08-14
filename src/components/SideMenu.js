import { Link } from "react-router-dom";
import MainMenuItem from "./MainMenuItem";
import menuItems from "../constants/menuItems";
import SubMenuItem from "./SubMenuItem";

const SideMenu = () => {
  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="Logo" srcSet="" />
              </Link>
            </div>
            <div className="toggler">
              <Link to="/" className="sidebar-hide d-xl-none d-block">
                <i className="bi bi-x bi-middle"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>

            {menuItems.map((item) => {
              if (item.subMenu) {
                return <SubMenuItem key={item.linkTo} item={item} />;
              } else {
                return <MainMenuItem key={item.linkTo} item={item} />;
              }
            })}

            <li className="sidebar-title">Forms &amp; Tables</li>

            <li className="sidebar-item  ">
              <a href="form-layout.html" className="sidebar-link">
                <i className="bi bi-file-earmark-medical-fill"></i>
                <span>Form Layout</span>
              </a>
            </li>
          </ul>
        </div>
        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
