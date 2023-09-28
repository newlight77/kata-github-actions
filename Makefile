#!make

# Makefile for Demo Auth Serve
SHELL := /bin/sh


#export BUILD = $(shell git describe --always)-$(shell date +%Y%m%d%H%M%S)
export TAG = $(shell git describe --abbrev=0 --tags)
#BRANCH = $(shell git branch --show-current)
#export VERSION ?= $(shell git describe --always)
export VERSION ?= latest

$(info version = $(VERSION))


help: ## Display this help screen
	@grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


install:
	@pnpm install

build:
	@yarn build

format:
	@yarn format

lint:
	@yarn lint

dev:
	@yarn dev

start:
	@yarn start

clean:
	@yarn clean
	@find . -name 'node_modules' -exec rm -fr {} \;

test:
	@yarn test

test-logger:
	@yarn test:logger

test-redis-client:
	@yarn test:redis-client

sonar:
	@sonar-scanner -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=thefork -Dsonar.pullrequest.branch=feature/my-new-feature
