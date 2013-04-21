TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
TIMEOUT = 30000
MOCHA_OPTS =
REPORTER = tap
JSCOVERAGE = ./node_modules/jscover/bin/jscover
NPM_INSTALL_PRODUCTION = PYTHON=`which python2.6` NODE_ENV=production npm install
NPM_INSTALL_TEST = PYTHON=`which python2.6` NODE_ENV=test npm install

install:
	@$(NPM_INSTALL_PRODUCTION)

install-test:
	@$(NPM_INSTALL_TEST)

test: install-test
	@NODE_ENV=test node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) --timeout $(TIMEOUT) $(MOCHA_OPTS) $(TESTS)

cov:
	@rm -rf cov
	@$(JSCOVERAGE) --exclude=test --exclude=assets --exclude=public \
		--exclude=bin --exclude=config --exclude=tmp --exclude=lib . cov
	@cp -rf ./node_modules ./test ./assets ./config ./dispatch.js ./lib ./bin cov

test-cov: cov
	@$(MAKE) -C ./cov test REPORTER=dot
	@$(MAKE) -C ./cov test REPORTER=html-cov > coverage.html

clean:
	@rm -rf coverage.html cov

.PHONY: check install install-test test test-cov cov clean
	