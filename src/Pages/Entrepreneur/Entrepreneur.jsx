import React, { useState } from "react";
import "./Entrepreneur.css";

export const CompanyXPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [mediaItems, setMediaItems] = useState([]);
    const [mediaUrl, setMediaUrl] = useState("");
    const [mediaTitle, setMediaTitle] = useState("");

    const handleAddMedia = () => {
        if (mediaUrl && mediaTitle) {
            setMediaItems([...mediaItems, { imageUrl: mediaUrl, title: mediaTitle }]);
            setMediaUrl("");
            setMediaTitle("");
        }
    };

    return (
        <div className="company-x-page">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Company X</div>
                    <div className="button-container">
                        <button className="reviews-button">Reviews</button>
                        <button className="add-media-button" onClick={() => setShowForm(true)}>Add Media</button>
                    </div>
                </div>
                <div className="media" />
                <div className="media-2" />
                <div className="media-3" />
                <div className="media-4" />
                <div className="media-5" />
                <div className="media-6" />
                <div className="media-7" />
                <div className="media-8" />
                <div className="overlap-group">
                    <div className="text-wrapper-2">Reviews</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Add Media</div>
                </div>
                <div className="overlap-group-2">
                    <div className="log-in" />
                    <div className="sign-up" />
                    <img className="logo" alt="Logo" src="https://cdn.animaapp.com/projects/65b1c27c58133fdd7aa24185/releases/65cfd0fd8d67bc924f7ecd56/img/logo.svg" />
                    <div className="overlap-2">
                        <div className="div-2" />
                        <div className="text-wrapper-4">Explore</div>
                    </div>
                    <div className="overlap-3">
                        <div className="div-2" />
                        <div className="text-wrapper-5">Categories</div>
                    </div>
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
                <div className="form-container">
                    <h2>Add Media</h2>
                    <input
                        type="text"
                        placeholder="Media URL"
                        value={mediaUrl}
                        onChange={(e) => setMediaUrl(e.target.value)}
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
