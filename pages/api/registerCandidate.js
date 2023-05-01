import { write_contract } from "../../ether";
import {
  onErrorResponse,
  onSuccessResponse,
} from "../../responseHander/sendResponse";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        electionId,
        constituencyId,
        name,
        partyName,
        shortName,
        partySymbol
      } = req.body;
     


    const data = {
      _electionId: parseInt(electionId),
      _constituencyId: parseInt(constituencyId),
      _name: name,
      _partyName: partyName,
      _partyShortcutName: shortName,
      _partyFlagUrl: partySymbol,
      _photoUrl: "",
    };


      const response = await write_contract.registerCandidate(
        data._electionId,
        data._constituencyId,
        data._name,
        data._partyName,
        data._partyShortcutName,
        data._partyFlagUrl,
        data._photoUrl
      );
      onSuccessResponse(res, response);
    } catch (err) {
      onErrorResponse(res, err);
    }
  }
}
