// TODO Refactor
/*
_request(url, options) {
return fetch(url, options).then(this._checkStatus)
*/

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkStatus(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then(res => this._checkStatus(res));
  }

  addNewCard({ name, link }) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(res => this._checkStatus(res));
  }

  deleteCard(cardID) {
    return fetch(this._baseUrl + `/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this._checkStatus(res));
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then(res => this._checkStatus(res));
  }

  updateUserInfo({ name, about }) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then(res => this._checkStatus(res));
  }

  updateUserAvatar(avatar) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then(res => this._checkStatus(res));
  }

  addLike(cardID) {
    return fetch(this._baseUrl + `/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this._headers,
    }).then(res => this._checkStatus(res));
  }

  removeLike(cardID) {
    return fetch(this._baseUrl + `/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this._checkStatus(res));
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "22f549e9-e0fd-461e-9588-c9d853933dcc",
    "Content-Type": "application/json",
  },
});
