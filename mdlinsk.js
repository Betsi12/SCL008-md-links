#!/usr/bin/env node
//Librerias de Node utilizadas
const fs = require('fs');
const path = require('path');
const marked = require('marked');

// La función extracLinks extrae los links de los archivos .md

const extracLinks = (path) => {
  return new promise((result, reject) => {
    // extname devuelve la extensión de los archivos, se condiciona que devuelva los que tienen extensión .md
    if (routePath.extname(path) != '.md') {
      throw (new Error("No es archivo .md"));
    }
    //Arreglo vacio donde se guaradarán los links encontrados
    let links = [];
    //Variable donde se guardará la lectura del archivo
    const markdown = fs.readFileSync(path).toString();
    // el renderer se ejecutara cada vez que encuentra un link
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      links.push({
        href: href,
        text: text,
        file: path
      });
    };
    //Se usará el renderer anteriormente para que 
    { renderer: renderer };
    marked(markdown, { renderer: renderer });
    /*Si la promesa se resuelve, esta preparada para ser consumida desde mdLinks (.then)*/
    resolve(links);
  }
catch (error) {
    reject(error);
  }

};


module.exports = {
  extractLinksFromFile
}
