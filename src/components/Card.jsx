export default function Card({ card: { id, link, name, likes }, onCardClick }) {
  function handleClick() {
    onCardClick({ link, name });
  }

  return (
    <article className="gallery__card card" id={id}>
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={handleClick}
      />
      <button
        className="card__delete-btn button"
        type="button"
        aria-label="Удалить фото"
      ></button>
      <div className="card__info">
        <h2 className="card__place">{name}</h2>
        <button
          className="card__like-btn button"
          type="button"
          aria-label="Сердечко"
        ></button>
        <div className="card__like-count">{likes.length}</div>
      </div>
    </article>
  );
}
