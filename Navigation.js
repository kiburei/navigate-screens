import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import QrCode from './main/QrCode';
import GridView from 'react-native-super-grid';
import { bongzBlue } from './main/assets/colors';
import AgentWithdraw from './main/AgentWithdraw';
import AtmWithdraw from './main/AtmWithdraw';
import ReceiveMoney from './main/ReceiveMoney';
import SendMoney from './main/SendMoney';
import ShopNo from './main/ShopNo';
import MessageScreen from './main/screens/MessageScreen';
import CardScreen from './main/screens/CardScreen';
import TransactScreen from './main/screens/TransactScreen';
import StatementScreen from './main/screens/StatementScreen';
import ProfileScreen from './main/screens/ProfileScreen';
import BongzCard from './main/screens/BongzCard';
import Navigation from './Navigation';