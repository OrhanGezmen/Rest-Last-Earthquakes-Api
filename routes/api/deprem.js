const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const router = express.Router();

/* Afad Son Depremler Sitesi */
const url = 'https://deprem.afad.gov.tr/last-earthquakes.html';

/* Scraping Kodu ve Onu Apiye Donusturdugum Kisim */
router.get('/', (req, res) => {
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const earthquakes = [];

      const tableRows = $('.mainContainer table tbody tr');

      tableRows.each((index, element) => {
        const columns = $(element).find('td');
        const date = $(columns[0]).text();
        const enlem = $(columns[1]).text();
        const boylam = $(columns[2]).text();
        const derinlik = $(columns[3]).text();
        const tip = $(columns[4]).text();
        const buyukluk = $(columns[5]).text();
        const locate = $(columns[6]).text();

        earthquakes.push({
          date,
          enlem,
          boylam,
          derinlik,
          tip,
          buyukluk,
          locate
        });
      });

      res.json(earthquakes);
    } else {
      res.status(500).json({ error: 'Sayfa alınamadı' });
    }
  });
});

module.exports = router;