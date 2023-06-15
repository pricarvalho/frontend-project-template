DOCKER_COMPOSE_FILE_PATH?="docker/docker-compose.yaml"

run:
	@npm start

install:
	@rm -rf node_modules/ && npm install

setup: 
	-$(MAKE) create-network
	$(MAKE) start
	$(MAKE) install

#DOCKER
start:
	@echo "Starting containers..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} up -d

stop:
	@echo "Stopping containers..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} stop

kill: stop 
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} rm -f -v

clean: kill
	@echo "Deleting named volumes..."
	@docker volume rm docker_keycloak-postgres-data

create-network:
	@echo "Creating network 'development'..."
	-@docker network create --gateway 172.28.0.1 --subnet 172.28.0.0/16 development 2>/dev/null; true

status:
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} ps