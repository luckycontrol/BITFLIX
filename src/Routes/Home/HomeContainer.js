import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

// Container의 역할 : Application에서 사용되는 함수, state, 이벤트 등을
// 구현하고, Presenter에 전달
export default class extends React.Component {
  // 클래스형 컴포넌트에서 state만들기
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  // constructor : 생성자
  // 매개변수로 부모 컴포넌트의 props가 들어온다.
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 부모 컴포넌트에 마운트 되었을 때 호출
  // useEffect(() => {}, [])와 같다.
  // useEffect에서 비동기처리와 다르게 componentDidMount에서의 비동기 처리는
  // 앞에 async를 붙여주면 된다.
  async componentDidMount() {
    this.setState({
      loading: true,
    });

    try {
      // data : { results: [{}, {}, {}...]}
      // data 안에 있는 results에 들어있는 값을 nowPlaying 변수에 넣겠다.
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // 함수형 컴포넌트의 return에 해당한다.
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
