install:
	npm ci

brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run	

fix:
	npx eslint --fix .

lint:
	npx eslint .
