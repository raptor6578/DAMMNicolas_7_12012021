# Réseau social interne de l'entreprise Groupomania

## Dépendances pour utiliser ce projet

- Docker
- Makefile

Sous Mac et Linux Makefile est disponible par défaut.

Si vous utilisez Windows, utilisez le terminal Cygwin ou installez Makefile sur votre ordinateur:

- http://gnuwin32.sourceforge.net/packages/make.htm

## Installation des librairies JavaScript du projet:
- make npm-install

## Démarrage des containers docker en mode production
- make up

Votre serveur NGINX sera disponible à l'adresse suivante: http://localhost:9999

## Démarrage des containers docker en mode développement 

Stoppez le mode production (si il est déjà en cours d'éxécution):

- make down

Démarrez le mode développement

- make up-dev

La durée du premier démarrage en mode développement dépendra de la puissance votre ordinateur, vous devez attendre de voir apparaitre le message suivant pour que le server soit disponible:

frontend-dev_1  | ** Angular Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/

Vous pourrez ensuite vous connecter depuis votre navigateur à l'adresse suivante :

- http://localhost:4200
