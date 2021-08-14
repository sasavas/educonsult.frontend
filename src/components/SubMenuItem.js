import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveItem,
  selectActiveSubItem,
  changeActiveLink,
  changeActiveSubLink,
} from "../state/features/menuSelectorSlice";

const SubMenuItem = ({ item, icon }) => {
  const activeItem = useSelector(selectActiveItem);
  const activeSubItem = useSelector(selectActiveSubItem);
  const dispatch = useDispatch();

  console.log("activeItem", activeItem);

  return (
    <li
      className={
        activeItem === item.linkTo
          ? "sidebar-item has-sub active"
          : "sidebar-item has-sub"
      }
      key={item.linkTo}
    >
      <Link to={item.linkTo} className="sidebar-link">
        <i className={icon}></i>
        <span>{item.title}</span>
      </Link>
      <ul className="submenu">
        {item.subMenu.map((subItem) => {
          return (
            <li
              className={
                activeSubItem === subItem.linkTo
                  ? "submenu-item active"
                  : "submenu-item"
              }
              key={subItem.linkTo}
              onClick={() => {
                dispatch(changeActiveLink(item.linkTo));
                dispatch(changeActiveSubLink(subItem.linkTo));
              }}
            >
              <Link to={subItem.linkTo}>{subItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default SubMenuItem;
