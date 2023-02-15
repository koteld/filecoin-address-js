const {
  ethAddressFromDelegated,
  ethAddressFromID,
  decode,
  Protocol
} = require("@glif/filecoin-address")

const main = () => {
  const addressString = `${process.argv[2]}`;
  if (!addressString) {
    console.error('Pass Filecoin address as a parameter');
    process.exit(1);
  }
  const addressObject = decode(addressString);
  const protocol = addressObject.protocol();
  if (protocol === Protocol.DELEGATED) {
    console.log(ethAddressFromDelegated(addressString));
  } else {
    console.log(ethAddressFromID(addressString));
  }
}

main()
