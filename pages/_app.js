  import Head from 'next/head'
  import '@/assets/css/globals.css'
  import '@/assets/css/base.css'
  import '@/assets/css/custom.css'
  import '@/assets/webfont/stylesheet.css'
  import '@/assets/css/icons.css'
  import '@/assets/css/responsive.css'
  import Navbar from '../component/Navbar'
  import Footer from '../component/Footer'
  
  // import { Layout } from "@/components";
  // import { StateContext } from "@/context/StateContext";
  export default function App({ Component, pageProps }) {
    return (
        <div>
          <Head>
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" /> */}
          {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> */}
          </Head>
          <Navbar  />
            <Component {...pageProps} />
          <Footer  />
        </div>
  );
}

