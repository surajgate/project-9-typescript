import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", m: 2, alignItems: "center" }}>
          <Typography sx={{ m: 2 }} variant="h5">
            Color Generator
          </Typography>
          <TextField
            variant="outlined"
            label="Color"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          ></TextField>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 16, md: 20 }}>
          {list.map((color, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexColor={color.hex}
                ></SingleColor>
              </Grid>
              
            );

          })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
