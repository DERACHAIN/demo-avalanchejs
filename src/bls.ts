import { bls as BLS } from "@avalabs/avalanchejs";
import { hexToBuffer } from "@avalabs/avalanchejs/dist/utils";

export function verifyPop(pkStr: string, popStr: string): boolean {
  const pk = BLS.publicKeyFromBytes(pkStr);
  console.log("Public key: ", pk);

  const pop = BLS.signatureFromBytes(hexToBuffer(popStr));
  console.log("Proof of possession: ", pop);

  const msg = BLS.publicKeyToBytes(pk);
  console.log("Message: ", msg);

  return BLS.verifyProofOfPossession(pk, pop, msg);
}
