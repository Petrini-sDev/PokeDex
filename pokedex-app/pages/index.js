import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Accordion, Pagination } from 'react-bootstrap';
import PageHeader from "@/components/PageHeader";
import PokemonDetails from "@/components/PokemonDetails";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const initialUrl = `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`;
  const { data, error } = useSWR(initialUrl, fetcher);

  useEffect(() => {
    if (data) {
      setPageData(data.results || []);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    }
  }, [data]);

  const previous = () => {
    if (prevPageUrl) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (nextPageUrl) {
      setPage(page + 1);
    }
  };

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <PageHeader name={'Browse Pokemon : Sorted by Pokemon Index'} />

      <Accordion>
        {pageData.map(pokemon => (
          <Accordion.Item key={pokemon.name} eventKey={pokemon.name}>
            <Accordion.Header>
              <strong>{pokemon.name}</strong>
            </Accordion.Header>
            <Accordion.Body>
              <PokemonDetails pokemon={pokemon} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={previous} disabled={!prevPageUrl} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} disabled={!nextPageUrl} />
      </Pagination>
    </>
  );
}