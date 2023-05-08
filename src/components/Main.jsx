import { useEffect, useState } from "react";
import { api } from "../utils/Api";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  // Fetching user profile data
  useEffect(() => {
    api
      .getUserInfo()
      .then(result => {
        setUserAvatar(result.avatar);
        setUserName(result.name);
        setUserDescription(result.about);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userAvatar, userName, userDescription]);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            src={userAvatar}
            alt="Фото пользователя"
            className="profile__avatar"
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-btn button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>

        <button
          className="profile__add-btn add-btn button"
          type="button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="gallery" aria-label="Галерея изображений"></section>
    </main>
  );
}
