import React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DataContext } from "../../pages/CVBuilder";

export default function Hobbies({
  deleteCustomSection,
  sectionId,
}) {
  const getData = useContext(DataContext);
  const [stateValue, setStateValue] = getData.value10;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStateValue({ [name]: value });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      <Grid container item md={6}>
        <Grid container item md={4}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              paddingBottom: "10px",
            }}
          >
            Hobbies
          </Typography>
          <DeleteOutlineOutlinedIcon
            sx={{
              marginTop: "7px",
              marginLeft: "5px",
              fontSize: "18px",
              color: "white",

              "&:hover": {
                color: "#2196f3",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              deleteCustomSection(sectionId);
              setStateValue({ hobbies: "" });
            }}
          />
        </Grid>
      </Grid>

      <Grid container columns={14}>
        <Grid item xs={12} md={13}>
          <TextField
            id="outlined-basic"
            label="What do you like?"
            placeholder="e.g. Painting,Skydiving,Gaming"
            type="text"
            name="hobbies"
            value={stateValue.hobbies}
            variant="filled"
            sx={{
              width: "100%",
              background: "#e7eaf4",
              borderRadius: "5px",
            }}
            InputLabelProps={{
              sx: {
                color: "#828ba2",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
