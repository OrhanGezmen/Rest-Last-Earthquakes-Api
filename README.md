# Rest-Last-Earthquakes-Api

Bu proje, son 100 depremi listeleyen bir API oluşturmak amacıyla geliştirilmiştir. Verileri https://deprem.afad.gov.tr/last-earthquakes.html adresinden çekmekte ve bunları API olarak sunmaktadır.

## Nasıl Kullanılır?

1. Projenin kök dizinindeki terminal veya komut istemcisini açın.

2. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu kullanın:

**npm install**

3. API'yi başlatmak için aşağıdaki komutu kullanın:

**npm start** 

4. Tarayıcınızda veya API test araçlarında aşağıdaki URL'yi açarak son 100 depremi görüntüleyebilirsiniz:

**https://localhost:PORT/api/last-earthquakes**


Not: `PORT` değeri, projenizin çalıştığı port numarası ile değiştirilmelidir.

## API Endpoint: /api/last-earthquakes

Bu endpoint, son 100 depremin verilerini döndürür. Verileri çekmek için cheerio kütüphanesi kullanılarak https://deprem.afad.gov.tr/last-earthquakes.html adresine scraping yapılmaktadır.

Veri örnek formatı:

```json
[{
"date":"2023-08-12 10:23:56",
"enlem":"37.867",
"boylam":"26.987",
"derinlik":"6.91",
"tip":"ML",
"buyukluk":"2.6",
"locate":"Ege Denizi - Kuşadası Körfezi - [19.55 km] Menderes (İzmir)"
}
... diger 99 veri]
```
