import "babel-polyfill";

// @ts-ignore
import Transport from "@ledgerhq/hw-transport-node-hid";
// @ts-ignore
import AppEth from "@ledgerhq/hw-app-eth";

async function example() {
  const transport = await Transport.open();
  console.log(transport);
  const eth = new AppEth(transport);
  const result = await eth.getAddress("44'/60'/0'/0");
  return result;
}

example().then(
  result => {
    console.log(result);
  },
  e => {
    console.error(e);
  }
);
