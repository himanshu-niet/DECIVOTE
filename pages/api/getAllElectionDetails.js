import { read_contract } from "../../ether";
import { onErrorResponse, onSuccessResponse } from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response=await read_contract.getAllElectionDetails()
      console.log(response)
      onSuccessResponse(res,response)

    } catch (err) {
      onErrorResponse(res,err)
    }
  } 
}
