import { Button } from "../../components/ui/button";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Winner = ({}) => {
  const { winner } = useParams();

  return (
    <div className="flex-col md:flex quizzes-page-container">
      <div className="flex space-y-4 p-8 pt-6 flex-col items-left">
        {/* Winner Area */}
        <div className="flex space-y-4 p-8 pt-6 flex-col items-center">
          <h2>Winner</h2>
          <p>{winner}</p>
        </div>
      </div>
    </div>
  );
};

export default Winner;
