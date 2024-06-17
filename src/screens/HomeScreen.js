// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image 
          style={styles.profileImage} 
          source={{ uri: 'https://example.com/path/to/profile-image.jpg' }} 
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        <FontAwesome name="sliders" size={24} color="gray" />
      </View>

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <JobCard job={{ title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' }} />
        <JobCard job={{ title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'New York, US' }} />
        {/* Add more JobCard components here */}
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <JobCard job={{ title: 'Jr Executive', company: 'Burger King', salary: '$96,000', location: 'Los Angeles, US' }} />
      <JobCard job={{ title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US' }} />
      <JobCard job={{ title: 'Product Manager', company: 'Facebook', salary: '$86,000', location: 'Florida, US' }} />
      {/* Add more JobCard components here */}
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
