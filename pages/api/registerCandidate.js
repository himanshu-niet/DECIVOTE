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
        partyShortcutName,
        partyFlagUrl,
        photoUrl,
      } = req.body;

      if (
        (!electionId,
        !constituencyId,
        !name,
        !partyName,
        !partyShortcutName,
        !partyFlagUrl,
        !photoUrl)
      )
        throw "Bad Request";

    const  data = {
        _electionId: parseInt(electionId),
        _constituencyId: parseInt(constituencyId),
        _name: name,
        _partyName: partyName,
        _partyShortcutName: partyShortcutName,
        _partyFlagUrl: partyFlagUrl,
        _photoUrl: photoUrl,
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
