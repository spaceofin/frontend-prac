declare module "react-image-filter" {
  import { Component } from "react";

  interface ImageFilterProps {
    image: string;
    filter: string;
    colorOne?: number[];
    colorTwo?: number[];
    style?: React.CSSProperties;
  }

  export default class ImageFilter extends Component<ImageFilterProps> {}
}

declare module "*.png" {
  const value: string;
  export default value;
}
