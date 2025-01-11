// pages/_app.js (or wherever the main entry point is)
import '../styles/globals.css'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
