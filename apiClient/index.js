import axios from "axios";

const addElectionAPI = async (data) => {
  return await axios.post("/api/createElection", data);
};

const getAllElectionAPI = async (data) => {
  return await axios.get("/api/getAllElectionDetails");
};

const addConstituncyAPI = async (data) => {
  return await axios.post("/api/registerConstituency", data);
};

const addCandidateAPI = async (data) => {
  return await axios.post("/api/registerCandidate", data);
};








export {
  addElectionAPI,
  addConstituncyAPI,
  addCandidateAPI,
  getAllElectionAPI,
};
