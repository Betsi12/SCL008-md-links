const mdLinks = require('../md-links');

describe('mdLinks', () => {

  it('Debería ser una función', () => {
    expect(typeof mdLinks).resolves.toEqual('function');
  });

  it('Debería retornar 8 links para el archivo ReadmeTest.md', () => {    
    expect(mdLinks.extractLinks('./ReadmeTest.md')).resolves.toEqual(
    [{href:'https://nodejs.org/docs/latest-v0.10.x/api/modules.html', text:'módulos (CommonJS)', file:'./ReadmeTest.md' },
     {href:'https://nodejs.org/en/', text:'Node.js', file:'./ReadmeTest.md'},
     {href:'https://nodejs.org/api/fs.html', text: 'file system', file: './ReadmeTest.md' },
     {href:'https://nodejs.org/api/path.html', text: 'path', file: './ReadmeTest.md' },
     {href:'https://nodejs.org/api/http.html#http_http_get_options_callback, parsin', text: 'http.get', file: './ReadmeTest.md'},
     {href:'https://daringfireball.net/projects/markdown/syntax, CLI', text: 'markdown', file: './ReadmeTest.md'},
     {href:'https://docs.npmjs.com/misc/scripts', text: 'npm-scripts', file: './ReadmeTest.md'},   
     { href: 'https://semver.org/', text: 'semver', file: './ReadmeTest.md'}
    ]);
  });

  it('Debería retornar "Extension no válida" para el archivo index.js', async()  => {
    await expect(mdLinks.extractLinks('../index.js')).rejects.toThrow("Extensión no es .md");
  });
});
  

 

