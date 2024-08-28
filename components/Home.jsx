import React from "react";
import Image from "next/legacy/image";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HandymanIcon from "@mui/icons-material/Handyman";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Footer from "./Footer";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
        }}
      >
        <Typography
          sx={{
            paddingBottom: "20px",
            fontWeight: "700",
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          Welcome to Our Resume Builder Web App!
        </Typography>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "400", textAlign: "center" }}
        >
          Creating a professional resume has never been easier.
           Our Resume Builder Web App is designed to take the hassle out of crafting the perfect resume, providing you with all the tools you need to impress potential employers and land your dream job.
        </Typography>
        
       
        
        <Link href="/CVBuilder" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            component="span"
            sx={{
              marginTop: "25px",
              background: "#505052",
              ":hover": {
                background: "#797979",
              },
            }}
          >
            <Typography>Build your Resume</Typography>
          </Button>
        </Link>
      </Box>
      <Box
        style={{
          background: "#e6ecf7",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "200px",
          flexWrap: "wrap",
          position: "relative",
          padding: "100px",
        }}
      >
        <Image
          src="/Images/sample.jpg"
          alt="cv"
          priority
          width={750}
          height={750}
          layout="intrinsic"
        />
        <Box
          style={{
            padding: "20px",
            marginLeft: "50px",
            fontSize: "25px",
            fontFamily: "Segoe UI",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
              width: "100%",
            }}
          >
            <HandymanIcon
              style={{ width: "32px", height: "32px", opacity: "0.6" }}
            />
            <Typography
              style={{
                marginLeft: "15px",
                fontWeight: "600",
                fontSize: "25px",
                textAlign: "left",
              }}
            >
              Build your resume easily with step by step
            </Typography>
          </Box>
          <Box
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <PictureAsPdfIcon
              style={{ width: "32px", height: "32px", opacity: "0.6" }}
            />
            <Typography
              style={{
                marginLeft: "19px",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              Live PDF Viewer
            </Typography>
          </Box>
          <Box
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <DownloadOutlinedIcon
              style={{ width: "32px", height: "32px", opacity: "0.6" }}
            />
            <Typography
              style={{
                marginLeft: "15px",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              Free Download
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}
