// Import stylesheets

import { iUser } from './interfaces/user.interface';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const user: iUser = {
  gender: 'female',
  name: {
    title: 'Mrs',
    first: 'Amy',
    last: 'Carpenter'
  },
  location: {
    street: {
      number: 8158,
      name: 'Ranchview Dr'
    },
    city: 'Roseburg',
    state: 'Hawaii',
    country: 'United States',
    postcode: 88844,
    coordinates: {
      latitude: '89.7842',
      longitude: '141.4353'
    },
    timezone: {
      offset: '+6:00',
      description: 'Almaty, Dhaka, Colombo'
    }
  },
  email: 'amy.carpenter@example.com',
  login: {
    uuid: '016cdac3-e9cb-4bbc-bd74-dc8ab3484b56',
    username: 'crazyswan799',
    password: 'jingle',
    salt: 'LURSQVBZ',
    md5: 'cd65c826bac3d03ae088a629273b8986',
    sha1: 'faa561a06040fa69c3d44b5bbb8b81e50931ddf1',
    sha256: 'fc662c7af99a207b096833e14d3de6f8af51e9691c8c2ea0f26cbe32ac59ae1a'
  },
  dob: {
    date: '1975-01-11T00:19:41.054Z',
    age: 46
  },
  registered: {
    date: '2013-03-10T09:44:39.973Z',
    age: 8
  },
  phone: '(225)-273-4421',
  cell: '(854)-375-8005',
  id: {
    name: 'SSN',
    value: '720-12-8099'
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/69.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/69.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/69.jpg'
  },
  nat: 'US'
};
