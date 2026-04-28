function FormRow({ label, children, style }) {
  return (
    <div className={`flex flex-col gap-1.5 ${style}`}>
      <p className="text-gray-400 font-semibold">{label}</p>
      {children}
    </div>
  );
}

export default FormRow;
