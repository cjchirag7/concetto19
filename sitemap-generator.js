const Events = [
  {
    name: "ROBOWARS",
    is_club: 1
  },
  {
    name: "Flag Your Win",
    is_club: 1
  },
  {
    name: "Death Race",
    is_club: 1
  },
  {
    name: "Finding Chandler",
    is_club: 1
  },
  {
    name: "Capture the flag",
    is_club: 1
  },
  {
    name: "CodeYaan 1.0",
    is_club: 1
  },
  {
    name: "Maestronics",
    is_club: 1
  },
  {
    name: "Bizathon",
    is_club: 1
  },
  {
    name: "Soft Alight",
    is_club: 1
  },
  {
    name: "Haul N Fall",
    is_club: 0
  },
  {
    name: "Magnotech",
    is_club: 0
  },
  {
    name: "INDUSTRIAL DESIGN PROBLEM (IDP)",
    is_club: 0
  },
  {
    name: "Rock The Wagon",
    is_club: 0
  },
  {
    name: "CAD CRAFIAN",
    is_club: 0
  },
  {
    name: "CRAFT-A-VANE",
    is_club: 0
  },
  {
    name: "EARTH",
    is_club: 0
  },
  {
    name: "INVENTO",
    is_club: 0
  },
  {
    name: "TRUSS THE FRAME",
    is_club: 0
  },
  {
    name: "Tech Triathlon",
    is_club: 0
  },
  {
    name: "BEAM ENROUTE",
    is_club: 0
  },
  {
    name: "EMBITREX",
    is_club: 0
  },
  {
    name: "CHEM-E-CAR",
    is_club: 0
  },
  {
    name: "EXTREME PROPULSION – 47",
    is_club: 0
  },
  {
    name: "Chem cruise",
    is_club: 0
  },
  {
    name: "Pirates of Terrain",
    is_club: 0
  },
  {
    name: "Buffet Money 19",
    is_club: 0
  },
  {
    name: "Terra Stellar",
    is_club: 0
  },
  {
    name: "The Baffling Planet",
    is_club: 0
  },
  {
    name: "Build a Bit",
    is_club: 0
  },
  {
    name: "General Quiz",
    is_club: 1
  }
];

require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  const clubEvents = Events.filter(event => event.is_club);
  const departmentEvents = Events.filter(event => !event.is_club);

  let clubEventNames = [];
  clubEvents.forEach(event => {
    clubEventNames.push({ eventName: event.name.split(" ").join("-") });
  });
  let departmentEventNames = [];
  departmentEvents.forEach(event => {
    departmentEventNames.push({ eventName: event.name.split(" ").join("-") });
  });
  const paramsConfig = {
    "/club-events/:eventName": clubEventNames,
    "/club-events/:eventName/about": clubEventNames,
    "/club-events/:eventName/rules": clubEventNames,
    "/club-events/:eventName/details": clubEventNames,
    "/club-events/:eventName/register": clubEventNames,
    "/department-events/:eventName": departmentEventNames,
    "/department-events/:eventName/about": departmentEventNames,
    "/department-events/:eventName/rules": departmentEventNames,
    "/department-events/:eventName/details": departmentEventNames,
    "/department-events/:eventName/register": departmentEventNames
  };

  return new Sitemap(router)
    .applyParams(paramsConfig)
    .build("https://www.concetto19.tech/#") //#
    .save("./public/sitemap.xml");
}

generateSitemap();
