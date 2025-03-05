import { convertCB58toBytes } from "./nodeid";
import { verifyPop } from "./bls";

const main = async () => {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "convertNodeId":
      if (args[1]) {
        const nodeId = args[1];
        const bytes = convertCB58toBytes(nodeId);
        console.log(`Converted Node ID: ${bytes}`);
      } else {
        console.log("Please provide a Node ID to convert.");
      }
      break;
    case "verifyPop":
      if (args[1] && args[2]) {
        const pk = args[1];
        const pop = args[2];
        const result = verifyPop(pk, pop);
        console.log(`Proof of possession verified: ${result}`);
      } else {
        console.log(
          "Please provide a public key and proof of possession to verify."
        );
      }
      break;
    default:
      console.log("Unknown command");
  }
};

main();
