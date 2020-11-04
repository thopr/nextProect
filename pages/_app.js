import { AuthProvider } from "../contexts/auth";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Router from "next/router";
/*import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon.css?v=1.2.0";
import "./assets/css/bootstrap/bootstrap-rtl.css";
import "./assets/css/bootstrap-select.min.css";*/

function MyApp({ Component, pageProps }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    // offset: "5px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };

  /*
   alert.show("رقم الجوال مستخدم مسبقا", {
     timeout: 2000,
     type: "success",
     type: "info",
     type: "error",

      
     onOpen: () => {
       console.log("hey");
     }, // callback that will be executed after this alert open
     onClose: () => {
       console.log("closed");
     },
   });*/
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/argon.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/vendor/nucleo/css/nucleo.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/bootstrap/bootstrap-rtl.css"
      />

      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>

      <script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

      <script src="/assets/js/argon.js?v=1.2.0"></script>

      <AuthProvider>
        {/*

        
    
    

   

     
   
      <script src="/assets/vendor/js-cookie/jscookie.js"></script>
      <script src="/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
      <script src="/assets/vendor/chart.js/dist/Chart.min.js"></script>
      <script src="/assets/vendor/chart.js/dist/Chart.extension.js"></script>
      <script src="/assets/js/components/charts/chart-bars.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"></script>
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/bootstrap-select.min.css"
      />
     
     
     */}
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
