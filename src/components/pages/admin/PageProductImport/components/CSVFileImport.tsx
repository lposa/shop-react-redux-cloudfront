import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("No file provided. Please provide a file.");
      return;
    }

    try {
      const authorization_token = localStorage.getItem("authorization_token");

      if (!authorization_token) {
        alert("Authorization token is missing. Please login first.");
        return;
      }

      const response = await axios({
        method: "GET",
        url,
        params: {
          fileName: encodeURIComponent(file.name),
        },
        headers: {
          Authorization: `Basic ${authorization_token}`,
        },
      });

      console.log("File to upload: ", file.name);
      console.log("Uploading to: ", response.data);

      const result = await fetch(response.data.signedUrl, {
        method: "PUT",
        body: file,
      });

      console.log("Result: ", result);

      setFile(undefined);
      alert("Successfully uploaded");
    } catch (error) {
      console.error("Error during file upload:", error);
      alert(
        `Error during file upload: "Something went wrong!. Please try again.`
      );
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
