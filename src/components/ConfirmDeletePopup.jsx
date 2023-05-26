import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onConfirmDelete,
  isLoading,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    onConfirmDelete();
  }

  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"confirm-delete"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button className="popup__button button" type="submit">
        {isLoading ? "Удаляю..." : "Да, удалить карточку"}
      </button>
    </PopupWithForm>
  );
}
