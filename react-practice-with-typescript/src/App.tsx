import styled from "styled-components";

// import { DigitalClock } from "components/DigitalClock";
// import { MousePosition } from "components/MousePosition";
// import { Calculator } from "components/Calculator";
// import { Squares } from "components/Squares";
// import { Circles } from "components/Cricles";
// import { Icons } from "components/Icons";
// import { IconAdder } from "components/IconAdder";
// import { DogsSquares } from "components/DogsSquares";
// import { ProfileGenerator } from "components/ProfileGenerator";
// import { DogFriends } from "components/DogFriends";
// import { ProfilesProvider } from "contexts/ProfilesContext";
import { IamgeUploader } from "components/ImageUploader";
import { ImageCropper } from "components/ImageCropper";
import { ImageResizer } from "components/ImageResizer";

// import { memo } from "react";

const Container = styled.div`
  padding: 5px;
  // background-color: rgba(4, 7, 32);
`;

// const MemoizedCircles = memo(Circles);
// const MemoizedSquares = memo(Squares);
// const MemoizedMousePosition = memo(MousePosition);

export default function App() {
  return (
    <Container>
      <IamgeUploader />
      <ImageCropper />
      <ImageResizer />
    </Container>
  );
}
