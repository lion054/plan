import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import "sorttable";
import HomeSearch from "./HomeSearch";

function CoinTable() {

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.coinranking.com/v2/coins?tags[]=brc-20")
      .then((response) => {
        setCoins(response.data.data.coins);
        setIsLoading(false);
        const totalMarketCap = response.data.data.stats.totalMarketCap;
        setTotalMarketCap(totalMarketCap);
        const totalCoins = response.data.data.stats.totalCoins;
        setTotalCoins(totalCoins);
        console.log(totalCoins);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.sorttable.makeSortable(document.querySelector('.sortable'));
    }
  }, [isLoading]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formattedTotalMarketCap = parseFloat(totalMarketCap).toLocaleString("en-US");
  const formattedTotalCoins = totalCoins.toLocaleString();

  if (isLoading) {
    return (
      <section className="yrsection">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      <section className="mb-5 yrsection pt-28">
        <div className="row ">
          <div className="col-lg-12">
            <div
              id="mtotal"
              className="mb-5 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <span className="brc-20-tokens"> BRC-20 Tokens </span>
                <span className="text-white total" id="total">
                  (<span className="text-primary h4 mb-4 total">{formattedTotalCoins}</span>
                  <span className="text-white total"> total)</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8" id="banner">
            <img
              className="banner"
              alt="banner"
              src="images/rectangle-22828@2x.png"
            />
          </div>
          <div className="col-lg-4">
            <img
              alt="icon"
              id="image-3121-icon"
              className="image-3121-icon"
              src="images/image-3121@2x.png"
            />
            <br />
            <div className="total-market-cap-container">
              <span className="span">Total Market Cap&nbsp;</span>
              <span className="span1">${formattedTotalMarketCap}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5 yrsection">
       <HomeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

        <table className="display sortable" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col" data-sort="int">#</th>
              <th scope="col" data-sort="string" style={{ width: "20%" }}>
                Name
              </th>
              <th scope="col" data-sort="float]">Price</th>
              <th scope="col" data-sort="float">24h %</th>
              <th scope="col" data-sort="int" style={{ width: "20%" }}>
                Market Cap{" "}
              </th>
              <th scope="col" data-sort="int">Volume(24h)</th>
              <th scope="col" data-sort="float">btcPrice</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <tr data-label="#" key={coin.uuid}>
                <td data-label="#">{index + 1}</td>
                <td data-label="Name">
                  <img
                    alt="coin icons"
                    style={{ width: 48, height: 48, display: "inline" }}
                    src={coin.iconUrl}
                  />{" "}<strong>{coin.name}</strong>
                </td>
                <td data-label="Price">$
                  {coin.price ? Number(coin.price).toFixed(12) : " --"}
                </td>
                <td data-label="24h %"
                  className={coin.change >= 0 ? "green" : "red"}
                >
                  {coin.change  ?? 0}%
                </td>
                <td data-label="Market Cap">
                  ${coin.marketCap ? Number(coin.marketCap).toLocaleString("en-US") : " --"}
                </td>
                <td data-label="Volume(24h)">
                  ${coin["24hVolume"] ? Number(coin["24hVolume"]).toLocaleString("en-US") : " --"}
                </td>
                <td data-label="btcPrice">
                  {/* ${(parseFloat(coin.btcPrice) ?? 0).toFixed(12)} */}
                  ${coin.btcPrice ? Number(coin.btcPrice).toFixed(12) : " --"}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th style={{ width: "20%" }}>
                Market Cap{" "}
              </th>
              <th>Volume(24h)</th>
              <th>btcPrice</th>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
}

export default CoinTable;
