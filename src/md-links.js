#!/usr/bin/env node
//Librerias de Node utilizadas
const fs = require('fs');
const nodepath = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

//Función mdLinks, permite tomar lo que usuario ingresa en consola 

const mdLinks = (path,option) => {
    if(option && option.validate){
        return new Promise((resolve,reject)=>{
            extractLinks(path).then((links)=>{
                resolve(checkLink(links));
            });
        })
    }
    else{
        return extractLinks(path);
    }
}

//Función extractLinks extrae los links de archivos .md de la ruta ingresada por consola

const extractLinks= (path)=>{
    return new Promise((resolve,reject)=>{
        try{
            if(linkspath.extname(path)!=".md"){
                throw(new Error("Extensión no válida"));
            }
            fs.readFile(path,'utf-8',(err, content)=>{
                if(err){
                    reject(err.code);
                }
                else{
                    let links=[];
                    const renderer = new contentMarked.Renderer();
                    renderer.link = function(href, title, text){
                        links.push({
                            href:href,
                            text: text,
                            file: path
                        })
                    }
                    contentMarked(content,{renderer:renderer});
                    resolve(links);
                }
            })  
        }
        catch(error){
            reject(error);
        }
        
    })
}
//Función validateLinks, se ejecuta cuando el usuario introduce la opcion para validar los links encontrados

const checkLink = (links)=>{
    return Promise.all(links.map(link=>{
        return new Promise((resolve,reject)=>{
            fetch(link.href)
                .then(res=>{
                    link.status = res.status;
                    link.textStatus = res.textStatus;
                    resolve(link);
                })
                .catch((err)=> {
                    link.status=0;
                    link.textStatus=err.code;
                    resolve(link);
                })                    
        });
    }))
}



module.exports={
    mdLinks,checkLink
}