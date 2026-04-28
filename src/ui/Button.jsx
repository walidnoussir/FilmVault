function Button({ children, type }) {
  const base = `flex items-center gap-2 cursor-pointer`;
  const styles = {
    primary: base + ` bg-blue-500 rounded-md py-1 px-2`,
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
