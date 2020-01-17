var api = {};

var frases = [
	{_id: 0, texto:"I watched the storm, so beautiful yet terrific.", tempo: 16 },
	{_id: 1, texto:"Debuggers don't fix errors, just show then in slow motion.",tempo: 18 },
	{_id: 2, texto:"It was going to be a lonely trip back.", tempo: 14 },
	{_id: 3, texto:"There are two hard tasks in  Computer science: cache invalidation and name things.", tempo: 18 },
	{_id: 4, texto:"Ciências da computação é tão sobre computadores quanto astronomia é sobre telescópios.", tempo: 18 },
	{_id: 5, texto:"In my machine works.", tempo: 8 },
	{_id: 6, texto:"Hardware it's what you kick, software it's what you call slag.", tempo: 16 },
	{_id: 7, texto:"Software working more than embracing documentation.", tempo: 14 },
	{_id: 8, texto:"Then came the night of the first falling star.", tempo: 12},
	{_id: 9, texto:"There're three ways to develop a software. The right way, the wrong way and my way,that looks like thewrong way but faster.", tempo: 24},
	{_id: 10, texto:"The sky was cloudless and of a deep dark blue.", tempo: 12},
	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
