// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const featuredJobs = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Facebook',
    location: 'Accra, Ghana',
    salary: '$180,000',
    logo: require('../../assets/images/facebook.png')
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Google',
    location: 'California, US',
    salary: '$160,000',
    logo: require('../../assets/images/google.png')
  }
];

const popularJobs = [
  {
    id: '1',
    title: 'Jr Executive',
    company: 'Burger King',
    location: 'Los Angeles, US',
    salary: '$96,000/y',
    logo: require('../../assets/images/burger_king.png')
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Beats',
    location: 'Florida, US',
    salary: '$84,000/y',
    logo: require('../../assets/images/beats.png')
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'Facebook',
    location: 'Florida, US',
    salary: '$86,000/y',
    logo: require('../../assets/images/facebook.png')
  }
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
        </View>
        <Image source={require('../../assets/images/profile_picture.png')} style={styles.profileImage} />
      </View>

      <TextInput style={styles.searchInput} placeholder="Search a job or position" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>

      <FlatList
        data={featuredJobs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <Image source={item.logo} style={styles.featuredJobLogo} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.companyName}>{item.company}</Text>
            <Text style={styles.salary}>{item.salary}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>

      {popularJobs.map(job => (
        <View key={job.id} style={styles.popularJobCard}>
          <Image source={job.logo} style={styles.popularJobLogo} />
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.companyName}>{job.company}</Text>
            <Text style={styles.salary}>{job.salary}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
      ))}
    </View>
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
  userInfo: {
    flex: 1,
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
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#3b5998',
  },
  featuredJobCard: {
    backgroundColor: '#e6f0ff',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 250,
  },
  featuredJobLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  popularJobLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
  },
});

export default HomeScreen;
