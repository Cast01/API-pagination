import { Container } from "./HomeStyle";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import qs from "qs";

const api = "https://kitsu.io/api/edge/";
let LIMIT = 12;

export function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [inputAnime, setInputAnime] = useState("");
  const [loading, setLoading] = useState(false);
  const [animesQuantity, setAnimesQuantity] = useState({});
  const [offset, setOffset] = useState(0);

  function shearchAnime(e) {
    e.preventDefault();
    setLoading(true);

    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    };

    if (inputAnime && inputAnime.trim() !== "") {
      query.filter = {
        text: inputAnime,
      };
    }

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((resp) => resp.json())
      .then((data) => {
        setAnimeList(data);
        setAnimesQuantity(data.meta);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setLoading(true);

    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    };

    if (inputAnime && inputAnime.trim() !== "") {
      query.filter = {
        text: inputAnime,
      };
    }

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((resp) => resp.json())
      .then((data) => {
        setAnimeList(data);
        setAnimesQuantity(data.meta);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <Container>
      <header>
        <form className="input-icon" onSubmit={shearchAnime}>
          <input
            type="text"
            placeholder="Pesquisar por animes"
            onChange={(e) => setInputAnime(e.target.value)}
            value={inputAnime}
          />
          <MagnifyingGlass size={25} onClick={shearchAnime} />
        </form>
      </header>
      <main>
        {!loading ? <h1>PAGINA INICIAL</h1> : <h1>Carregando......</h1>}
        {animeList.data && (
          <ul className="anime">
            {animeList.data.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    src={item.attributes.posterImage?.tiny}
                    alt={item.attributes.titles.en}
                  />
                  <div className="description">
                    <h1 title={item.attributes.titles.en}>
                      {item.attributes.canonicalTitle}
                    </h1>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {animesQuantity && (
          <>
            <Pagination
              limiteDeItens={LIMIT}
              totalItens={animesQuantity.count}
              offset={offset}
              setOffset={setOffset}
            />
          </>
        )}
      </main>
    </Container>
  );
}
