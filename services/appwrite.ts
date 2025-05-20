//track the searches made by the user
import { Client, Databases } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint;
        .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  //check if a record of that searh has already been stored
  //if a document is found increment the searchCount filed
  //if no doc is found create a new document with the searchCount set to 1
  const result = await 
};
