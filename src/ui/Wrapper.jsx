function Wrapper({ children, style }) {
  return <div className={`flex items-center gap-2 ${style}`}>{children}</div>;
}

export default Wrapper;
