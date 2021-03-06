module.exports = {
	template: `
		<span class="d-inline-block indent" ng-class="{'pl-3': !$ctrl.collapsed}"
			ng-click="$ctrl.collapsed = false; $event.stopPropagation()"
			ng-dblclick="$ctrl.collapsed = true; $event.stopPropagation()">
			<span class="text-warning indent-collapse clickable" ng-if="$ctrl.collapsed">(..)</span>
			<ng-transclude ng-if="!$ctrl.collapsed" />
		</span>`,
	transclude: true,
	bindings: {
		collapsed: '<',
	},
	controller: function(Cursor)
	{
		var $ctrl = this;
		
		$ctrl.cursor = Cursor;
	}
}