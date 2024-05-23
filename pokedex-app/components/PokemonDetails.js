import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function PokemonDetails({ pokemon }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch detailed data for the pokemon if the url is available
    if (pokemon.url) {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(data => setDetails(data));
    }
  }, [pokemon.url]);

  // Display loading state while fetching data
  if (!details) return <div>Loading...</div>;

  return (
    <Container>
      <Row>
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null; // Remove the event handler to prevent infinite loop
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-50 h-auto"
            src={details.sprites?.front_default} // Use optional chaining to safely access properties
            alt="Pokemon Image"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          <strong>Name: {details.name}</strong>
          <p>ID: {details.id}</p>
          <p>Types: {details.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
          <p>Height: {details.height}</p>
          <p>Weight: {details.weight}</p>
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}
