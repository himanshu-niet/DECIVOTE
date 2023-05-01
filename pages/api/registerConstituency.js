import { write_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {


       const { electionId, name, constituencyCode } = req.body;

       
console.log(req.body)
     const data = {
         _electionId: parseInt(electionId),
         _name: name,
         _constituencyCode: parseInt(constituencyCode),
       };

       console.log(data)
      const response = await write_contract.registerConstituency(
        data._electionId,
        data._name,
        data._constituencyCode
      );
      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
