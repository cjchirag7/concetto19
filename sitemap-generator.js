import { Events } from "./src/shared/Events";

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
    "/department-events/:eventName": departmentEventNames
  };

  return new Sitemap(router)
    .applyParams(paramsConfig)
    .build("https://www.concetto19.tech/#") //#
    .save("./public/sitemap.xml");
}

generateSitemap();
