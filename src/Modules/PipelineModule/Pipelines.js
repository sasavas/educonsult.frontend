import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pipeline from "./Pipeline";
import {
  loadPipelines,
  selectPipelines,
  selectError,
  selectLoaded,
} from "../../state/features/pipelineSlice.js";

const Pipelines = () => {
  const dispatch = useDispatch();
  const pipelines = useSelector(selectPipelines);
  const error = useSelector(selectError);
  const loaded = useSelector(selectLoaded);

  useEffect(() => {
    dispatch(loadPipelines());
  }, [dispatch]);

  if (error) {
    return <p>Hata oluştu :/</p>;
  } else {
    if (loaded) {
      return (
        <div>
          <h1 style={{ marginBottom: "2rem" }}>Pipelines</h1>
          {pipelines.map((p) => (
            <Pipeline key={p._id} pipeline={p}></Pipeline>
          ))}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
};

export default Pipelines;
