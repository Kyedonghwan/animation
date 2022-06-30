import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg,rgb(238, 0, 153), rgb(221, 0, 238))
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.06);
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  top: 100px;
`

const Svg = styled(motion.svg)`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  height: 30px;
  margin-top: 350px;
  
  button {
    &:last-child {
      margin-left: 30px;
    }

    border-radius: 5px;
    background-color: white;
    border: 0;
  }
`

const boxVariant = {
  invisible: (back:boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  visible: (back: boolean) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1
    }
  }),
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1
    }
  }),
}



function App() {

  const [showing, setShowing] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {setShowing(prev=>prev===10? 10: prev+1);
    setBack(false);
  };

  const prevPlease = () => {setShowing(prev=>prev===1? 1 : prev-1);
    setBack(true);
  }

  return (
    <>
      <Wrapper>
        <AnimatePresence custom={back}>
          <Box custom={back} variants={boxVariant} initial="invisible" exit="exit" animate="visible" key={showing}>{showing}</Box>
          <ButtonWrap>
            <button onClick={prevPlease}>Prev</button> 
            <button onClick={nextPlease}>Next</button>
          </ButtonWrap>
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default App;
