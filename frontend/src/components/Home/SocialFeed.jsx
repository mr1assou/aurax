import { useState, useRef } from 'react';
import { IoImageSharp } from "react-icons/io5";
import { MdOutlineGif } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import axiosInstance from '../../Axios';

const SocialFeed = ({setReload}) => {
    const [previewImages, setPreviewImages] = useState([]);
    const [files, setFiles] = useState([]); // Store actual File objects
    const [content, setContent] = useState("");


    const handleFileChange = (e) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);

            // Create preview URLs
            const urls = selectedFiles.map(file => URL.createObjectURL(file));
            setPreviewImages(urls);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if content is empty after trimming whitespace
        if (content.trim() === '') {
            alert('Please write something before posting!');
            return; // Exit the function early
        }

        const formData = new FormData();
        formData.append('description', content);

        // Append actual File objects
        files.forEach(file => {
            formData.append('image', file);
        });

        try {
            const response = await axiosInstance.post('/addPost', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Reset 
            setReload(prevReload=>!prevReload);
            setContent('');          // Clear the text area content
            setFiles([]);            // Clear files array
            setPreviewImages([]);    // Clear image previews

        } catch (error) {
            console.error('Upload error:', error);
        }
    };




    return (
        <div className="max-w-2xl mx-auto bg-black border-grey border-1">
            {/* Header Tabs */}
            <div className="flex border-b border-gray-200">
                <button className="py-4 font-medium text-brown border-b-2 border-brown text-sm lg:text-xl">
                    For you
                </button>
            </div>

            {/* Create Post Area */}
            <form action="" className='relative' onSubmit={handleSubmit}>
                <div className="mt-5 border-b border-grey">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Post now"
                        className="w-full p-0 placeholder-gray-500 resize-none focus:outline-none  bg-black text-white min-h-[20px] text-sm lg:text-lg"
                        rows="1"
                        required
                    />

                    {/* Image Previews */}
                    <div className="grid grid-cols-1 gap-2 mt-4">
                        {previewImages.map((preview, index) => (
                            <div key={index} className="relative group w-full flex justify-center py-5">
                                <img
                                    src={preview}
                                    alt={`Preview ${index}`}
                                    className="w-[70%] h-80 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => setPreviewImages(prev => prev.filter((_, i) => i !== index))}
                                    className="absolute top-1 right-1  group-hover:opacity-100 transition-opacity text-brown text-3xl"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 mt-5 items-center pb-4 border-b-1 border-grey">
                    {/* Image Input */}
                    {/* Camera Input (direct camera access) */}
                    <label htmlFor="camera" className="cursor-pointer flex items-center hover:text-brown">
                        <FaCamera className='text-brown text-xl' />
                        <input
                            type="file"
                            id="camera"
                            accept="image/*"
                            capture="environment"  // Forces camera
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>

                    {/* Gallery Input (image selection only) */}
                    <label htmlFor="gallery" className="cursor-pointer flex items-center hover:text-brown">
                        <IoImageSharp className='text-brown text-xl' />
                        <input
                            type="file"
                            id="gallery"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>

                    {/* GIF Input */}
                    <label htmlFor="gif" className="cursor-pointer flex items-center hover:text-brown">
                        <MdOutlineGif className='text-brown text-4xl' />
                        <input
                            type="file"
                            id="gif"
                            accept="image/gif"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                    <div className='w-[90%] flex justify-end'>
                        <button type='submit' className='text-white bg-brown rounded-lg px-5 py-1 '>Post </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SocialFeed;