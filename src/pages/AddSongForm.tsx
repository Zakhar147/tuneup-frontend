import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

interface FormValues {
  title: string;
  artist: string;
  file: File | null;
}

const AddSongForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      artist: "",
      file: null,
    },
    onSubmit: async (values) => {
      if (!values.file) {
        setMessage("Please select a file.");
        return;
      }

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("artist", values.artist);
      formData.append("file", values.file);

      try {
        const response = await axios.post(
          "http://localhost:8080/api/songs",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setMessage("Song created successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Upload error:", error);
        setMessage("Failed to create song.");
      }
    },
  });

  return (
    <div>
      <h2>Create New Song</h2>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            name="artist"
            type="text"
            value={formik.values.artist}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="file">Tab File (.gp):</label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".gp,.gp3,.gp4,.gp5,.gpx"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0] || null;
              formik.setFieldValue("file", file);
            }}
            required
          />
        </div>

        <button type="submit">Create Song</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddSongForm;