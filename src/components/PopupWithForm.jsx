export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
}) {
  return (
    <div
      className={"popup" + (isOpen ? " popup_opened" : "")}
      id={`popup-${name}`}
    >
      <div className="popup__container">
        <button
          className="popup__close button"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
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
