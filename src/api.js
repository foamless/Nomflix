import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ce5c097c55ef27625ab8b2f14a6fec23",
    language: "en-US"
  }
});

export default api;

export const moviesApi = {
    // 각각의 값은 moviedb에서
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
      api.get(`movie/${id}`, {
        // append_to_response, 파라미터 명은 moviedb에서
        params: {
          append_to_response: "videos"
        }
      }),
    search: term =>
      api.get("search/movie", {
        // 파라미터 명은 moviedb에서
        params: {
          // 띄어쓰기, 특수문자 등도 string으로 되어야 하기때문에 URL에서 인코딩 필요
          query: encodeURIComponent(term)
        }
      })
  };
  
  export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id =>
      api.get(`tv/${id}`, {
        params: {
          append_to_response: "videos"
        }
      }),
    search: term =>
      api.get("search/tv", {
        params: {
          query: encodeURIComponent(term)
        }
      })
  };