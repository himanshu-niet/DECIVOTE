import { write_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";


const dateToTimestamp=(val)=>{
  var myDate = new Date(val); // Your timezone!
  return myDate.getTime() / 1000.0;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        name,
        stateCode,
        vStartTime,
        vEndTime,
        cStartTime,
        cEndTime
      } = req.body;

      if (
        (!name,
        !stateCode,
        !vStartTime,
        !vEndTime,
        !cStartTime,
        !cEndTime)
      )
        throw "Bad Request";

     const data = {
       _name: name,
       _votingStartTime: parseInt(dateToTimestamp(vStartTime)),
       _votingEndTime: parseInt(dateToTimestamp(vEndTime)),
       _candidateRegistrationStartTime: parseInt(dateToTimestamp(cStartTime)),
       _candidateRegistrationEndTime: parseInt(dateToTimestamp(cEndTime)),
       _stateCode: parseInt(stateCode),
     };
      console.log(data)

      const response = await write_contract.createElection(
        data._name,
        data._votingStartTime,
        data._votingEndTime,
        data._candidateRegistrationStartTime,
        data._candidateRegistrationEndTime,
        data._stateCode
      );
      onSuccessResponse(res, response);
    } catch (err) {
      console.log(err);
      onErrorResponse(res, err);
    }
  }
}
