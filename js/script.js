// back-end logic

$(document).ready(function () {
    $("#deliver").click(function () { 
       var deliver= alert("Delivery charges: 100ksh ")
        prompt("Enter you name ")
        prompt("Enter your location")
        prompt("Enter your address")
        alert("Your order will be deliver to your location")
        
    });
    
    $("#submit").click(function () {
        $("#receipt").slideToggle();
		$(".all").hide();
		//size checked
		if ($("#small").is(":checked")) {
			document.querySelector('#size').textContent = 'SmallSize:'+ ' 500ksh'
			document.querySelector('#size').style.color = 'black'

		 }
	   else if($("#medium").is(":checked")) {
		document.querySelector('#size').textContent = 'MediumSize:'+ ' 1500ksh'
		document.querySelector('#size').style.color = 'black'

		 }
		 else if(($("#large").is(":checked"))){
			document.querySelector('#size').textContent = 'LargeSize:'+ ' 2500ksh'
			document.querySelector('#size').style.color = 'black'

		 }
		 else{
			 return null
		 }
		 //meat checked
		 if ($("#meat1").is(":checked")) {
			document.querySelector('#meat').textContent = 'Chicken:'+ ' 200ksh'
			document.querySelector('#meat').style.color = 'black'

		 }
	   else if($("#meat2").is(":checked")) {
		document.querySelector('#meat').textContent = 'Sausage:'+ ' 100ksh'
		document.querySelector('#meat').style.color = 'black'                          

		 }
		 else if(($("#meat3").is(":checked"))){
			document.querySelector('meat').textContent = 'Beef:'+ ' 100ksh'
			document.querySelector('#meat').style.color = 'black'

		 }
		 else{
			 return null
		 }
		 //veggies checked
		 if ($("#veggies1").is(":checked")) {
			document.querySelector('#veggies').textContent = 'Tommatoes:'+ ' 100ksh'
			document.querySelector('#veggies').style.color = 'black'

		 }
	   else if($("#veggies2").is(":checked")) {
		document.querySelector('#veggies').textContent = 'Pineaple:'+ ' 100ksh'
		document.querySelector('#veggies').style.color = 'black'

		 }
		 else if(($("#veggies3").is(":checked"))){
			document.querySelector('#veggies').textContent = 'Large size:' +' 2500ksh'
			document.querySelector('#veggies').style.color = 'black'

		 }
		 else{
			 return null
		 }
		 //crust checked
		 if ($("#crust1").is(":checked")) {
			document.querySelector('#crust').textContent = 'Crispy:'+ ' 200ksh'
			document.querySelector('#crust').style.color = 'black'

		 }
	   else if($("#crust2").is(":checked")) {
		document.querySelector('#crust').textContent = 'Stuffed:'+ ' 300ksh'
		document.querySelector('#crust').style.color = 'black'

		 }
		 else if(($("#crust3").is(":checked"))){
			document.querySelector('#crust').textContent = 'Glutten-free:'+ ' 100ksh'
			document.querySelector('#crust').style.color = 'black'

		 }
		 else{
			 return null
		 }
	});
	// cheese checked
	if ($("#cheese1").is(":checked")) {
		document.querySelector('#chees').textContent = 'Regular Cheese: 100ksh'
		document.querySelector('#chees').style.color = 'black'

	 }
   else if($("#cheese2").is(":checked")) {
	document.querySelector('#chees').textContent = 'No cheese : 0ksh'
	document.querySelector('#chees').style.color = 'black'
	 }
	 else if(($("#cheese3").is(":checked"))){
		document.querySelector('#chees').textContent = 'Extra Cheese : 2500ksh'
		document.querySelector('#chees').style.color = 'black'
	 }
	 else{
		 return null
	 }

	 document.querySelector('#deliver').textContent = 'Charges for Delivery' + deliver;
	 document.querySelector('#deliver').style.color = 'black'


    $("#order").click(function () {
        $(".all").slideToggle();
        $("#receipt").hide();
    });
    
});





































