// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', backgroundColor: '#445AFF' },
    { title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'New York, US', backgroundColor: '#1D1D55' },
    // Add more featured jobs here with different background colors
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000', location: 'Los Angeles, US' },
    { title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US' },
    { title: 'Product Manager', company: 'Facebook', salary: '$86,000', location: 'Florida, US' },
    // Add more popular jobs here
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image 
          style={styles.profileImage} 
          source={require('../../assets/images/profile_picture.png')} // Use local image
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        <FontAwesome name="sliders" size={24} color="gray" />
      </View>

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredJobs.map((job, index) => (
          <JobCard key={index} job={job} backgroundColor={job.backgroundColor} color="#fff" />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map((job, index) => (
        <JobCard key={index} job={job} backgroundColor="transparent" color="" />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  featuredJobsText: {
    color: '#fff',
  },
  headerText: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
