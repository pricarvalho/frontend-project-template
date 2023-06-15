# frontend-project-template

This repository intend to help developers to startup their application faster.

It works together with the backend-project-template

## Software Architecture
- [React](https://react.dev/)  
- [Keycloak](https://www.keycloak.org) - *Open Source Identity and Access Management*
- [Docker](https://www.docker.com/)
  - [PosgreSQL-15.3](https://www.postgresql.org/docs/current/index.html)

## Usage

1. For the first time running the project, to create the Docker network and install node dependencies run:
    - `make setup`

2. For running the React application:
    - `make run`

## Alternate commands

1. For running the dependencies of Docker images (Postgres and Keycloak) run:
    - (OPTIONAL) if you have a json export file from KeyCloak installation, add it to the `/scripts/keycloak/import` folder
    - `make start`

2. For stopping the Docker containers:
    - `make stop`

3. For removing the containers:
    - `make kill`

4. For cleaning the containers and volumes:
    - `make clean`

## Application

  - **Host**: http://localhost:3001 - *(keycloak is configured to only allow requests from port 3001)*
  
  - **KeyCloak**: http://localhost:8180
    - **user:** admin
    - **password:** admin
