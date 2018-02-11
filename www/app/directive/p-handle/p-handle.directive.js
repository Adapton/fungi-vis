var angular = window.angular;

var templateContext = require.context('./template', true, /\.html$/i);
var fallbackTemplate = require('./fallback.html');

var templates = {};

templateContext.keys()
	.forEach(path => templates[path] = templateContext(path));

module.exports = function($parse, $compile)
{
	return {
		restrict: 'E',
		link(scope, elem, attrs)
		{
			var $ctrl = scope.$ctrl;
			
			var type = attrs['type'] || 'exp';
			
			if($ctrl.isNode($ctrl.node))
			{
				var id = `./${type}/${$ctrl.node[0]}.html`;
				
				// TODO find a proper home for this mapping
				if($ctrl.node._type)
				{
					$ctrl.node._type.category = {
						'nametm': 'sort',
						'index': 'sort',
						'val': 'type',
						'exp': 'ceffect',
					}[type];
				}
			}
			
			var elems = $compile(id in templates ? templates[id] : fallbackTemplate)(scope);
			angular.element(elem).append(elems).html();
		}
	};
}