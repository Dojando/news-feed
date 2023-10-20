# Projet News Feed

Ce projet est une application de flux d'actualités qui permet aux utilisateurs de voir les dernières nouvelles à partir d'une API externe. Voici comment vous pouvez installer, exécuter, et tester le projet sur votre machine locale.

## Installation des Dépendances

Pour installer toutes les dépendances nécessaires pour ce projet, exécutez la commande suivante à la racine du répertoire du projet :

`npm install`

## Lancement du Projet

Pour démarrer l'application sur votre machine locale, exécutez la commande suivante :

`npm start`

Cela lancera le script `start` spécifié dans le fichier `package.json`, et ouvrira l'application dans votre navigateur web par défaut.

## Exécution des Tests

Pour exécuter les tests unitaires et vérifier que tout fonctionne comme prévu, utilisez la commande suivante :

`npm test`

Cela lancera le script `test` spécifié dans le fichier `package.json`, et exécutera le test.

## Concernant la Clé API

La clé API utilisée pour faire des requêtes à l'API externe est incluse directement dans le code pour des raisons de simplicité et pour faciliter la démonstration du projet. Dans un environnement de production réel, il est important de garder les clés API et autres informations sensibles en dehors du code source pour des raisons de sécurité à travers des variables d'environnement par exemple.

Dans ce projet, la clé API est dans le fichier `src/services/api.js`.