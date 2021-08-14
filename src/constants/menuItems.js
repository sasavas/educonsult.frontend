const menuItems = [
  {
    title: "Dashboard",
    linkTo: "/",
  },
  {
    title: "Courses",
    linkTo: "/courses",
  },
  {
    title: "Students",
    linkTo: "/students",
    subMenu: [
      {
        title: "About",
        linkTo: "/about",
      },
      {
        title: "Students Info",
        linkTo: "/studentsInfo",
      },
    ],
  },
];

export default menuItems;
