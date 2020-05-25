 
 
 function pizza(){
	this.toppings = [];
	this.size;
	this.notes;
	this.crust = [];
	this.total;
}
pizza.prototype.cost = function() {
	var cost = 0;
	this.toppings.map(function(topping){
		cost += topping;
	});
	var total = cost + this.size;
	this.total = "pizza total is:" + "Ksh" + total.toFixed(2);
};

 $(function() {
	$("#pizzaOrder").submit(function(event){
		event.preventDefault();
		var pizza = new Pizza();
		$("#pizzaForm").fadeIn();
		$("#formShow").fadeIn();
		$("#btn button").hide();
		$("button#addPizza").click(function(){

		});
	});
});