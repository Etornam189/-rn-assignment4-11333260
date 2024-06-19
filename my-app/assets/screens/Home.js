import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Head from '../assets/avater.png'
import Search from '../assets/search.png'
import Filter from '../assets/filter.png'
import Fb from '../assets/fblogo.png'
import Popular from './Popular'

const FeaturedData = [
  {id: 1, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: '#ADD8E6', image: Fb, location: 'Accra, Ghana'},
  {id: 2, title: 'Software Developer', company: 'Facebook', salary: '250', backgroundColor: '#040273', image: Fb, location: 'Accra, Ghana'},
  {id: 3, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 4, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 5, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 6, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 7, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 8, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
]

const renderData = () => {
  return(
    <View style={{display: 'flex',flexDirection: 'row', gap: 10, marginHorizontal: 20}}>
      {
        FeaturedData.map(item => {
          return(
            <View key={item.id} style={{display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: item.backgroundColor, borderRadius: 20, width: 280, height: 150 }}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={Fb} style={{width: 70, height: 70}}/>
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.company}</Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', paddingTop: 40, paddingHorizontal: 10}}>
                <Text>{item.location}</Text>
                <Text>${item.salary}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}