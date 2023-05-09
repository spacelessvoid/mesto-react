export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
}) {
  function handleClick(evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      onClose();
    }
  }

  return (
    <div
      className={"popup" + (isOpen ? " popup_opened" : "")}
      id={`popup-${name}`}
      onClick={handleClick}
    >
      <div className="popup__container">
        <button
          className="popup__close button"
          type="button"
          aria-label="Закрыть всплывающее окно"
        ></button>

        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          id={`${name}`}
          name={`${name}`}
          noValidate
        >
          {children}
        </form>
      </div>
    </div>
  );
}
