import Header from "../components/header";
import Banner from "../components/banner";
import OurSer from "../components/our-services";
import Why from "../components/why-us";
import Testi from "../components/testimonial";
import Cta from "../components/mulai-sewa";
import Faq from "../components/faq";
import Foot from "../components/footer";

const landingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurSer />
      <Why />
      <Testi />
      <Cta />
      <Faq />
      <Foot />
    </>
  );
};
export default landingPage;
