import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    // movie와 tv 결과 동시에 나타나기
    movieResults: null,
    tvResults: null,
    // 검색창 초기값은 공백
    searchTerm: "",
    // 초기에는 아무것도 로딩을 안할테니 false
    loading: false,
    error: null
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}