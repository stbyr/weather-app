import React from "react";
import Head from "next/head";
import Search from "../components/Search";
import * as S from "../styles/";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Wetter App</title>
        <meta name="description" content="Wetter App" />
        <link rel="icon" href="/wetter.ico" />
      </Head>

      <S.Wrapper data-cy="background">
        <S.Headline>
          <h1>Das Wetter</h1>
        </S.Headline>
        <Search />
      </S.Wrapper>
    </div>
  );
};

export default Home;
