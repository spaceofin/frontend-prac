import "@fontsource/material-icons";
import "@fontsource/material-icons-round";

export const Icon = ({ name, style }) => {
  return (
    <div>
      <span className="material-icons" style={style}>
        {name}
      </span>
    </div>
  );
};
