import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
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

  const [cards, setCards] = useState([]);

  // Fetching cards data
  useEffect(() => {
    if (cards) {
      api
        .getInitialCards()
        .then(result => {
          setCards(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

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

      <section className="gallery" aria-label="Галерея изображений">
        {cards.map(card => (
          <Card
            key={card._id}
            id={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
						onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
