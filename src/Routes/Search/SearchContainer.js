import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  //submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;

    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  // update -> onChange에서 일어날 이벤트
  updateTerm = (event) => {
    const {
      target: { value: searchTerm },
    } = event;

    this.setState({ searchTerm });
  };

  // search -> 검색어를 넣은 API 호출
  // 이벤트가 일어났을 때 비동기로 호출
  searchByTerm = async () => {
    // 1. 검색어 가져오기
    const { searchTerm } = this.state;

    // 2. loading 설정하기
    this.setState({ loading: true });

    // 3. 실제 API 호출하기
    // 데이터의 응답 형태 : { data : { results : [ {}. {}, {}, ... ] } }
    try {
      // moviesApi.search -> movieResults에 담기
      // tvApi.search -> tvResults에 담기

      //unpacking 기법 활용하기
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch (error) {
      this.setState({
        error: "검색하신 프로그램이 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  constructor(props) {
    super(props);
  }

  // 함수형 컴포넌트의 return에 해당한다.
  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
