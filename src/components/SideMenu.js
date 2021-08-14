import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="Logo" srcset="" />
              </Link>
            </div>
            <div className="toggler">
              <Link to="/" className="sidebar-hide d-xl-none d-block">
                <i className="bi bi-x bi-middle"></i>
              </Link>
            </div>
          </div>
        </div>
        <div classNameNameName="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>

            <li className="sidebar-item  ">
              <Link to="/" className="sidebar-link">
                <i className="bi bi-grid-fill"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to="/courses" className="sidebar-link">
                <i className="bi bi-grid-fill"></i>
                <span>Courses</span>
              </Link>
            </li>

            <li className="sidebar-item  has-sub">
              <Link to="/students" className="sidebar-link">
                <i className="bi bi-stack"></i>
                <span>Students</span>
              </Link>
              <ul className="submenu ">
                <li className="submenu-item ">
                  <Link to="/about">About</Link>
                </li>
                <li className="submenu-item ">
                  <Link to="/students">Students</Link>
                </li>
              </ul>
            </li>

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
