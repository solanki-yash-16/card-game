const Card = ({ card, onClick }) => {
  const handleClick = () => {
    if (!card.flipped && !card.matched) {
      onClick(card);
    }
  };

  return (
    <div
      className="w-20 h-20 sm:w-24 sm:h-24 m-2 perspective"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          card.flipped || card.matched ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute cursor-pointer w-full h-full bg-gray-300 rounded shadow flex items-center justify-center backface-hidden">
          ❓
        </div>
        <div className={`absolute w-full h-full bg-white rounded shadow transform rotate-y-180 ${card.flipped || card.matched ? "" : "backface-hidden"}`}>
          <img
            className="w-full h-full object-contain p-2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.pokeId}.png`}
            alt="pokemon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
