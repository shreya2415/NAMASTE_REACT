# General Notes
* NPM does not stand for only Node package manager , it is a manager of package not specifically for node. 

* NPM means installing a package
* NPX means executing a package.

* CDN links are not generic and preferred method to use react inside in our code.

# Parcel Functionality
- Dev Build
- Local Server
- HMR - Hot Module Replacement 
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimisation
- Minification of files
- Bundling the file
- Compress the file
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support Older Browser

# Parcel Commands
- To run in dev server: npx parcel index.html
- To make prod build : npx parcel build index.html
- To stop the local server : ctrl + c

* When we added commands in scripts in package.json


  "scripts": {
    "start": "parcel index.html",
    "build":"parcel build index.html",
  }

- To run in dev server: npm run start / npm start
- To make a prod build: npm run build