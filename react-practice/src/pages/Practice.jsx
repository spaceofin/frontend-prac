import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #feb47b, #ff7e5f);
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 20px;
  width: 1000px;
  height: 1000px;
  background-color: rgba(200, 200, 200, 0.5);
  // background-color: white;
  border-radius: 10px;
`;

const LayerA = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px;
  z-index: 2;
`;

const LayerB = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  display: flex;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 180, 51, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px;
  z-index: 1;
`;

const LayerC = styled.div`
  position: absolute;
  top: 0;
  left: 500px;
  display: flex;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 123, 44, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px;
  z-index: 0;
`;

const LayerD = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-color: rgba(85, 167, 255, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px;
  z-index: -1;
`;

const LayerE = styled.div`
  position: absolute;
  top: 200px;
  left: 500px;
  width: 300px;
  height: 300px;
  background-color: rgba(227, 80, 8, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px;
  z-index: 0;
`;

export const Practice = () => {
  return (
    <>
      <Background />
      <Container>
        Practice Page
        <LayerA>
          <LayerD />
        </LayerA>
        <LayerB />
        <LayerC />
        <LayerE />
      </Container>
    </>
  );
};
