
## Approach to solution
As mentioned in the problem description we have to keep edit discount easy at category and product level. Therefore all the product has a reference
for their repective category so that any change in category discount can be reflected easily

I have used recursion to process the hierarchy of categories to find out the discount associated with the very first category

I have use seperate modules for product, category and payment to maintain the code seperation and followed best practices wherever possible

For quick authentication I have used guards to protect the payment/product-discount API

The docker compose file has been added to the project


## Execution flow for proper testing of the code base

Use the rest.http file to execute the APIS in top down approach to populate the data base

In the end execute the final api with a valid user id i.e 25 to get the discount in response


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
