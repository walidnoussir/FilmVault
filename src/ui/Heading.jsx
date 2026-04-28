function Heading({ children, type }) {
  const styles = {
    normal: `text-2xl text-white font-bold`,
  };

  return <h1 className={styles[type]}>{children}</h1>;
}

export default Heading;
