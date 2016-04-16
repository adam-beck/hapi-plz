const Server = require('hapi').Server;
const WebpackPlugin = require('hapi-webpack-plugin');


const server = new Server();
server.connection({ port: 3000 });

server.register({
  register: WebpackPlugin,
  options: './webpack.config.js'
}, error => {
  if (error) {
    return console.error(error);
  }

  server.start(() => console.log(`Server running at: ${server.info.uri}`));
});
