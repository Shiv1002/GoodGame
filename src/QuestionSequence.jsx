import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Wrap, WrapItem, Button } from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";

export default function QuestionSequence({ GKQ }) {
  const [index, setIndex] = useState(0);
  const [userAns, setAns] = useState(Array(GKQ.length).fill(""));
  const nav = useNavigate();
  useEffect(() => {
    console.log("changed ans");
    console.log(userAns);
  }, [userAns]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="QuestionSequenceContainer"
      >
        <div className="QuestionSequence">
          <QuestionCard
            q={GKQ[index]}
            index={index + 1}
            userAns={userAns}
            setAns={setAns}
            key={index}
          />
          <div className="UserActions">
            <Button
              colorScheme="teal"
              onClick={() => setIndex((i) => i - 1)}
              isDisabled={index == 0}
            >
              Back
            </Button>

            {index == GKQ.length - 1 ? (
              // reached last question
              <Button
                colorScheme="teal"
                onClick={() => {
                  nav("/Score", { state: userAns });
                }}
                isDisabled={!userAns[index]}
              >
                Complete
              </Button>
            ) : (
              <>
                {/* next question */}
                <Button
                  colorScheme="teal"
                  isDisabled={!userAns[index]}
                  onClick={() => setIndex((i) => i + 1)}
                >
                  Next
                </Button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
