import { read_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {

 const { electionId, constituencyId, candidateId } = req.body;

 if (!electionId) throw "Bad Request";

 const data = {
   _electionId: parseInt(electionId),
   _constituencyId: parseInt(constituencyId),
   _candidateId: parseInt(candidateId),
 };

 const response = await read_contract.getCandidateDetails(
   data._electionId,
   data._constituencyId,
   data._candidateId
 );
    
      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
