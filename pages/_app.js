import "../styles/globals.css";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);