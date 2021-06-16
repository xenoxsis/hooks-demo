import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "../../layout/ReducerDemo.scss";
import Crypto from "../../reducer/crypto";

const ReducerDemo = () => {
  const [nonce, setNonce] = useState(88484);
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let hash = Crypto.getHash(nonce, data);
    setHash(hash);
    setIsValid(Crypto.isValid(hash));
  }, [nonce, data, isValid]);

  const handleMining = async () => {
    setIsLoading(true);
    const nonce = await Crypto.mine(data);
    setNonce(nonce);
    setIsLoading(false);
  };

  return (
    <div
      className={classNames("block", {
        invalid: !isValid,
      })}
    >
      <div className="label">Block #</div>
      <div className="nonce">1</div>
      <div className="label">Nonce:</div>
      <div className="nonce">
        <input
          value={nonce}
          onChange={(e) => setNonce(Number(e.target.value))}
          type="number"
        />
      </div>
      <div className="label">Data:</div>
      <div className="hash">
        <textarea value={data} onChange={(e) => setData(e.target.value)} />
      </div>
      <div className="label">Hash:</div>
      <div className="hash">
        <input value={hash} readOnly />
      </div>
      <div className="label">&nbsp;</div>
      <div className="mine">
        <button
          onClick={() => {
            handleMining();
          }}
        >
          {isLoading ? "Loading..." : "Mine"}
        </button>
      </div>
    </div>
  );
};

export default ReducerDemo;
