(function(){
	angular.module('myApp', [])
		.controller('appCtrl', [function(){
			this.list = [];
			this.clickButton = function() {
				this.todo.date = Date.now();
				this.list.push(this.todo)
				this.todo = {};
			}
			this.clickList = function(item){
				item.done = !item.done;
			}
		}])
})();
