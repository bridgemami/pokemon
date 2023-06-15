import PropTypes from "prop-types";
export default function Game({ game }) {
  return (
    <section>
      <h3>Pokemon Games:</h3>
      <ul>
        {game.map((index, i) => {
          return (
            // used the array's index for the key
            <div key={i}>
              {/* used map method to provide the information which game the pokemon appeared in */}
              <li>
                {index.version.name.substring(0, 1).toUpperCase()}
                {index.version.name.substring(1)}
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
Game.props = {
  game: PropTypes.object,
};
