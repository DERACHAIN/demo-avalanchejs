import { bls as BLS, utils } from "@avalabs/avalanchejs";

export function verifyPop(pkStr: string, popStr: string): boolean {
  pkStr = pkStr.startsWith("0x") ? pkStr.slice(2) : pkStr;
  popStr = popStr.startsWith("0x") ? popStr.slice(2) : popStr;

  try {
    const pk = BLS.publicKeyFromBytes(pkStr);
    console.log("Public key: ", pk);

    const pop = BLS.signatureFromBytes(utils.hexToBuffer(popStr));
    console.log("Proof of possession: ", pop);

    const msg = BLS.publicKeyToBytes(pk);
    console.log("Message: ", msg);

    return BLS.verifyProofOfPossession(pk, pop, msg);
  } catch (err) {
    console.error(err);
    return false;
  }
}
