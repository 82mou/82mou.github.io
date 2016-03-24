(function(){
	angular.module('myApp', [])
		.component('todo', {
			controllerAs: 'app',
			controller: function() {
				this.list = [];
				this.clickButton = () => {
					this.drawLine();
				};
				this.drawLine = ()  => {
					this.todo.date = Date.now();
					this.list.push(this.todo);
					this.todo = {};
				};
				this.clickList = (item) => {
					item.done = !item.done;
				};
				this.clickDeleteButton = (item) => {
					var idx = this.list.indexOf(item);
					if(idx >=0){
						this.list.splice(idx, 1);
					}
				};
			},
			templateUrl: 'template/template.html'
		})
})();
