function Button({ children, type, onClick }) {
  const base = `flex items-center gap-2 cursor-pointer text-white`;
  const styles = {
    primary: base + ` bg-blue-500 rounded-md py-2 px-4 w-fit`,
    secondary:
      base + ` bg-blue-500 rounded-md py-2 px-4 w-full flex justify-center`,
  };

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
