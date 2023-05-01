import { read_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { electionId, constituencyId } = req.query;

   
      const data = {
        _electionId: parseInt(electionId),
        _constituencyId: parseInt(constituencyId),
      };

      const response = await read_contract.getAllCandidateDetails(
        data._electionId,
        data._constituencyId
      );

      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
