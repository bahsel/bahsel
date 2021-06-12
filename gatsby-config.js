module.exports = {
  siteMetadata: {
    title: "bahsel",
  },
  plugins: [{
    resolve: 'gatsby-plugin-express',
    options: {
      output: 'config/gatsby-express.json',
    }
  }],
};
