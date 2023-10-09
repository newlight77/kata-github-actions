
mkdir -p coverage/unit
mkdir -p coverage/features

rm -f coverage/*.json

cp packages/shared-lib/logger/coverage/lcov.info coverage/unit/logger.unit.lcov.info
cp packages/shared-lib/logger/coverage/coverage-final.json coverage/unit/logger.unit.coverage-final.json

cp packages/shared-spi/redis-client/coverage/lcov.info coverage/unit/redis-client.unit.lcov.info
cp packages/shared-spi/redis-client/coverage/coverage-final.json coverage/unit/redis-client.unit.coverage-final.json
