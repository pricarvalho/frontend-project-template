## Usage

1. For the first time running the project, to create the Docker network and install node dependencies run:
    - `make setup` 
    - `npm install`

2. For running the dependencies of Docker images (Postgres and Keycloak) run:
    - `make start`

3. For running the React application:
    - `make run`

4. For stopping the Docker containers:
    - `make stop`

5. For cleaning the containers and volumes:
    - `make clean`
