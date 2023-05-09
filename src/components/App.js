import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // TODO: fix image popup closing glitch
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
        onEditProfile={() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
        onAddPlace={() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title={"Обновить аватар"}
        name={"change-avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__text-input popup__text-input_type_avatar"
            type="url"
            name="avatar"
            id="avatar-input"
            placeholder="Ссылка на новый аватар"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
          <button className="popup__button button" type="submit">
            Сохранить
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit-profile"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__text-input popup__text-input_type_name"
            type="text"
            name="name"
            id="name-input"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            className="popup__text-input popup__text-input_type_job"
            type="text"
            name="about"
            id="job-input"
            placeholder="Введите профессию"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error job-input-error"></span>
          <button className="popup__button button" type="submit">
            Сохранить
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"add-image"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__text-input popup__text-input_type_title"
            type="text"
            name="name"
            id="title-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error title-input-error"></span>
          <input
            className="popup__text-input popup__text-input_type_link"
            type="url"
            name="link"
            id="link-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error link-input-error"></span>
          <button className="popup__button button" type="submit">
            Создать
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm title={"Вы уверены?"} name={"confirm-delete"}>
        <>
          <button className="popup__button button" type="submit">
            Да, удалить карточку
          </button>
        </>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
