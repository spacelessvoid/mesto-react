import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
        onEditProfile={() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
        onAddPlace={() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
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
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            className="popup__text-input popup__text-input_type_job"
            type="text"
            name="about"
            id="job-input"
            placeholder="Введите профессию"
            minlength="2"
            maxlength="200"
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
            minlength="2"
            maxlength="30"
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
    </div>
  );
}

export default App;