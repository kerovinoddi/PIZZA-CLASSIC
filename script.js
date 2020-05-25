$(document).ready(function(){
    function Order(size, toppings, crust, quantity, type){
        this.Size = size;
        this.Toppings = toppings;
        this.Crust = crust;
        this.Quantity = quantity;
        this.Type = type;
    }
    Order.prototype.Address = function(city,estate,street,housenumber){
        this.City = city;
        this.Estate = estate;
        this.Street = street;
        this.Housenumber = housenumber;
    }     


    $("input#yes").click(function(){ 

        $(".address").show();
        alert("Delivery charge: 200 Ksh");
        alert("Your order will be delivered to your location");
    });

    $("input#no").click(function(){
        
        $(".address").hide();
        $(".address-summary").hide();
    });

    function calculatePizza(sizePrice,quantity,crustPrice,toppingsPrice,test)
    {
        $(".address").show();
        alert("Delivery charge: 200 Ksh");
        alert("Your order will be delivered to your location");
    });

    $("input#no").click(function(){
        
        $(".address").hide();
        $(".address-summary").hide();
    });
        var total= sizePrice * quantity;

        var  results=(total + crustPrice + toppingsPrice+ test);

        
		return result;

	$(document).ready(function(
		$("#newpizza").mouseover(function(){
			$(".click").show();
		}).mouseout(function(){
			$(".click").hide();
		});
		$("#detro").mouseover(function(){
			$(".click").show();
		}).mouseout(function(){
			$(".click").hide();
		});
		$("#naep").mouseover(function(){
			$(".click").show();
		}).mouseout(function(){
			$(".click").hide();
		});
		$(.newyork).click(function(){
			$(newyorktext).toggle();
			$(.newyork).toggle();
		})
		$(.newyorktext).click(function(){
			$(.newyork).toggle(;)
			$(.newyorktext).toggle();
		})
		$(.detroit).click(function(){
			$(.detriottext).toggle();
			$(.detroit).toggle();
		})
		$(.detroittext).click(function(){
			$(.detroit).toggle();
			$(.detroittext).toggle();
		})
		$(.naepolian).click(function(){
			$(.naepoliantext).toggle();
			$(.naepolian).toggle();
		})
		$(.naepoliantext).click(function(){
			$(.naepolian).toggle();
			$(.naepoliantext).toggle();
		})
		$("form.form-group").submit(function(event)
   {
            event.preventDefault();

            

         var type=$('input[name=type]:checked').val();  

            var size =$("input[name='size']:checked").val();
            var sizeSplit = size.split(",");
            var sizePrice = parseInt(sizeSplit[1]);
            
            var crusts =$("input[name='crust']:checked").val();
            var crustSplit = crusts.split(",");
			var crustPrice=parseInt(crustSplit[1]);
			
			var toppings=$("input[name=topping]:checked").val();
			var toppings = toppings.split(",");
			var toppingsPrice = parseaInt(toppingSplit[1]);


			var quantity= parseInt("input.quantity").val();
			var cost= deliveryFee();

			var name= $(.name).val();
			var number= $(.number).val();
			var city= $(.city).val();
			var estate= $(.estate).val();
			var street= $(.street).val();

			var amoumt= $( .col)
});    
    