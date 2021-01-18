const express = require('express');
const fs = require('fs');
const faker = require('faker');
const _ = require('lodash');

const app = express();

app.get('/data', (req, res) => {
  const count = req.query.count;

  if (!count) {
    return res
      .status(400)
      .send({ errorMsg: 'count query parameter is missing.' });
  }
  res.send(
    _.times(count, () => {
      const address = faker.address;

      payload = {
        country: address.country(),
        city: address.city(),
        state: address.state(),
        zipCode: address.zipCode(),
        latitude: address.latitude(),
        longitude: address.longitude(),
      };
      return payload;
    })
  );
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT} ^_^`));
