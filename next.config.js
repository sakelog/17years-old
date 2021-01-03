const path = require('path');

module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/cl1sakelog/',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: '/17years-old',
};
