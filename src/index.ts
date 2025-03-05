import { convertCB58toBytes } from "./nodeid";

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
    default:
      console.log("Unknown command");
  }
};

main();
