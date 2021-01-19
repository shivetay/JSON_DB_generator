# About

This is a random data generator using faker.js library. This generator was done based on article [How to generate mock data within seconds using Node.js](https://medium.com/javascript-in-plain-english/how-to-generate-mock-data-within-seconds-using-node-js-3add366c4bac)
In a future this will create a JSON file.

## Instalation

Use: `npm init`

Install all dependencies

## Usage

Generator is running on port <b>8000</b>.
Use: `http://localhost:8000/data?count=5`

- `/data` is releted to `app.get`.
- `count` is the amount of data that need to generated

### Faker.js

For extra configuration please check [faker.js](https://www.npmjs.com/package/faker).

<b>Some extra examples:</b>

1. Products

```
const commerce = faker.commerce; return { product: commerce.product(), price: commerce.price(), color: commerce.color() };
```

2. Photos

```
const image = faker.image;
      return {
        image: image.image(),
        avatar: image.avatar()
      };
```
