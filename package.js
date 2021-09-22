Package.describe({
	name: 'merlyn:visitor-server',
	version: '0.0.5',
	summary: 'Server-side infrastructure for tracking visitors to your site.',
	git: 'https://github.com/BenjaminMerlynS/visitor-server',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('2.4');

	// ====== BUILT-IN PACKAGES =======

	api.use([
		'mongo'
		, 'underscore'
	], 'server');

	// ====== 3RD PARTY PACKAGES =======

	// ====== BOTH =======

	// ====== SERVER =======
	api.addFiles([
		'server/lib/visitor.js'
		, 'server/publications/visitor.js'
		, 'server/methods/identifyVisitor.js'
	], 'server');

	// ====== CLIENT =======

	// ====== EXPORTS =======

	api.export('Visitor');
});

Package.onTest(function(api) {
	api.use('tinytest');
});
