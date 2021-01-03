const path = require('path');

module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/cl1sakelog/17years_old',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: '/17years-old',
};
