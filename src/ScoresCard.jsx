import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./ScoreCard.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function ScoreCard({ GKQ }) {
  const p = useLocation();
  const score =
    p.state.reduce((score, curr, index) => {
      if (GKQ[index].correctAnswer == curr) score++;
      return score;
    }, 0) | 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={style.container}
      >
        <div className={style.scoreCard}>
          <div
            className={style.score}
            style={
              score >= 0 && score < 4
                ? {
                    color: "red",
                  }
                : score >= 4 && score < 8
                ? {
                    color: "orange",
                  }
                : score >= 8
                ? {
                    color: "greenyellow",
                  }
                : {}
            }
          >
            {score}
          </div>
          <div className={style.total}>/10</div>
        </div>

        <a className={style.restart} href="/">
          Restart
        </a>

        <div className={style.summary}>
          {p.state.map((ele, ind) => (
            <div key={ind}>
              <div className={style.questionCard} key={ind}>
                {/* 
            correctAnswer : {GKQ[ind].correctAnswer}
            Your Ans : {ele} */}
                <div className={style.question}>
                  {ind + 1}. {GKQ[ind].question}
                </div>
                <div className={style.answer}>
                  <div>
                    <div>
                      Your answer :{" "}
                      <span
                        style={
                          ele == GKQ[ind].correctAnswer
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {ele}
                      </span>{" "}
                    </div>
                    <div>
                      Correct answer :{" "}
                      <span style={{ color: "green" }}>
                        {GKQ[ind].correctAnswer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
