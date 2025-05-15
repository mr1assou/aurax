import { useState, useRef } from "react";
import { FaCamera, FaVideo } from "react-icons/fa";
import axiosInstance from "../../Axios";
import { MapIcon, PhotoIcon } from "@heroicons/react/24/outline";

const SocialFeed = ({ setReload }) => {
  const [previewMedia, setPreviewMedia] = useState([]);
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New loading state

  const handleFileChange = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);

      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewMedia((prev) => [...prev, ...urls]);
    }
  };

  const removeMedia = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewMedia((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("Please write something before posting!");
      return;
    }
    setIsSubmitting(true); // Start loading
    
    try {
      const formData = new FormData();
      formData.append("description", content);
      files.forEach((file) => formData.append("media", file));

      // Add artificial delay
      const [response] = await Promise.all([
        axiosInstance.post("/addPost", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
        new Promise((resolve) => setTimeout(resolve, 3000)), // 3-second delay
      ]);

      setReload((prev) => !prev);
      setContent("");
      setFiles([]);
      setPreviewMedia([]);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return (
    <div className="max-w-2xl mx-auto  flex-grow p-4">
      <form action="" className="relative" onSubmit={handleSubmit}>
        <div className="mt-5  w-full">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full  resize-none outline-none min-h-[50px]  text-lg"
            rows="1"
            required
            disabled={isSubmitting} // Disable during submission
          />

          {/* Loading overlay */}
          {isSubmitting && (
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-grey"></div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-2 mt-4">
            {previewMedia.map((preview, index) => {
              const file = files[index];
              const isVideo = file.type.startsWith("video/");
              return (
                <div
                  key={index}
                  className="relative group w-full flex justify-center py-5"
                >
                  {isVideo ? (
                    <video
                      src={preview}
                      controls
                      className="w-[70%] h-80 object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="w-[70%] h-80 object-cover rounded-lg"
                    />
                  )}
                  {!isSubmitting && ( // Only show remove button when not submitting
                    <button
                      onClick={() => removeMedia(index)}
                      className="absolute top-1 right-1 group-hover:opacity-100 transition-opacity text-brown text-3xl"
                    >
                      ×
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between space-x-4 pt-5">
          {/* Disable buttons during submission */}
          <label
            htmlFor="camera"
            className={`cursor-pointer flex items-center ${
              isSubmitting ? "opacity-50" : "hover:text-brown"
            }`}
          >
            <FaCamera className="text-brown text-xl" />
            <input
              type="file"
              id="camera"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
              disabled={isSubmitting}
            />
          </label>

          {/* Repeat for other file inputs */}
          <label
            htmlFor="gallery"
            className={`cursor-pointer flex items-center ${
              isSubmitting ? "opacity-50" : "hover:text-brown"
            }`}
          >
            <PhotoIcon className="text-brown text-xl w-[22px] h-[22px]" />
            <input
              type="file"
              id="gallery"
              accept="image/*, video/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
              disabled={isSubmitting}
            />
          </label>

          <label
            htmlFor="video"
            className={`cursor-pointer flex items-center ${
              isSubmitting ? "opacity-50" : "hover:text-brown"
            }`}
          >
            <FaVideo className="text-brown text-xl" />
            <input
              type="file"
              id="video"
              accept="video/*"
              className="hidden"
              onChange={handleFileChange}
              disabled={isSubmitting}
            />
          </label>

          <div className="w-[90%] flex justify-end">
            <button
              type="submit"
              className="text-white bg-brown w-[80px] h-[36px] rounded-full text-sm cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">↻</span>
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialFeed;
