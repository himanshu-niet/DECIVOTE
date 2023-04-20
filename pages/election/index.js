// import components

// import data
import AdminIndex from "../../components/AdminIndex";
import { headerData, heroData, navData } from "../../data.json";

const index = ({ headerData, heroData, navData }) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <AdminIndex heroData={heroData} headerData={headerData} navData={navData} />
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

export default index;
