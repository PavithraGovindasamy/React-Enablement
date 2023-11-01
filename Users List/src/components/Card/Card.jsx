

export  function Card({ name, image, place, tags }) {
  return (
    /** Card container which holds the main card component */
    <li className="cards">
      <div className="image-container">
        <img src={image} alt="..." />
      </div>
      <div className="content-container">
        <div className="name">{name}</div>
        <div className="place">{place}</div>
        <div className="button-container">
          {tags.map((item, index) => (
            <button key={index} className="hover-button" hover={true}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </li>
  );
}
