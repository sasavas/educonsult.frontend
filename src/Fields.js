import Field from "./Field";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadFields,
  selectFields,
  selectLoaded,
} from "./state/features/fieldsSlice";

const Fields = (props) => {
  const fields = useSelector(selectFields);
  const loaded = useSelector(selectLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFields());
  }, [dispatch]);

  return (
    <div>
      {loaded ? (
        fields.map((f) => <Field field={f} key={f._id}></Field>)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Fields;
