import { useState } from "react";
import { Upload, Heart, Eye } from "react-feather";
import { uploadVideoMetadata } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const likes = 120;
  const views = 5000;

  // Validation and form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      setError("Please upload a video.");
      return;
    }

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }

    setError("");

    // Generate video preview
    const videoThumbnail = URL.createObjectURL(video);
    setVideoPreview(videoThumbnail);

    try {
      // Upload video to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, "videos/" + video.name);
      const uploadTask = uploadBytesResumable(storageRef, video);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: Track upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle upload errors
          setError("Error uploading video: " + error.message);
        },
        async () => {
          // Get the download URL after the upload is complete
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Store video metadata in Firestore
          const videoData = {
            title,
            description,
            likes,
            views,
            videoUrl: downloadURL,
          };

          // Save video metadata to Firestore
          await uploadVideoMetadata(videoData);
          setError("");
        }
      );
    } catch (uploadError) {
      setError("Error uploading video: " + uploadError.message);
    }
  };

  // Handle video file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_VIDEO_SIZE) {
        setError("Video size exceeds the 50MB limit.");
        return;
      }
      setError("");
      setVideo(file);
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > MAX_VIDEO_SIZE) {
        setError("Video size exceeds the 50MB limit.");
        return;
      }
      setError("");
      setVideo(file);
      setSelectedFile(file);
    }
  };

  return (
    <div className="bg-[#1A202C] text-[#E2E8F0] font-roboto flex flex-col items-center justify-center p-4">
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#2D3748] p-6 rounded-lg shadow-lg mt-6 h-[700px]"
      >
        <h1 className="text-3xl font-bold text-[#6B46C1] pl-48">
          Upload Your Video
        </h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg text-[#E2E8F0] mb-2">
            Video Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 bg-[#1A202C] border border-[#6B46C1] text-[#E2E8F0] rounded-lg"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg text-[#E2E8F0] mb-2"
          >
            Video Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 bg-[#1A202C] border border-[#6B46C1] text-[#E2E8F0] rounded-lg"
            placeholder="Enter video description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="bg-[#1A202C] p-2 rounded-xl">
          <div
            className="border-2 border-dashed border-purple-600 p-12 text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto w-12 h-12 text-purple-400 mb-4" />
            <p className="text-white mb-4">Drag and Drop or Click to Upload</p>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer"
            >
              Select File
            </label>
          </div>
          {selectedFile && (
            <div className="mt-4 text-white">
              <p className="font-bold">Selected File: {selectedFile.name}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#38B2AC] text-white rounded-lg hover:bg-[#6B46C1] transition duration-300 mt-4"
        >
          Upload Video
        </button>
      </form>

      {/* Display Video Card */}
      {videoPreview && (
        <div className="mt-8 w-full max-w-lg bg-[#2D3748] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <video
              className="w-72 h-72 object-cover rounded-lg"
              src={videoPreview}
              controls
            />
            <h2 className="text-xl text-[#6B46C1] mt-4 font-bold">{title}</h2>
            <p className="text-[#E2E8F0] mt-2">{description}</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center text-[#E2E8F0]">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span>{likes} Likes</span>
              </div>
              <div className="flex items-center text-[#E2E8F0]">
                <Eye className="w-5 h-5 text-blue-500 mr-2" />
                <span>{views} Views</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
