import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </Provider>
  );
}

export default MyApp;
