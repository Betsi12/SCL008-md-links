const mdLinks = require("../src/md-links");

describe('mdLinks', () => {

  it('Debería retornar 3 links al leer el archivo ReadmeTest.md', async() => {    
    await expect(mdLinks.mdLinks('./ReadmeTest.md')).resolves.toEqual(
      [{href:'https://es.wikipedia.org/wiki/Markdown', text:'Markdown', file:'./ReadmeTest.md' },
      {href: 'https://nodejs.org/', text:'Node.js', file:'./ReadmeTest.md'},
      { href:'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'}
    ]);
  });
  
  it('Debería retornar error, al leer un archivo que no existe (testMd.md)', async()  => {
    await expect(mdLinks.mdLinks('./testMd.md')).rejects.toThrow("linkspath is not defined");
  });

  it('Debería retornar "No es archivo .md" para el archivo text.txt', async()  => {
    await expect(mdLinks.mdLinks('./text.txt')).rejects.toThrow("linkspath is not defined");
  });

  it('Debería retornar un error al leer un link no válido', async()=>{
    await expect(mdLinks.checkLink([{href:'https://estonoexiste???.org/Markdown', 
    text:'Markdown', file:'./ReadmeTest.md'}])).resolves.toEqual([{href:'https://estonoexiste???.org/Markdown', 
    text:'Markdown', file:'./ReadmeTest.md', status:0, textStatus:"ENOTFOUND" }]);
  });

}); 