interface InputTypes {
  id: string;
  label: string;
}

const Input = ({ id, label }: InputTypes) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} />;
    </div>
  );
};

export default Input;
