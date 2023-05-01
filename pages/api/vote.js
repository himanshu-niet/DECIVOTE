import {  write_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { electionId, constituencyId, candidateId, voterId } = req.query;

     

      const data = {
        _electionId: parseInt(electionId),
        _constituencyId: parseInt(constituencyId),
        _candidateId: parseInt(candidateId),
        _voterId: parseInt(voterId),
      };

      const response = await write_contract.vote(
        data._electionId,
        data._constituencyId,
        data._candidateId,
        data._voterId
      );
      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
