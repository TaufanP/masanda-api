<!-- HEADER -->
<p align="center">
  <img src="https://user-images.githubusercontent.com/33638021/118342328-0e2ef600-b54d-11eb-8d4c-68059d7c01aa.png" alt="Masanda" width="104">
  <h1 align="center">Masanda API</h1>
</p>

<!-- DESCRIPTION -->
<h4 align="center">API for <a href="https://github.com/TaufanP/masanda">Masanda</a>.</h4>

<!-- DEPENDENCIES -->
<p align="center">
  <img src="https://img.shields.io/badge/node.js-12.20.0-green" alt="Node.js 12.20.0" height="24">
  <img src="https://img.shields.io/badge/express-4.17.1-green" alt="Express 4.17.1" height="24">
  <img src="https://img.shields.io/badge/mongoose-5.12.2-green" alt="Mongoose 5.12.2" height="24">
  <img src="https://img.shields.io/badge/multer-1.4.2-green" alt="Multer 1.4.2" height="24">
  <img src="https://img.shields.io/badge/sharp-0.28.1-green" alt="Multer 0.28.1" height="24">
  <img src="https://img.shields.io/badge/typescript-4.2.3-blue" alt="Typescript 4.2.3" height="24">
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Background](#background)
* [Features](#features)
* [API List](#api-list)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Related Project](#related)
* [License](#license)
* [Contact](#contact)

<!-- BACKGROUND -->
## Background <a name="background"></a>
<p>
Came from a store owner found that it’s difficult for her employees to find a product price. They have to memorize and taking a note of it. Another challenges come when the employees are replaced. They have to start it all over again. Masanda Let the user to add a new or find an item quickly, it only needs name and price. The search feature is accessible by scanning product barcode
and immediately display the details.
</p>

<!-- FEATURES -->
## Features <a name="features"></a>
* **High Quality Compressed Image** images will be compressed before uploaded to Cloudinary storage.
* **MongoDB** Masanda use a powerful, reliable and easy to scale database.
* **Easy Deployment** Masanda API is deployed under Heroku service.

<!-- API LIST -->
## API List <a name="api-list"></a>
Web API | Method | URL | Description
------------ | ------------- | ------------- | -------------
Create Product | POST | {baseUrl}/api/v1/product | Product
Delete Product | DELETE | {baseUrl}/api/v1/product/{product_barcode} | Product
Get Product | GET | {baseUrl}/api/v1/product/{product_barcode} | Product
Get Products | GET | {baseUrl}/api/v1/product | Product
Search Products | GET | {baseUrl}/api/v1/product?keyword={keyword}&field={field}&order={order} | Product
Update Product | PUT | {baseUrl}/api/v1/product | Product

Notes:
* **keyword** is the search keyword.
* **field** is the chosen field to be sorted.
* **order** is the ordering, 1 for ascending and -1 for descending.
<!-- GETTING STARTED -->
## Getting Started <a name="getting-started"></a>
### Prerequisites <a name="prerequisites"></a>
* [Node.js](https://nodejs.org/en/download/) (npm included)
* [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

### Installation <a name="installation"></a>
Clone this [repo](https://github.com/TaufanP/masanda) then open the directory with your terminal
```
cd masanda-api
```
Install all the packages
```
yarn install
```
Create .env file on project root
```
PORT=4000
DB_CONNECTION=YOUR_MONGOOSE_CONNECTION_URI
CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```
You can get the variables in links below:
* [mongoose URI](https://mongoosejs.com/docs/connections.html)
* [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary)

Run the server on your local
```
yarn start
```

<!-- RELATED -->
## Related Project <a name="related"></a>
* [Masanda](https://github.com/TaufanP/masanda) front-end application of Masanda API.

<!-- LICENSE -->
## License <a name="license"></a>
Masanda API is released under [GNU General Public License V3](https://github.com/TaufanP/masanda/blob/main/LICENSE).

<!-- CONTACT -->
## Contact <a name="contact"></a>
Get in touch with me on my [Instagram](https://www.instagram.com/profennador/) or [LinkedIn](https://www.linkedin.com/in/taufan-p/).
