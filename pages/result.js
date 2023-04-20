// import components

// import data
import {
  headerData,
  heroData,
  navData,
} from "../data.json";
import Hero2 from "../components/Hero2";

const Result = ({
  headerData,
  heroData,
  navData,
  
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero2 heroData={heroData} headerData={headerData} navData={navData} />
     
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData
    },
  };
};

export default Result;
