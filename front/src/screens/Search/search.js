import * as React from 'react';
import { View, Text, styleSearchheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import styleSearch from "./styleSearch.js"
import { LinearGradient } from 'expo-linear-gradient';

export function SearchScreen({navigation}) {
  const jobs = [
    {
      company: 'Google',
      jobTitle: 'Software Engineer',
      location: 'Mountain View, CA',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-logo-512.png',
    },
    {
      company: 'Amazon',
      jobTitle: 'Senior Product Manager',
      location: 'Seattle, WA',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/285_Amazon_logo-512.png',
    },
    {
      company: 'Facebook',
      jobTitle: 'Data Scientist',
      location: 'Menlo Park, CA',
      logoUrl: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png',
    },
  ];

  const totalJobs = jobs.length;
  
  return (
    <View style={styleSearch.container}>
    <LinearGradient
        start={{ x: 0, y: 1 }}
  	end={{ x: 1, y: 0 }}
  	colors={['#DEB0DF', '#D5CBF8']}
	style={[styleSearch.background, { flex: 1,}]}
      >
      
      <View style={styleSearch.header}>
        <Text style={styleSearch.title}>Oportunidades</Text>
      </View>
      	<Text style={styleSearch.totalJobs}>{totalJobs} vagas disponíveis</Text>
      {jobs.length === 0 ? (
        <View style={styleSearch.noJobsContainer}>
          <Text style={styleSearch.noJobsText}>No job postings available.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styleSearch.jobsContainer}>
          {jobs.map((job, index) => (
            <TouchableOpacity style={styleSearch.jobCard} key={index} onPress={() => {navigation.navigate('JobScreen')}}>
              <View style={styleSearch.logoContainer}>
                <Image source={{ uri: job.logoUrl }} style={styleSearch.logo} />
              </View>
              <View style={styleSearch.jobDetails}>
                <Text style={styleSearch.company}>{job.company}</Text>
                <Text style={styleSearch.jobTitle}>{job.jobTitle}</Text>
                <Text style={styleSearch.location}>{job.location}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      </LinearGradient>
    </View>
    )
}
