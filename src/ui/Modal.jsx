function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-slate-800/60 bg-opacity-50 items-center justify-center flex flex-col backdrop-blur-md z-100">
      {children}
    </div>
  );
}

export default Modal;
