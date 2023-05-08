export default function ImagePopup() {
  return (
    <div className="popup popup_bg-opacity_darker" id="popup-zoom-image">
      <div className="popup__zoom-container">
        <button
          className="popup__close button"
          type="button"
          aria-label="Закрыть всплывающее окно"
        ></button>
        <figure className="popup__figure">
          <img src="#" alt="#" className="popup__image-zoomed" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}
