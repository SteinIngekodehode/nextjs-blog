import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}  
//add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else. 