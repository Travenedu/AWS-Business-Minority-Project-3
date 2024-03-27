// Profile.js

import React, { useState, useEffect } from 'react'; // Import useEffect from 'react'
import './Profile.css'; // Import the CSS file for styling
import Review from '../../Components/Review';
import { generateClient } from 'aws-amplify/api';
import { useNavigate } from 'react-router-dom';

import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme} from "@aws-amplify/ui-react";

import { userProfile } from "../../graphql/queries";
import { userCustomerProfile } from "../../graphql/queries";
import { userBusinessOwnerProfile } from "../../graphql/queries";
import { signOut } from 'aws-amplify/auth';
import { Features2x2 } from '../../ui-components';
import { Authenticator } from '@aws-amplify/ui-react';

//import { Container } from 'react-bootstrap/Container';

const client = generateClient();


const Profile = ({ reviews }) => {

    // State variables for managing active tab and user information
    const [activeTab, setActiveTab] = useState('summary');
    const [userInfo, setUserInfo] = useState({
        username:   'exampleuser',
        password: 'examplepassword',
        email: 'example@example.com',
        // Add more fields as needed
    });
    const navigate = useNavigate();
    const { tokens } = useTheme();

    useEffect(() => {
        fetchProfile();
    }, []);


    // Handle SignOut logic
    async function handleSignOut() {
        try {

          await signOut();
          navigate("/marketingpage");

        } catch (error) {
          console.log('error signing out: ', error);
        }
      }

    // Function to handle tab change
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    // Function to handle user information changes
    const handleUserInfoChange = (fieldName, value) => {
        // try {
            setUserInfo(prevState => ({
                ...prevState,
                [fieldName]: value
            }));
    // } catch (error) {
    //     console.error("Error changing user info", error);
    // }

    };



    async function fetchProfile(){
        const apiData = await client.graphql({ query: userProfile });
        
        if (apiData.business_owner){

            const businessOwnerApiData = await client.graphql({ query: userBusinessOwnerProfile });
            setUserInfo(businessOwnerApiData);
        
        } else if (!apiData.business_owner) {

            const customerApiData = await client.graphql({ query: userCustomerProfile });
            setUserInfo(customerApiData);
        
        } 
        else {
            // console.error("Unable to get profile data", error);
            console.log("Unable to get profile data");
        }

    }

    // Function to reset password

    return (
        <Authenticator loginMechanism={['email']}>
        {({ signOut, user }) => (
            <div className="profile-container">
            {/* Side navigation bar */}
            <div className="side-nav">
                <ul>
                    <li className={activeTab === 'summary' ? 'active' : ''} onClick={() => handleTabChange('summary')}>Summary Dashboard</li>
                    <li className={activeTab === 'appointments' ? 'active' : ''} onClick={() => handleTabChange('appointments')}>Purchase History</li>
                    <li className={activeTab === 'favorite' ? 'active' : ''} onClick={() => handleTabChange('favorite')}>Favorites</li>
                    <li className={activeTab === 'reviews' ? 'active' : ''} onClick={() => handleTabChange('reviews')}>Reviews</li>
                    <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => handleTabChange('profile')}>Profile Details</li>
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

                {/* Profile Details */}
                <div className={`tab-content ${activeTab === 'profile' ? 'show' : ''}`}>
                    <h2>Profile Details</h2>
                    {/* Display and edit user contact information */}
                    <div className="contact-info">
                        <label>Username:</label>
                        <input type="text" value={userInfo.username} onChange={(e) => handleUserInfoChange('username', e.target.value)} />
                        <label>Password:</label>
                        <input type="password" value={userInfo.password} onChange={(e) => handleUserInfoChange('password', e.target.value)} />
                        <label>Email:</label>
                        <input type="email" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />
                        <button onClick={handleSignOut}>Logout</button>

                        
                        {/* Add more fields as needed */}
                    </div>
                </div>

                {/* Appointments */}
                <div className={`tab-content ${activeTab === 'appointments' ? 'show' : ''}`}>
                    <h2>Appointments</h2>
                    {/* Upcoming appointments and Display passed appointments */}
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

                {/* Reviews */}
                <div className={`tab-content ${activeTab === 'reviews' ? 'show' : ''}`}>
                    <h2> Reviews </h2>
                    <View
                        backgroundColor={tokens.colors.background.secondary}
                        padding={tokens.space.medium}
                        >
                        <Card>
                            <Flex direction="row" alignItems="flex-start">
                            <Image
                                alt="Road to milford sound"
                                src=""
                                width="33%"
                            />
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                gap={tokens.space.xs}
                            >
                                <Flex>
                                <Badge size="small" variation="info">
                                    Plus
                                </Badge>
                                <Badge size="small" variation="success">
                                    Verified
                                </Badge>
                                </Flex>

                                <Heading level={5}>
                                New Zealand White Water Outdoor Adventure
                                </Heading>

                                <Text as="span">
                                Join us on this beautiful outdoor adventure through the glittering
                                rivers through the snowy peaks on New Zealand.
                                </Text>
                                <Button variation="primary">Book it</Button>
                            </Flex>
                            </Flex>
                        </Card>
                    </View>
                        {/* {reviews.map((review, index) => (
                        <Review key={index} review={review} />
                        ))} */}
                   
                    {/* Display the reviews custumer has made of passed buinesses */}
                </div>

                {/* Add more tab content sections here */}
            </div>
        </div>
        )}


    </Authenticator>
    );
}

export default Profile;



