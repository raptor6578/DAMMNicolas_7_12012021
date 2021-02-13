GREEN=\033[0;32m
ORANGE=\033[0;33m
RED=\033[0;31m
NC=\033[0m

help:
	@echo 'Commands:'
	@echo '  npm-install        install the nodejs dependencies of the project.'
	@echo '  build-backend      Deploy JavaScript files for development'
	@echo '  build-frontend     Deploy JavaScript files for production'
	@echo '  up                 start the production containers'
	@echo '  down               stop the production containers.'
	@echo '  up-dev             start the development containers'
	@echo '  down-dev           stop the development containers.'
	@echo '  prune              shortcut for docker system prune -af. Cleanup inactive containers and cache.'

npm-install:
	@echo "${GREEN}Backend installation in progress...${NC}"
	docker run -v $(shell pwd)/web/server:/app -w /app node:15.3.0 npm install --quiet
	@echo "${GREEN}Frontend installation in progress...${NC}"
	docker run -v $(shell pwd)/web/client:/app -w /app node:15.3.0 npm install --quiet
	@echo "${GREEN}Installation of dependencies completed${NC}"

up:
	docker-compose -f docker-compose.prod.yml up -d

down:
	docker-compose -f docker-compose.prod.yml down

up-dev:
	docker-compose -f docker-compose.dev.yml up

down-dev:
	docker-compose -f docker-compose.dev.yml down

prune:
	docker system prune -af

build-backend:
	docker run -v $(shell pwd)/web/server:/app -w /app node:15.3.0 npm run build

build-frontend:
	docker run -v $(shell pwd)/web/client:/app -w /app node:15.3.0 npm run build
