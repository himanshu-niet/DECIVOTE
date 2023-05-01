// import components

// import data
import AdminIndex from "../../components/AdminIndex";
import AddConstituencies from "../../components/addConstituencies";
import { headerData, heroData, navData } from "../../data.json";
import { useRouter } from "next/router";


const Constituency = ({ headerData, heroData, navData }) => {

  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <AddConstituencies
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

export default Constituency;
