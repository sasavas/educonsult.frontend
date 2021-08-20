import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveItem,
  changeActiveLink,
} from "../../state/features/menuSelectorSlice";

const MainMenuItem = ({ item, icon }) => {
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();

  const classes =
    activeItem === item.linkTo ? "sidebar-item active" : "sidebar-item";

  return (
    <li
      className={classes}
      onClick={() => dispatch(changeActiveLink(item.linkTo))}
    >
      <Link to={item.linkTo} className="sidebar-link">
        <i className={icon}></i>
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default MainMenuItem;
