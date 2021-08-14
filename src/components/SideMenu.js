import MainMenuItem from "./MainMenuItem";
import menuItems from "../constants/menuItems";
import SubMenuItem from "./SubMenuItem";

const SideMenu = () => {
  return (
    <div>
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <a href="/">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              {menuItems.map((item) => {
                if (item.subMenu) {
                  return (
                    <SubMenuItem
                      key={item.linkTo}
                      item={item}
                      icon={item.bootstrapIcon}
                    />
                  );
                } else {
                  return (
                    <MainMenuItem
                      key={item.linkTo}
                      item={item}
                      icon={item.bootstrapIcon}
                    />
                  );
                }
              })}
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
