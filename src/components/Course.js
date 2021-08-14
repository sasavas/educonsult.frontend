const Course = (props) => {
  const { course } = props;

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Okullar</h1>
      <section id="content-types">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                      <h4
                        className="card-title"
                        style={{ display: "inline-block", marginRight: "1rem" }}
                      >
                        {course.fieldName}
                      </h4>
                      <span>{capitalize(course.school.name)}, </span>
                      <span className="fst-italic">
                        {capitalize(course.fieldType)}
                      </span>
                      {course.lanugage && (
                        <p className="card-text">
                          <span style={{ fontWeight: "bold" }}>Language:</span>{" "}
                          {course.language}
                        </p>
                      )}
                      {course.languageRequirement && (
                        <p>
                          <span>Dil Sınavı:</span>
                          {course.languageRequirement.certificateName}
                          <span>, Baraj Puan:</span>
                          {course.languageRequirement.minScore}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-4">
                      <span style={{ fontWeight: "bold" }}>
                        Application Start:{" "}
                      </span>
                      <p>
                        {course.applicationDates.beginDate.substring(0, 10)}
                      </p>
                      <span style={{ fontWeight: "bold" }}>
                        Application End:{" "}
                      </span>
                      <p>{course.applicationDates.endDate.substring(0, 10)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <span>Card Footer</span>
                <button className="btn btn-light-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
