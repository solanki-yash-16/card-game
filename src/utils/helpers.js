export const generateShuffledCards = () => {
  const ids = [];
  while (ids.length < 8) {
    const randomId = Math.floor(Math.random() * 800) + 1;
    if (!ids.includes(randomId)) ids.push(randomId);
  }

  const pairs = [...ids, ...ids]
    .map((id) => ({
      id: crypto.randomUUID(),
      pokeId: id,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

  return pairs;
};
