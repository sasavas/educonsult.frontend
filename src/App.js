import { useState, useEffect } from "react";
import axios from "axios";

import Fields from "./Fields";

const App = () => {
  const [fields, setFields] = useState([]);
  useEffect(() => {
    // axios request
    axios.get("http://localhost:3008/fields").then((result) => {
      setFields(result.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Initial app</h1>
      <Fields fields={fields}></Fields>
    </div>
  );
};

export default App;
