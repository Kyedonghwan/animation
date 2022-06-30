import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153), rgb(221, 0, 238))
`

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.06);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child, div:last-child {
    grid-column: span 2;
  }
`

const Svg = styled(motion.svg)`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  const [id, setId] = useState<null | string>(null);

  return (
    <>
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map( n => <Box onClick={() => setId(n+"")} layoutId={n+""} />)}
        </Grid>
        <AnimatePresence>
          {id ? <Overlay onClick={() => setId(null)} initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}}>
            <Box layoutId={id} style={{width: 400, height: 200}} />
          </Overlay> : null}
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default App;
