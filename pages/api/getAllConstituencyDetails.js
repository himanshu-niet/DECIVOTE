import { read_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {

 const electionId  = req.query.electionId;

console.log(electionId)

 const data = {
   _electionId: parseInt(electionId),
 };

 console.log(data);
 const response = await read_contract.getAllConstituencyDetails(
   data._electionId
 );
      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
