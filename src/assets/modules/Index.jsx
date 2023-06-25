import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Multi Page</title>
      </Helmet>
      <Header />
      <Main />
      <Testimonial />
      <Footer />
    </>
  );
}
