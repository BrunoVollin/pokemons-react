import "./styles.css";

export default function PokemonItem({ name, onClick, selected }) {
  return (
    <div
      className="pokemon-item-wrapper"
      onClick={onClick}
      style={selected ? { backgroundColor: "slateblue" } : {}}
    >
      <p
        className="pokemon-item-name"
        style={selected ? { color: "white" } : {}}
      >
        {name}
      </p>
    </div>
  );
}
