import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Footer extends Component {
  render() {
    return (
      <BottomNavigation
          labelColor="#3EC3D3"
          style={{
            height: 56,
            elevation: 8,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
        <Tab
          label="Messages"
          icon={<Icon size={24} color="#3EC3D3" name="tv" />}
        />
        <Tab
          label="My Cards"
          icon={<Icon size={24} color="#3EC3D3" name="music-note" />}
        />
        <Tab
          label="Transact"
          icon={<Icon size={24} color="#3EC3D3" name="book" />}
        />
        <Tab
          label="Statements"
          icon={<Icon size={24} color="#3EC3D3" name="business" />}
        />
        <Tab
          label="Profile"
          icon={<Icon size={24} color="#3EC3D3" name="tv" />}
        />
      </BottomNavigation>
    );
  }
}
