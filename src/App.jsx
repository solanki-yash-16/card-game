import { useEffect, useState } from 'react';
import { generateShuffledCards } from './utils/helpers';
import Card from './components/Cards';

export default function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    resetGame();
  }, []);

  const handleCardClick = (card) => {
    if (flippedCards.length === 2) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    const newFlipped = [...flippedCards, { ...card, flipped: true }];
    setCards(newCards);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setAttempts((prev) => prev + 1);
      setTimeout(() => checkMatch(newFlipped, newCards), 1000);
    }
  };

  const checkMatch = (flipped, currentCards) => {
    const [first, second] = flipped;
    let updated;

    if (first.pokeId === second.pokeId) {
      updated = currentCards.map((card) =>
        card.pokeId === first.pokeId ? { ...card, matched: true } : card
      );
    } else {
      updated = currentCards.map((card) =>
        card.id === first.id || card.id === second.id
          ? { ...card, flipped: false }
          : card
      );
    }

    setCards(updated);
    setFlippedCards([]);
  };

  const resetGame = () => {
    setAttempts(0);
    setFlippedCards([]);
    setCards(generateShuffledCards());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">🧠 Memory Game</h1>
      <p className="mb-4">Attempts: {attempts}</p>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
}
