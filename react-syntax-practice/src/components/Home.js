import styled from "styled-components";
import { lazy, Suspense, useState } from "react";
import { Loading } from "./";

const PreviewCard = lazy(() => delayForDemo(import("./PreviewCard.js")));

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return promise;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ff9c00;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

const Label = styled.div`
  padding-left: 40px;
  padding-bottom: 20px;
  font-size: 22px;
`;

const CheckBoxInput = styled.input`
  width: 16px;
  height: 16px;
  margin: 0px 8px;
`;

export const Home = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Container>
      <Label>
        <CheckBoxInput
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </Label>
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <PreviewCard />
        </Suspense>
      )}
    </Container>
  );
};
