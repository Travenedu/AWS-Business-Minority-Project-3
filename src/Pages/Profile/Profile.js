// Profile.js

import React, { useState, useEffect } from 'react'; // Import useEffect from 'react'
import './Profile.css'; // Import the CSS file for styling
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const Profile = () => {
    // State variables for managing active tab and user information
    const [activeTab, setActiveTab] = useState('summary');
    const [userInfo, setUserInfo] = useState({
        username:   'exampleuser',
        password: 'examplepassword',
        email: 'example@example.com',
        // Add more fields as needed
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    // Function to handle tab change
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    // Function to handle user information changes
    const handleUserInfoChange = (fieldName, value) => {
        try {
            setUserInfo(prevState => ({
                ...prevState,
                [fieldName]: value
            }));
    } catch (error) {
        console.error("Error changing user info", error);
    }

    };

    // Function to retrieve profile information
    async function fetchProfile() {

        // Define or import 'client' and 'profileData'
        // const apiData = await client.graphql({ query: profileData }); // Assuming profileData is the updated GraphQL query
        // const customers = apiData.data.customers; // Assuming 'customers' is the field containing customer profiles
        // const entrepreneurs = apiData.data.entrepreneurs; // Assuming 'entrepreneurs' is the field containing entrepreneur profiles
        // setUserInfo({ customers, entrepreneurs });
        const something = 5;
  
    }

    // Function to reset password

    return (
        <div className="profile-container">
            {/* Side navigation bar */}
            <div className="side-nav">
                <ul>
                    <li className={activeTab === 'summary' ? 'active' : ''} onClick={() => handleTabChange('summary')}>Summary Dashboard</li>
                    <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabChange('contact')}>Contact Details</li>
                    <li className={activeTab === 'purchase' ? 'active' : ''} onClick={() => handleTabChange('purchase')}>Purchase History</li>
                    <li className={activeTab === 'favorite' ? 'active' : ''} onClick={() => handleTabChange('favorite')}>Favorites</li>
                    {/* Add more tabs as needed */}
                </ul>
            </div>

            {/* Main content area */}
            <div className="main-content">
                {/* Summary Dashboard */}
                <div className={`tab-content ${activeTab === 'summary' ? 'show' : ''}`}>
                    <h2>Summary Dashboard</h2>
                    {/* Overview Metrics */}
                    {/* Recent Activity */}
                </div>

                {/* Contact Details */}
                <div className={`tab-content ${activeTab === 'contact' ? 'show' : ''}`}>
                    <h2>Contact Details</h2>
                    {/* Display and edit user contact information */}
                    <div className="contact-info">
                        <label>Username:</label>
                        <input type="text" value={userInfo.username} onChange={(e) => handleUserInfoChange('username', e.target.value)} />
                        <label>Password:</label>
                        <input type="password" value={userInfo.password} onChange={(e) => handleUserInfoChange('password', e.target.value)} />
                        <label>Email:</label>
                        <input type="email" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />
                        {/* Add more fields as needed */}
                    </div>
                </div>

                {/* Purchase History */}
                <div className={`tab-content ${activeTab === 'purchase' ? 'show' : ''}`}>
                    <h2>Purchase History</h2>
                    {/* Display purchase history */}
                </div>

                {/* Favorite Businesses */}
                <div className={`tab-content ${activeTab === 'favorite' ? 'show' : ''}`}>
                <h2>Favorites</h2>
                    <div className="business-grid">
                        {/* {favoriteBusinesses.map((business, index) => (
                        <div key={index} className="business-square">
                            {business.name}
                        </div>
                        ))} */}
                    </div>
                </div>

                {/* Add more tab content sections here */}
            </div>
        </div>

    );
}

export default Profile;
