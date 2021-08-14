const menuItems = [
  {
    title: "Dashboard",
    linkTo: "/",
    bootstrapIcon: "bi bi-grid-fill",
  },
  {
    title: "Courses",
    linkTo: "/coursesMain",
    bootstrapIcon: "bi bi-stack",
    subMenu: [
      {
        title: "Course List",
        linkTo: "/courses",
      },
      {
        title: "Add New Course",
        linkTo: "/addcourse",
      },
    ],
  },
  {
    title: "Students",
    linkTo: "/studentsMain",
    bootstrapIcon: "bi bi-person-fill",
    subMenu: [
      {
        title: "Student List",
        linkTo: "/students",
      },
      {
        title: "Add New Students",
        linkTo: "/addStudent",
      },
    ],
  },
];

export default menuItems;
