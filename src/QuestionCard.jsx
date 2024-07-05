import React, { useState } from "react";
import style from "./QuestionCard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrap,
  WrapItem,
  Button,
  VStack,
  Box,
  StackDivider,
} from "@chakra-ui/react";
export default function QuestionCard({ q, index, userAns, setAns }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100px" }}
        className={style.card}
      >
        <header>
          {index}. {q.question}
        </header>
        <Box display="flex" justifyContent="center">
          <Wrap spacing="4px">
            {q.options.map((option, ind) => {
              return (
                <WrapItem key={ind}>
                  <Button
                    colorScheme={
                      userAns[index - 1] === option ? "green" : "blue"
                    }
                    onClick={() => {
                      setAns((ua) => {
                        if (ua[index - 1] === option) return ua;
                        let newArr = [...ua];
                        newArr[index - 1] = option;
                        return newArr;
                      });
                    }}
                  >
                    {option}
                  </Button>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
