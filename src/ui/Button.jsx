function Button({ children, type }) {
  const base = `flex w-fit items-center gap-2 cursor-pointer text-white`;
  const styles = {
    primary: base + ` bg-blue-500 rounded-md py-2 px-4`,
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
