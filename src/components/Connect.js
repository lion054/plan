import React, { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import {ConnectModal} from "./Modal";
// import {CommitModal} from "./Modal";
// import {ClaimModal} from "./Modal";
// import {FailedModal} from "./Modal";

function Connect() {

  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  const [unisatInstalled, setUnisatInstalled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [publickey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0,
  });

  const [network, setNetwork] = useState("livenet");

  const getBasicInfo = async () => {
    const unisat = window.unisat;
    const [address] = await unisat.getAccounts();
    setAddress(address);

    const publicKey = await unisat.getPublicKey();
    setPublicKey(publicKey);

    const balance = await unisat.getBalance();
    setBalance(balance);

    const network = await unisat.getNetwork();
    setNetwork(network);
  };

  const selfRef = useRef({
    accounts: [],
  });
  const self = selfRef.current;
  const handleAccountsChanged = (_accounts) => {
    if (self.accounts[0] === _accounts[0]) {
      // prevent from triggering twice
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setAccounts(_accounts);
      setConnected(true);

      setAddress(_accounts[0]);

      getBasicInfo();
    } else {
      setConnected(false);
    }
  };

  const handleNetworkChanged = (network) => {
    setNetwork(network);
    getBasicInfo();
  };

  useEffect(() => {
    const unisat = window.unisat;
    if (unisat) {
      setUnisatInstalled(true);
    } else {
      return;
    }
    unisat.getAccounts().then((accounts) => {
      handleAccountsChanged(accounts);
    });

    unisat.on("accountsChanged", handleAccountsChanged);
    unisat.on("networkChanged", handleNetworkChanged);

    return () => {
      unisat.removeListener("accountsChanged", handleAccountsChanged);
      unisat.removeListener("networkChanged", handleNetworkChanged);
    }
  });


  if (!unisatInstalled) {
    return (

      <>
        <ConnectModal setIsOpen={setIsOpen} isOpen={isOpen} />

        <div>
          <button onClick={openModal} className="hover:outline-none  focus:outline-none py-1 px-2 text-sm rounded-md bg-[#f38010] border-none outline-none text-white ">
            Install Unisat Wallet
          </button>
        </div>
      </>
    );
  }

  const unisat = window.unisat;
  const shortenedAddress = address.slice(0, 5) + "..." + address.slice(-5);

  return (
    <div className="App">
      <header className="App-header">
        {connected ? (
          <>
            <button onClick={openModal} className="hover:outline-none focus:outline-none   py-1 px-2 text-sm rounded-md bg-transparent border-[#f38010] border-[1px] outline-none text-[#f38010] ">
              {shortenedAddress}
            </button>
          </>
        ) : (
          <div>
            <button
              onClick={async () => {
                const result = await unisat.requestAccounts();
                handleAccountsChanged(result);
              }}
              className="hover:outline-none focus:outline-none  py-1 px-2 text-sm rounded-md bg-[#f38010] border-none outline-none text-white ">
              Connect Wallet
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Connect;
