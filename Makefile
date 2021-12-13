lint:
	npx eslint .
install:
	npm ci
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test coverage:
	npm test -- --coverage --coverageProvider=v8
