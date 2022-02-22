export const networkBase =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3008"
    : "https://educonsult-be.herokuapp.com/";

/** Course Routes */

const programs = "programs";

export const coursesRoute = `${networkBase}/${programs}`;

export const courseById = (id) => `${networkBase}/${programs}/${id}`;

/** Students Routes */

const students = "students";

export const studentsRoute = `${networkBase}/${students}`;

export const studentById = (id) => `${networkBase}/${students}/${id}`;

export const registerStudent = (studentId, programId) =>
  `${networkBase}/${students}/${studentId}/${programId}`;

/** Pipeline Routes */

const pipelines = "pipelines";

export const pipelinesRoute = `${networkBase}/${pipelines}`;
