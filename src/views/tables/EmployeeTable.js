import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import EmpTableContent from "./EmpTableContent";


const BasicTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">Employee Table</Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <EmpTableContent />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTable;
