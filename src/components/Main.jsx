export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src="#" alt="Фото пользователя" className="profile__avatar" />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кустов</h1>
          <button
            className="profile__edit-btn button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">Исследователь кустов</p>
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
