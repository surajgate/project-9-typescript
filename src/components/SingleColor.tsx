import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Clipboard from "clipboard";

type ColorProps = {
  rgb: number[];
  weight: number;
  index: number;
  hexColor: string;
};

const SingleColor = ({ rgb, weight, index, hexColor }: ColorProps) => {
  const bcg = rgb.join(",");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const clipboard = new Clipboard(".copy", {
      text: () => "#" + hexColor,
    });
    clipboard.on("success", () => {
       setIsCopied(true);
      clipboard.destroy();
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
    clipboard.on("error", () => {
      clipboard.destroy();
    });
    //  clipboard.onClick({ target: { className: "copy" } });
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: `rgb(${bcg})`,
          height: "10rem",
          color: `${index > 10 ? "white" : "black"}`,
        }}
      >
        <Typography sx={{ alignItems: "center", p: 2 }} paragraph>
          {weight}%
        </Typography>
        <Box onClick={handleCopy}>
          <Typography className="copy" paragraph>
            #{hexColor}
          </Typography>
          {isCopied && (
            <Typography variant="caption">Copied to clipboard!</Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default SingleColor;
