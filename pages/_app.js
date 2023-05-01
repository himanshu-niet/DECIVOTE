import '../styles/globals.css';
import '../testimonialSlider.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      
    </>
  );
}

export default MyApp;
