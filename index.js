#!/usr/bin/env node // Indica al computador que se trabajara con node
// Llamar a los módulos Node que se van a usar
const mdLinks = require("./src/md-links");

if((process.argv[3]==="--validate"&& process.argv[4]==="--stats")|| 
(process.argv[3]==="--stats" && process.argv[4]==="--validate")){

  mdLinks.mdLinks(process.argv[2],{validate:true})
  .then((links) => {
    let linkStats=mdLinks.statsLinks(links, {validate: true});
      console.log(`Total: ${linkStats.linksTotal}`);
      console.log(`Unique: ${linkStats.linkSingle}`);
      console.log(`Broken: ${linkStats.linksBroken}`)
    })
    .catch(console.error);
  }
  else if(process.argv[3]==="--validate"){
    mdLinks.mdLinks(process.argv[2],{validate:true})
      .then((links) => {
        links.forEach(function (link) {   
          console.log(`${link.file} ${link.href} ${link.status} ${link.statusText} ${link.text.substring(0,50)}`);
        }); 
      })
      .catch(console.error);
  }
  else if(process.argv[3]==="--stats"){
    mdLinks.mdLinks(process.argv[2])
      .then((links) => {
        let linkStats=mdLinks.statsLinks(links);
        console.log(`Total: ${linkStats.linksTotal}`);
        console.log(`Unique: ${linkStats.linkSingle}`);
      })
      .catch(console.error);
    }else {
      mdLinks.mdLinks(process.argv[2])
        .then((links) => {
          links.forEach(function (link) {   
            console.log(`${link.file} ${link.href} ${link.text.substring(0,50)}`);
          }); 
        })
        .catch(console.error);
    }
  