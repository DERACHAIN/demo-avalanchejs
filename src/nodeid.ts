import { NodeId } from "@avalabs/avalanchejs";

export function convertCB58toBytes(nodeID: string) {
  let node = NodeId.fromString(nodeID);
  return node.toBytes();
}
