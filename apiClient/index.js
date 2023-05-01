import axios from "axios";

const addElectionAPI = async (data) => {
  return await axios.post("/api/createElection", data);
};

const getAllElectionAPI = async (data) => {
  return await axios.get("/api/getAllElectionDetails");
};
const getElectionAPI = async (data) => {
  const res = await axios.get("/api/getElectionDetails?electionId=" + data);

  return res;
};

const getContiturncyAPI = async (electionId, constituencyId) => {
  return await axios.get(
    "/api/getConstituencyDetails?electionId=" +
      electionId +
      "&constituencyId=" +
      constituencyId
  );
};

const getAllContiturncyAPI = async (data) => {
  console.log(data);
  return await axios.get("/api/getAllConstituencyDetails?electionId=" + data);
};

const addConstituncyAPI = async (data) => {
  return await axios.post("/api/registerConstituency", data);
};

const addCandidateAPI = async (data) => {
  return await axios.post("/api/registerCandidate", data);
};

const getAllCandidateAPI = async (electionId, constituencyId) => {
  console.log(electionId, constituencyId);
  return await axios.get(
    "/api/getAllCandidateDetails?electionId=" +
      electionId +
      "&constituencyId=" +
      constituencyId
  );
};

const castVotefinal = async (electionId, constituencyId, candidateId, voterId) => {
  const res = await axios.get(
    "/api/vote?electionId=" +
      electionId +
      "&constituencyId=" +
      constituencyId +
      "&candidateId=" +
      candidateId +
      "&voterId=" +
      voterId
  );
  console.log(res);
  return res;
};

export {
  getAllContiturncyAPI,
  getContiturncyAPI,
  addElectionAPI,
  addConstituncyAPI,
  addCandidateAPI,
  getAllElectionAPI,
  getElectionAPI,
  getAllCandidateAPI,
  castVotefinal,
};
