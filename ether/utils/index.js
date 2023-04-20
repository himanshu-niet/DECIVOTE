const { read_contract, write_contract } = require("../index");

const getAllElectionDetails = async () => {
  try {
    const response = await read_contract.getAllElectionDetails();
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const getElectionDetails = async (data) => {
  try {
    const response = await read_contract.getElectionDetails(data._electionId);
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const createElection = async (data) => {
  try {
    const response = await write_contract.getElectionDetails(
      data._name,
      data._votingStartTime,
      data._votingEndTime,
      data._candidateRegistrationStartTime,
      data._candidateRegistrationEndTime,
      data._stateCode
    );

    return response;
  } catch (error) {
    throw err.reason;
  }
};

const getAllConstituencyDetails = async (data) => {
  try {
    const response = await read_contract.getAllConstituencyDetails(
      data._electionId
    );
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const getConstituencyDetails = async (data) => {
  try {
    const response = await read_contract.getConstituencyDetails(
      data._electionId,
      data._constituencyId
    );
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const registerConstituency = async (data) => {
  try {
    const response = await write_contract.registerConstituency(
      data._electionId,
      data._name,
      data._constituencyCode
    );

    return response;
  } catch (error) {
    throw err.reason;
  }
};

const getAllCandidateDetails = async (data) => {
  try {
    const response = await read_contract.getAllCandidateDetails(
      data._electionId,
      data._constituencyId
    );
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const getCandidateDetails = async (data) => {
  try {
    const response = await read_contract.getCandidateDetails(
      data._electionId,
      data._constituencyId,
      data._candidateId
    );
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const vote = async (data) => {
  try {
    const response = await write_contract.registerCandidate(
      data._electionId,
      data._constituencyId,
      data._candidateId,
      data._voterId
    );
    return response;
  } catch (error) {
    throw err.reason;
  }
};

const registerCandidate = async (data) => {
  try {
    const response = await write_contract.registerCandidate(
      data._electionId,
      data._constituencyId,
      data._name,
      data._partyName,
      data._partyShortcutName,
      data._partyFlagUrl,
      data._photoUrl
    );

    return response;
  } catch (error) {
    throw err.reason;
  }
};

export {
  getAllElectionDetails,
  getAllConstituencyDetails,
  getAllCandidateDetails,
  getElectionDetails,
  getConstituencyDetails,
  getCandidateDetails,
  createElection,
  registerConstituency,
  registerCandidate,
  vote,
};
