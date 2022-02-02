const database = "firstdb";
const collection = "flights";

// The current database to use.
use(database);
db.flights.drop();

let dateclass = new Date();
let date = dateclass.toLocaleDateString();
let time = dateclass.toLocaleTimeString();

db.flights.insertMany([
  {
    id: 0,
    route: { from: "delhi", to: "bangalore" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 1,
    route: { from: "delhi", to: "chennai" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 2,
    route: { from: "delhi", to: "coimbatore" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 3,
    route: { from: "delhi", to: "pune" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 4,
    route: { from: "delhi", to: "kolkata" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 5,
    route: { from: "delhi", to: "mumbai" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 6,
    route: { from: "delhi", to: "west bengal" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 7,
    route: { from: "delhi", to: "ajmer" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 8,
    route: { from: "delhi", to: "jaipur" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 9,
    route: { from: "delhi", to: "chandigarh" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
  {
    id: 10,
    route: { from: "delhi", to: "roorkee" },
    price: Math.floor(Math.random() * 5000),
    date: date,
    time: time,
    imgSrc: "https://s0.2mdn.net/simgad/338758146175179467",
  },
]);
