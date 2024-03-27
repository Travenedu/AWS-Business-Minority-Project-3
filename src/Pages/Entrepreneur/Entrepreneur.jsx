import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Entrepreneur.css";

export const CompanyXPage = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [mediaItems, setMediaItems] = useState([]);
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaTitle, setMediaTitle] = useState("");

    const handleAddMedia = () => {
        if (mediaFile && mediaTitle) {
            setMediaItems([...mediaItems, { imageUrl: URL.createObjectURL(mediaFile), title: mediaTitle }]);
            setMediaFile(null);
            setMediaTitle("");
        } else {
            alert("Please select a media file and enter a title.");
        }
    };

    const handleMediaFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMediaFile(file);
        }
    };

    const handleAuthentication = () => {
        navigate("/authentication");
    };

    return (
        <div className="company-x-page">
            <div className="div">
                <div className="overlap">
                    <div className="company-name">Company X</div>
                </div>
                <div className="media" />
                <div className="media-2" />
                <div className="media-3" />
                <div className="media-4" />
                <div className="media-5" />
                <div className="media-6" />
                <div className="media-7" />
                <div className="media-8" />
                <button className="add-media-button" onClick={() => setShowForm(true)}>Add Media</button>
                <button className="reviews">Reviews</button>
                <div className="overlap-group-2">
                    <button className="log-in" onClick={handleAuthentication}>Log In</button>
                    <button className="sign-up" onClick={handleAuthentication}>Sign Up</button>
                    <img className="logo" alt="Logo" src="https://cdn.animaapp.com/projects/65b1c27c58133fdd7aa24185/releases/65cfd0fd8d67bc924f7ecd56/img/logo.svg" />
                    <button className="explore-button">Explore</button>
                    <button className="categories-button">Categories</button>
                </div>
                <div className="overlap-4">
                    <img className="search-bar" alt="Search bar" src="https://cdn.animaapp.com/projects/65b1c27c58133fdd7aa24185/releases/65cfd0fd8d67bc924f7ecd56/img/search-bar-.svg" />
                    <div className="overlap-5">
                        <div className="seach-button" />
                        <img className="search-button" alt="Search button" src="https://cdn.animaapp.com/projects/65b1c27c58133fdd7aa24185/releases/65cfd0fd8d67bc924f7ecd56/img/search-button.svg" />
                    </div>
                </div>
            </div>
            {showForm && (
                <div className="add-media-form">
                    <h2>Add Media</h2>
                    <input
                        type="file"
                        accept="image/*, video/*"
                        onChange={handleMediaFileChange}
                    />
                    <input
                        type="text"
                        placeholder="Media Title"
                        value={mediaTitle}
                        onChange={(e) => setMediaTitle(e.target.value)}
                    />
                    <button onClick={handleAddMedia}>Add Media</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
            <div>
                <div className="media-items">
                    {mediaItems.map((media, index) => (
                        <div key={index} className="media-item">
                            <img src={media.imageUrl} alt={media.title} />
                            <div>{media.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
