/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface FootballStats {
  teamName: string;
  competition: string;
  goals: number;
  shotsPerMatch: number;
  discipline: string;
  possession: string;
  successfulPasses: string;
  aerialsWon: number;
  rating: number;
  flagImage: ImageSourcePropType;
}

const FootballStatsCard: React.FC<FootballStats> = ({
  teamName,
  competition,
  goals,
  shotsPerMatch,
  discipline,
  possession,
  successfulPasses,
  aerialsWon,
  rating,
  flagImage,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={flagImage} style={styles.flag} />
        <Text style={styles.teamName}>{teamName}</Text>
      </View>
      <View style={styles.stats}>
        <Text>Équipe: {teamName}</Text>
        <Text>Compétition: {competition}</Text>
        <Text>Buts: {goals}</Text>
        <Text>Tirs par match: {shotsPerMatch}</Text>
        <Text>Discipline: {discipline}</Text>
        <Text>Possession%: {possession}</Text>
        <Text>Passes réussies%: {successfulPasses}</Text>
        <Text>Aériens gagnés: {aerialsWon}</Text>
        <Text>Note: {rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    margin: 15,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 8,
  },
  teamName: {
    fontSize: 23,
    fontWeight: 'bold',

  },
  stats: {
    flexDirection: 'column',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default FootballStatsCard;
