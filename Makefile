lint:
	npx eslint .
install:
	npm ci
test:
	npm test
test coverage:
	npm test -- --coverage --coverageProvider=v8
