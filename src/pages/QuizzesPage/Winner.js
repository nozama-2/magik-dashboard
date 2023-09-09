import { Button } from "../../components/ui/button";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./winner.css";

const Tag = ({ name }) => {
  const tagsColorMap = {
    frontend: "#A8D1D1",
    backend: "#FFCBCB",
    ML: "#FDD97C",
  };
  return (
    <div className="tag" style={{ backgroundColor: "#FDD97C" }}>
      {name}
    </div>
  );
};

const WinnersList = ({}) => {
  const winners = [
    {
      name: "John",
      tags: ["2000"],
      // imageUrl: "aaaaaaaaaaaaaaaaaaaaa",
    },
    {
      name: "Amanda",
      tags: ["1940"],
      // imageUrl: "aaaaaaaaaaaaaaaaaaaaa",
    },
    {
      name: "Sally",
      tags: ["1890"],
      // imageUrl: "aaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  return (
    <div className="winners-list">
      {winners.map((winner, index) => (
        <div className="winner-item-container">
          <div className="winner-item">
            <p className="winner-name">{winner.name}</p>
            <div className="tags-container">
              {winner.tags.map((tag) => (
                <Tag name={tag} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Winner = ({}) => {
  const { winner } = useParams();

  return (
    <div className="flex-col md:flex quizzes-page-container">
      {/* Winner Area */}
      <div className="flex flex-col h-full space-y-4 p-8 pt-6 items-center justify-center">
        <h2
          className="text-3xl font-bold mb-10"
          style={{ color: "#E11D48", fontSize: "64px" }}
        >
          Winner 🏆
        </h2>
        <WinnersList />
      </div>
    </div>
  );
};

export default Winner;
