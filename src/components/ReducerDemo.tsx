import classNames from "classnames";
import { useReducer } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import "./layout/ReducerDemo.scss";
import Crypto from "./reducer/crypto";

interface State {
  nonce: number;
  data: string;
  hash: string;
  isValid: boolean;
  isLoading: boolean;
}

type ActionType =
  | "SET_NONCE"
  | "SET_DATA"
  | "SET_LOADING"
  | "MINING_SUCCESSFUL";

const reducer = (state: State, action: { type: ActionType; payload?: any }) => {
  let hash = "";
  switch (action.type) {
    case "SET_NONCE":
      hash = Crypto.getHash(action.payload, state.data);

      return {
        ...state,
        nonce: action.payload,
        hash: hash,
        isValid: Crypto.isValid(hash),
      };
    case "SET_DATA":
      hash = Crypto.getHash(state.nonce, action.payload);

      return {
        ...state,
        data: action.payload,
        hash: hash,
        isValid: Crypto.isValid(hash),
      };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "MINING_SUCCESSFUL":
      hash = Crypto.getHash(action.payload, state.data);

      return {
        ...state,
        nonce: action.payload,
        hash: hash,
        isLoading: false,
        isValid: Crypto.isValid(hash),
      };
    default:
      return state;
  }
};

const initialState: State = {
  nonce: 88484,
  data: "",
  hash: Crypto.getHash(88484, ""),
  isValid: true,
  isLoading: false,
};

const ReducerDemo = () => {
  useDocumentTitle("useReducer Demo");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMining = async () => {
    dispatch({ type: "SET_LOADING" });
    const nonce = await Crypto.mine(state.data);
    dispatch({ type: "MINING_SUCCESSFUL", payload: nonce });
  };

  return (
    <div
      className={classNames("block", {
        invalid: !state.isValid,
      })}
    >
      <div className="label">Block #</div>
      <div className="nonce">1</div>
      <div className="label">Nonce:</div>
      <div className="nonce">
        <input
          value={state.nonce}
          onChange={(e) =>
            dispatch({ type: "SET_NONCE", payload: Number(e.target.value) })
          }
          type="number"
        />
      </div>
      <div className="label">Data:</div>
      <div className="hash">
        <textarea
          value={state.data}
          onChange={(e) =>
            dispatch({ type: "SET_DATA", payload: e.target.value })
          }
        />
      </div>
      <div className="label">Hash:</div>
      <div className="hash">
        <input value={state.hash} readOnly />
      </div>
      <div className="label">&nbsp;</div>
      <div className="mine">
        <button
          onClick={() => {
            handleMining();
          }}
        >
          {state.isLoading ? "Loading..." : "Mine"}
        </button>
      </div>
    </div>
  );
};

export default ReducerDemo;
