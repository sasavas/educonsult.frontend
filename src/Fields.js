import Field from "./Field";

const Fields = (props) => {
  return (
    <div>
      {props.fields.map((f) => (
        <Field field={f}></Field>
      ))}
    </div>
  );
};

export default Fields;
