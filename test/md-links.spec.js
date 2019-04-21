const mdLinks = require('../index.js');


describe('mdLinks', () => {

  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('Debería retornar un arreglo vacio si se pasa como argumento un archivo que no es .md',async  () => {
    const check = await mdLinks(['../index.js'])
    chai.assert.deepEqual(check,[])
  });

  it('Debería retornar un arreglo vacio si se entrega como argumento una ruta inexistente',async  () => {
    const check = await mdLinks(['./index.js'])
    assert.deepEqual(check,[])
  });

  it('Debería retornar una promesa, cuyo resolve sea un array de objetos, y cada objeto contenga la información del link, linea, archivo y validación', async () => {
    const check = await mdLinks(['../README.md'],{validate : true})
    const firstLink = {"mdString": '[Markdown]',"file": "C:\\Escritorio\\LABORATORIA\\ MarkdownLinks\\SCL008-md-links\\README.md", "line": , "link": "https://", "validation": true
    }
    assert.deepEqual(check[0],firstLink)
  });

  it('Debería recorrer todas las carpetas y archivos .md de la ruta que ingrese el usuario', async () => {
      assert.deepEqual();
  });

  it('Debería recorrer todas las carpetas y archivos .md de la ruta que ingrese el usuario, y entregar la validación de los links si el usuario puso {validate:true} en las opciones', async () => {
      assert.deepEqual();
  });
  
});

describe('helpers', () => {

  it('Debería ser un objeto', () => {
    expect(typeof helpers).toBe('object');
  });

  it('helpers.getLinks debería retornar una promesa cuyo resolve sea un arreglo de objetos que contenga los links, el archivo y la linea', async () => {
      assert.deepEqual()
  });

});