export const networkBase = "http://localhost:3008";

/** Course Routes */

export const coursesRoute = networkBase + "/fields";

/** Students Routes */

export const studentsRoute = networkBase + "/students";

export const studentById = (id) => `${networkBase}/students/${id}`;

export const registerStudent = (studentId, programId) =>
  `${networkBase}/students/${studentId}/${programId}`;

/** Pipeline Routes */

export const pipelinesRoute = `${networkBase}/pipelines`;
