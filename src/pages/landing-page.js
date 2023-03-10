import Header from "../components/header";
import Banner from "../components/banner";
import OurSer from "../components/our-services";
import Why from "../components/why-us";
import Testi from "../components/testimonial";
import Cta from "../components/mulai-sewa";
import Faq from "../components/faq";
import Foot from "../components/footer";
import Gallery from "../components/Gallery/Gallery";
import Video from "../components/Video/Video";

const landingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurSer />
      <Why />
      <Testi />
      <Cta />
      <Gallery/>
      <Faq />
      <Video/>
      <Foot />
    </>
  );
};
export default landingPage;
