import React, { useState } from "react";
import { quotes } from "../assets/quotes";

const Card = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length) - 1;
    setQuote(quotes[randomNumber]);
  };

  return (
    <div
      id="quote-box"
      className="card"
      style={{ minWidth: " 26rem", maxWidth: "31rem" }}
    >
      <div className="card-body">
        <h5 id="author" className="card-title">
          {quote ? quote.author : ""}
        </h5>
        <h6 className="card-subtitle mb-2 text-black-50">
          {quote && quote.profession}
        </h6>
        <p id="text" className="card-text">
          {quote && quote.quote}
        </p>
        <div className="d-flex justify-content-between">
          <button
            onClick={(e) => handleClick()}
            id="new-quote"
            className="btn btn-outline-primary"
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
