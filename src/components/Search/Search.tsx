import React from "react";
import Link from "next/link";
import cityData from "../../../lib/city.list.json";
import * as S from "./styles";

type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<City[]>([]);
  const [resultsVisible, setResultsVisible] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    React.useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          setResultsVisible(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  React.useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
    }
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setResultsVisible(true);

    let matchingCities: City[] = [];

    for (let city of cityData as City[]) {
      if (matchingCities.length > 5) {
        break;
      }

      const match = city.name
        .toLowerCase()
        .startsWith(value.trim().toLowerCase());
      match && matchingCities.push(city);
    }

    return setSearchResults(matchingCities);
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Form searchResults={!(searchValue.length < 3) && resultsVisible}>
        <form>
          <input
            type="text"
            placeholder="Finde deine Stadt..."
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </S.Form>
      {resultsVisible && searchResults && searchValue.length > 2 && (
        <S.ResultList>
          <ul>
            {searchResults.map((city) => {
              const slug = `/location/${city.name
                .replace(/\s+/g, "-")
                .toLowerCase()}-${city.id}`;
              return (
                <Link key={city.id} href={slug} passHref>
                  <a>
                    <li>
                      {city.name}, {city.country}
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </S.ResultList>
      )}
      {resultsVisible && searchResults.length === 0 && searchValue.length > 2 && (
        <S.ResultList>
          <ul>
            <li>Keine Stadt gefunden.</li>
          </ul>
        </S.ResultList>
      )}
    </S.Wrapper>
  );
};

export default Search;
