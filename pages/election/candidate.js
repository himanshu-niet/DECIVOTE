// import components

// import data
import AddCandidates from "../../components/addCandidates";
import { headerData, heroData, navData } from "../../data.json";

const Candidate = ({ headerData, heroData, navData }) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <AddCandidates
        heroData={heroData}
        headerData={headerData}
        navData={navData}
      />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
    },
  };
};

export default Candidate;
