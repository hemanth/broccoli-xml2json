'use strict';
var Filter = require('broccoli-filter');
var parser = require('xml2json');

function mdFilter(inputTree, options) {
	if (!(this instanceof mdFilter)) {
		return new mdFilter(inputTree, options);
	}

	this.inputTree = inputTree;
}

mdFilter.prototype = Object.create(Filter.prototype);
mdFilter.prototype.constructor = mdFilter;

mdFilter.prototype.extensions = ['xml'];
mdFilter.prototype.targetExtension = 'json';

mdFilter.prototype.processString = function (xml) {
	return parser.toJson(xml);
};

module.exports = mdFilter;
