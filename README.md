<p align="center">
  <img width="200px" src="https://static.designmynight.com/uploads/2017/01/DesignMyNight-Logo.png">
</p>

# Collins API Documentation

This repository contains the documentation for the Collins API.

## Viewing the docs
You can find the docs using the following URL: https://docs.collinsbookings.com

## Developing locally 

To make local changes to the documentation, first clone the repository.

```shell
$ git clone https://github.com/designmynight/collins-api-docs
$ cd collins-api-docs
```

You can use Docker to host a local development environment of the documentation.

```shell
$ docker-compose up
```

The documentation will be served on localhost at port 8080 - http://localhost:8080

## Publishing

### Publishing the docs
The latest docs are generated on a push to master

### Publishing the SDK
On commit to master SDK is automatically published to NPM: https://www.npmjs.com/package/collins-js-sdk. you must increment the version in package.json otherwise the package will not be replaced.







