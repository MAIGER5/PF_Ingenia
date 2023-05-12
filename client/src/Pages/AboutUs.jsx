import { Box, Typography } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <Box
        paddingTop={8}
        paddingBottom={12}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {" "}
        <Box
          sx={{
            backgroundColor: "grey",
            padding: "10px",
            flexGrow: 1,
            flexBasis: "100%",
          }}
        ></Box>
        <Box
          paddingRight={20}
          paddingBottom={20}
          paddingTop={5}
          paddingLeft={2}
        >
          <Box>
            <Typography
              variant="h1"
              align="left"
              sx={{ fontSize: "30px", padding: "20px" }}
            >
              Ingenia: El proyecto
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{ fontSize: "20px", padding: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam fugit odit eum nulla explicabo corrupti maiores, culpa
              voluptatem eos harum sapiente. Numquam quibusdam rerum aperiam
              quasi dolor eveniet placeat. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ullam architecto, vel nam commodi
              iusto labore a quisquam. Quod, illum dolorem tenetur velit tempore
              necessitatibus sapiente deserunt atque voluptas nesciunt expedita!
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              align="left"
              sx={{ fontSize: "30px", padding: "20px" }}
            >
              Nosotros
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{ fontSize: "20px", padding: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam fugit odit eum nulla explicabo corrupti maiores, culpa
              voluptatem eos harum sapiente. Numquam quibusdam rerum aperiam
              quasi dolor eveniet placeat.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
