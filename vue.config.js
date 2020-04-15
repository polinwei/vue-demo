if (process.env.NODE_ENV === 'production') {
  console.log(`Webpack is running as ${process.env.NODE_ENV} mode.`);
  module.exports = {
    publicPath: "/",
  }
  
} else {
  console.log(`Webpack is running as ${process.env.NODE_ENV} mode.`)
  module.exports = {
    runtimeCompiler: true,
    publicPath: '/vue-demo/',
  }
}