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
  {
    title: "Pipelines",
    linkTo: "pipelinesMain",
    bootstrapIcon: "bi bi-arrow-left-right",
    subMenu: [
      {
        title: "Pipeline List",
        linkTo: "/pipelines",
      },
      {
        title: "Add New Pipeline",
        linkTo: "/addPipeline",
      },
    ],
  },
];

export default menuItems;
