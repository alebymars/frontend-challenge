export const addFavoriteCard = (card: object) => {
  const cards = localStorage.getItem("cards");

  if (!cards) {
    localStorage.setItem("cards", JSON.stringify([card]));
    return;
  }

  const parsedCards = JSON.parse(cards);

  const isDuplicate = parsedCards.some(
    (c: object) => JSON.stringify(c) === JSON.stringify(card)
  );

  if (!isDuplicate) {
    parsedCards.push(card);
    localStorage.setItem("cards", JSON.stringify(parsedCards));
  } else {
    console.log("Этот объект уже существует в хранилище.");
  }
};

export const removeFavoriteCard = (card: object) => {
  const cards = localStorage.getItem("cards");

  if (!cards) {
    return;
  }

  const parsedCards = JSON.parse(cards);

  const isDuplicate = parsedCards.some(
    (c: object) => JSON.stringify(c) === JSON.stringify(card)
  );

  if (isDuplicate) {
    const newData = parsedCards.filter(
      (c: object) => JSON.stringify(c) !== JSON.stringify(card)
    );
    localStorage.setItem("cards", JSON.stringify(newData));
    console.log("Карточка успешно удалена из хранилища.");
  } else {
    console.log("Карточка не найдена в хранилище.");
  }
};
