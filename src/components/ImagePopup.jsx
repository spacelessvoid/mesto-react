export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={
        "popup popup_bg-opacity_darker" + (card ? " popup_opened" : "")
      }
      id="popup-zoom-image"
    >
      <div className="popup__zoom-container">
        <button
          className="popup__close button"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img
            src={card.link}
            alt={card.name}
            className="popup__image-zoomed"
          />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
