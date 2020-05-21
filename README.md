[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# raudt-kandidater-notodden-2019

Listekandidater for Rødt Notodden 2019

# Utvikling

Du trenger [Node.js](https://nodejs.org) >= v12 installert.

Last ned repoet og installer avhengigheter.

```
$ npm i
```

Start utviklingsserveren.

```
$ npm run dev
```

## Legge inn nye kandidater

- Legg de inn i listen på [lib/candidates.js](lib/candidates.js)
- legg hovedbildet bildet inn i [static/images](public/static/image) - bildet bør være 500px bredt
- for å generere profilbildet gå til `/:kandidatid?profile=1`last ned og legg i public/static/images

# Deploy - Manuell

Du trenger [now-cli](https://zeit.co/now) installert.

Sjekk at [now.json](now.json) er satt opp til ditt miljø.

Kjør deploy script.

```
$ npm run deploy
```

# Deploy - Automatisk

Gjør en tagged release.

# Lisens

[MIT](LICENSE)