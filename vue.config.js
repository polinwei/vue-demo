console.log(`Webpack is running as ${process.env.NODE_ENV} mode.`);

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    publicPath: "/vue-demo/",    
    outputDir: "W:/xampp/htdocs/vue-demo",  
  }
  
} else {  
  module.exports = {
    runtimeCompiler: true,
    publicPath: '/',
  }
}