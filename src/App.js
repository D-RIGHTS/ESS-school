import './App.css';
import "./styles.css";
// import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import HeaderTwo from "./components/Header/HeaderTwo";
// import axios from "axios";
//
// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//     if (err.response.status === 401 || err.response.data.message === '401 Unauthorized') {
//         isUserValid(username, disableNavigation, clearCache, clearUserInfo);
//     }
//     return Promise.reject(err);
// })

function App() {
  return (
    <div className="App">
        {/*<Header />*/}
        <HeaderTwo />
        <Body />
    </div>
  );
}

export default App;
