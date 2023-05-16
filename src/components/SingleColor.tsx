import { Container, Typography } from "@mui/material";
import { useState } from "react";

type ColorProps = {
  rgb: number[];
  weight: number;
  index: number;
  hexColor: string;
};

const SingleColor = ({ rgb, weight, index, hexColor }: ColorProps) => {
  const [alert, setAlert] = useState<boolean>(false);
  const bcg = rgb.join(",");

  return (
    <>
      <Container
        sx={{
          backgroundColor: `rgb(${bcg})`,
          height: "10rem",
          color : `${index > 10 ? 'white' : 'black'}`
        }}
      >
        <Typography sx={{ alignItems: "center", p: 2 }} paragraph>
          {weight}%
        </Typography>
        <Typography paragraph>#{hexColor}</Typography>
      </Container>
    </>
  );
};

export default SingleColor;
