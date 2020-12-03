import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

//
export default class extends React.Component {
  // 영화 상세 페이지를 표현?
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    // id가지고오기, match.params
    // 아이디가 안들어오면 Home으로 이동 -> history.push
    // 사용자의 요청을 서버가 받고 재요청 하도록 하는 것을 redirect라고 한다.

    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    // 올바르지 않은 id는..
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({
        error: "프로그램이 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  // 함수형 컴포넌트의 return에 해당한다.
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
