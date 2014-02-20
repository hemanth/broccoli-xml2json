'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should convert to json', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.json', 'utf8'),
		fs.readFileSync('fixture/expected.json', 'utf8').trim()
	);
});
