#!/usr/bin/env node  // Indica al computador que se trabajara con node
// Llamar a los módulos Node que se van a usar
const path = require('path');
const mdlink = require('./mdLinks.js');

mdLinks.extracLinks(process.argv[2])
.then((links)=>{
  links.forEach(function(link){
    console.log(`${link.file} ${link.href}`);
    
  });
})





  module.exports = mdLinks;