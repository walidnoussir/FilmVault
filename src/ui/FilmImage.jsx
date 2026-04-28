function FilmImage({ type, src }) {
  const styles = {
    top: `w-full md:w-[80%] h-100`,
  };

  return (
    <div className={styles[type]}>
      <img className="w-full h-full" src={src} alt="image" />
    </div>
  );
}

export default FilmImage;
