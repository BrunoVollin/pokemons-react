import "./styles.css";

export default function CardPokemon({ imageUrl, name, order, weight, height }) {
  return (
    <div className="card-wrapper">
      <img src={imageUrl} />
      <div>
        <p className="card-title">Name: {name}</p>
        <p className="card-text">Order: {order}</p>
        <p className="card-text">Weight: {weight}</p>
        <p className="card-text">Height: {height}</p>
      </div>
    </div>
  );
}
