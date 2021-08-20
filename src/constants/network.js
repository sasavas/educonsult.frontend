export const networkBase = "http://localhost:3008";

export const coursesRoute = networkBase + "/fields";

export const studentsRoute = networkBase + "/students";

export const studentById = (id) => `${networkBase}/students/${id}`;

export const registerStudent = (studentId, programId) =>
  `${networkBase}/students/${studentId}/${programId}`;
