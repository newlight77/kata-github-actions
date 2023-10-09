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

install: ## install all dependencies, propagating from root
	@pnpm install

install-offline: ## install all dependencies, propagating from root
	@pnpm install --offline

build: ## build all packages, propagating from root
	@pnpm build

format: ## format the whole project
	@pnpm format

lint: ## lint the whole project
	@pnpm lint

merge-coverage: ## merge all packages coverage filles into one to publish
	@pnpm coverage:merge

clean: ## clean and delete all node_modules
	@pnpm clean
	@find . -name 'coverage' -exec rm -fr {} \;
	@find . -name 'dist' -exec rm -fr {} \;
	@find . -name 'node_modules' -exec rm -fr {} \;

test: test-unit test-features ## test on all packages, propagating from root

test-unit: ## unit test on all packages, propagating from root
	@pnpm test:unit

test-unit-logger: ## unit test on logger package
	@pnpm test:unit:logger

test-unit-redis-client: ## unit test on redis-client package
	@pnpm test:unit:redis-client

test-features: ## features test on all package, propagating from root
	@pnpm test:features

sonar:
	@sonar-scanner -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=thefork -Dsonar.pullrequest.branch=feature/my-new-feature
