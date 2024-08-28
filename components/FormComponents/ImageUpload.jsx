import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "../../pages/CVBuilder";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

export default function Practice() {
  const getData = useContext(DataContext);
  const [imageData, setImageData] = getData.image;
  const [imageUrlData, setImageUrlData] = getData.imageUrls;
  useEffect(() => {
    if (imageData.length < 1) return;
    const newImageUrls = [];
    imageData.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrlData(newImageUrls);
  }, [imageData, setImageUrlData]);
  const imageHandler = (e) => {
    setImageData([...e.target.files]);
  };
  const deleteImage = () => {
    setImageUrlData([]);
    setImageData([]);
  };
  const imageLoader = () => {
    return imageUrlData;
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <Typography
        sx={{
          width: "33%",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Photo
      </Typography>
      {imageUrlData.length > 0 ? (
        <div style={{ display: "flex" }}>
          <Image
            loader={imageLoader}
            src="/Images/resume_icon.png"
            width={90}
            height={90}
            alt="error"
            style={{ objectFit: "contain" }}
          />
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              accept="image/png, image/jpg "
              onChange={imageHandler}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button color="primary" component="span">
                <EditIcon />
              </Button>
              <Button onClick={deleteImage}>
                <DeleteOutlineOutlinedIcon />
              </Button>
            </div>
          </label>
        </div>
      ) : (
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={imageHandler}
          />

          <Button color="primary" variant="contained" component="span">
            Upload
          </Button>
        </label>
      )}
    </div>
  );
}
