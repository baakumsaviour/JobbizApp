// src/components/JobCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const companyLogos = {
  'Facebook': require('../../assets/images/facebook.png'),
  'Google': require('../../assets/images/google.png'),
  'Burger King': require('../../assets/images/burger_king.png'),
  'Beats': require('../../assets/images/beats.png'),
};

const JobCard = ({ job, backgroundColor, color }) => {
  const logoSource = companyLogos[job.company] || require('../../assets/images/facebook.png');

  return (
    <View style={[styles.card, { backgroundColor }, {color}]}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoSource} />
        <Text style={styles.title}>{job.title}</Text>
      </View>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    width: 250,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JobCard;
