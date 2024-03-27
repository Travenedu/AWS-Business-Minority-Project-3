// CreateBusinessPage.js

import React, { useState, FormEvent } from 'react';
//import { API, Storage } from 'aws-amplify';
//import { graphqlOperation } from '@aws-amplify/api-graphql';
import {Button, Flex, Heading, Text, TextField, View,} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { uploadData } from 'aws-amplify/storage';

import { createBusiness } from '../../graphql/mutations'

import {v4 as uuid} from 'uuid';

const client = generateClient();

const CreateBusiness = () => {
  // State to manage form fields
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    category: '',
    description: '',
    businessImagePath: null,
    // Add more fields as needed
  });
  const [businessProfileImage, setBusinessProfileImage] = useState("");

  async function createNewBusiness(event) {
    const form = event.target;
    const formData = new FormData(form);
    // const { name, address, phone, website,
    //        category, description} = businessInfo;

    event.preventDefault();

    try {
      
      // Converting image file into blob
      const imageData = new Blob([businessProfileImage], {type: 'image/png'});
      console.log("Converted Image to blob");

      const key = await uploadData({
        key: `${uuid()}.png`,
        data: imageData,
        options: {
          accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          //onProgress // Optional progress callback.
        }
      }).result;

    const newBusinessDetails = {
      id: uuid(),
      name: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      category: formData.get("category"),
      description: formData.get("description"),
      businessImagePath: key,
      appointments: null 
    };
    
    const newBusiness = await client.graphql({
      query: createBusiness,
      variables: { input: newBusinessDetails }
    });

      console.log('Succeeded: ', key);
    } catch (error) {
      console.log('Error : ', error);
    }
  }

  return (
    <div>
      <h2>Create a New Business</h2>
      
      <View as="form" margin="3rem 0" onSubmit={createNewBusiness}>
        <Flex direction="column" justifyContent="center">
          
          <TextField
            name="name"
            placeholder="Business Name"
            label="Note Business Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="phone"
            placeholder="Phone Number"
            label="Note Phone Number"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="address"
            placeholder="Address"
            label="Note Address"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="website"
            placeholder="Website"
            label="Note Website"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="category"
            placeholder="Note Category"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="Image"
            placeholder="Note Image"
            label="Note Image"
            labelHidden
            type="file"
            onChange={setBusinessProfileImage}
            InputLabelProps={{ shrink: true }}
            variation="quiet"
            required
            
          
          />
          <Button type="submit" variation="primary">
            Create Business
          </Button>
        </Flex>
      </View>



    </div>
  );
};

export default CreateBusiness ;

  // // Function to handle form input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBusinessInfo((prevInfo) => ({
  //     ...prevInfo,
  //     [name]: value,
  //   }));
  // };

  //   // Function to handle image upload
  //   const handleImageChange = (e) => {
  //     const imageFile = e.target.files[0];
  //     setBusinessInfo((prevInfo) => ({
  //       ...prevInfo,
  //       image: imageFile,
  //     }));
  //   };

  // // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add logic to submit business data to backend or perform other actions
  //   console.log('Business information:', businessInfo);
  //   // Reset form fields after submission
  //   setBusinessInfo({
  //     name: '',
  //     address: '',
  //     phone: '',
  //     website: '',
  //     category: '',
  //     description: '',
  //     businessImagePath: null, // Add image field
  //   });
  // };