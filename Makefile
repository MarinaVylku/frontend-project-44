install:
	npm ci


publish:
	npm publish --dry-run	

fix:
	npx eslint --fix .

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-divisor:
	node bin/brain-divisor.js
	
