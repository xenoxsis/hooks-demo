import sha256 from "crypto-js/sha256";

const NUMBER_OF_LEADING_ZEROS = 4;

const getHash = (nonce: number, data: string): string => {
  return sha256(nonce + data).toString();
};

const mine = async (data: string) => {
  const result = await new Promise<number>((resolve) => {
    setTimeout(() => {
      let nonce = 0;
      for (let i = 1; i <= 800000; i++) {
        let hash = getHash(i, data);
        if (isValid(hash)) {
          nonce = i;
          break;
        }
      }
      resolve(nonce);
    }, 100);
  });

  return result;
};

const isValid = (hash: string) => {
  return (
    hash.substr(0, NUMBER_OF_LEADING_ZEROS) ===
    new Array(NUMBER_OF_LEADING_ZEROS + 1).join("0")
  );
};

const Crypto = {
  getHash,
  mine,
  isValid,
};

export default Crypto;
