DOCKER_COMPOSE_FILE_PATH?="docker/docker-compose.yaml"

run:
	@npm start

start:
	@echo "Starting containers..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} up -d

stop:
	@echo "Stopping containers..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} stop

clean: soft-clean
	@echo "Deleting named volumes..."
	@docker volume rm docker_postgres-data
	@docker volume rm docker_pgadmin4-data 

soft-clean: stop 
	@docker-compose -f ${DOCKER_COMPOSE_FILE_PATH} rm -f -v

setup:
	@echo "Creating network 'development'..."
	@docker network create --gateway 172.28.0.1 --subnet 172.28.0.0/16 development 2>/dev/null; true
