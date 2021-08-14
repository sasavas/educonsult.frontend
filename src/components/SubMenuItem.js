import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveItem,
  changeActiveLink,
} from "../state/features/menuSelectorSlice";

const SubMenuItem = ({ item }) => {
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();

  console.log("activeItem", activeItem);

  return (
    <li className="sidebar-item  has-sub" key={item.linkTo}>
      <Link to={item.linkTo} className="sidebar-link">
        <i className="bi bi-stack"></i>
        <span>{item.title}</span>
      </Link>
      <ul className="submenu">
        {item.subMenu.map((subItem) => {
          return (
            <li
              className={
                activeItem === subItem.linkTo
                  ? "submenu-item active"
                  : "submenu-item"
              }
              key={subItem.linkTo}
              onClick={() => {
                dispatch(changeActiveLink(subItem.linkTo));
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
