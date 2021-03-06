import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>TV Shows | BITFLIX</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="최고순위">
              {topRated.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Container>
          {popular && popular.length > 0 && (
            <Section title="인기작">
              {popular.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Container>
          {airingToday && airingToday.length > 0 && (
            <Section title="오늘방영">
              {airingToday.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};

export default TvPresenter;
