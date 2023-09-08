import React, { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";

const QuizShow = ({}) => {
  const { quizid, timer } = useParams();
  const navigate = useNavigate();

  const s = useStore().getState();
  const questions = s.quizzes[quizid].questions;

  const [currQ, setCurrQ] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showQn, setShowQn] = useState(true);

  const nextQ = () => {
    if (currQ === questions.length - 1) {
      console.log("dont");
      navigate("/Winner/john");
    } else {
      setCurrQ(currQ + 1);
    }
  };

  useEffect(() => {
    setShowQn(false);
    setProgress(0);

    let t;
    let t2 = setTimeout(() => {
      const startTime = new Date().getTime();
      setShowQn(true);

      t = setInterval(() => {
        const now = new Date().valueOf();
        const currProg = Math.min((now - startTime) / (timer * 10), 100);

        setProgress(currProg);
      }, 50);
    }, 2000);

    return () => {
      clearInterval(t);
      clearTimeout(t2);
    };
  }, [currQ]);

  return (
    <div className="flex-col md:flex quizzes-page-container">
      <div className="flex space-y-4 p-8 pt-6 flex-col items-left">
        <p className="justify-self-start text-left text-lg font-semibold">
          Question {currQ + 1} / {questions.length}
        </p>

        {/* Question Area */}
        <div className="flex space-y-4 p-8 pt-6 flex-col items-center">
          {showQn ? (
            <div className="flex flex-col w-fit">
              <div>
                <p className="text-2xl font-semibold">
                  {questions[currQ].questionTitle}
                </p>

                <img
                  src={questions[currQ].imageUrl}
                  width="600"
                  height="400"
                  alt="none"
                />
              </div>

              <p className="mb-5 text-xl font-normal">
                {questions[currQ].questionDescription}
              </p>

              <div className="justify-self-end self-end">
                <Button onClick={nextQ} className="w-20">
                  Next
                </Button>
              </div>
            </div>
          ) : (
            <div>Next question awaits... </div>
          )}
        </div>
        {/* Progress Bar area */}
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default QuizShow;
