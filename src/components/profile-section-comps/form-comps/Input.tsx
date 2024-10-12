interface InputTypes {
  id: string;
  label: string;
}

const Input = ({ id, label }: InputTypes) => {
  return (
    <div className="w-full">
      <label className="text-xs text-darkGrey font-normal" htmlFor={id}>{label}*</label>
      <input type="text" id={id} name={id} className="rounded-lg mt-1 px-4 py-3 border border-border bg-white outline-none text-darkGrey text-base font-normal" />
    </div>
  );
};

export default Input;
