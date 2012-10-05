window.addEventListener("DOMContentLoaded", function(){
	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	}
	
	function getCheckboxValue(){
		if($('Dishes').checked){
			DishesValue = $('Dishes').value;
		}else{
			DishesValue = "No"
		};
		if($('Sweep').checked){
			SweepValue = $('Sweep').value;
		}else{
			SweepValue = "NO"
		};
		if($('Bathroom').checked){
			BathroomValue = $('Bathroom').value;
		}else{
			BathroomValue = "NO"
		};
		if($('Dust').checked){
			DustValue = $('Dust').value;
		}else{
			DustValue = "NO"
		};
		if($('Trash').checked){
			TrashValue = $('Trash').value;
		}else{
			TrashValue = "NO"
		};
	};
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('chore').style.display = "none"
				break;
			default:
				return false;
		}
	}
	
	function storeData() {
		var id 					=Math.floor(Math.random()*1000001);
		var chore				= {};
			chore.fname			= ["First Name:", $('fname').value];
			chore.lname			= ["Last Name:", $('lname').value];
			chore.group			= ["To Be Done:",choreValue];
			chore.rate			= ["Rate", $('rate').value];
			chore.date			= ['Date', $('date').value];
			chore.reward		= ["Anticipated Reward", $('reward').value];
			
		localStorage.setItem(id, JSON.stringify(chore));
		alert("Chore List Saved!");
	}
	
	function getData(){
		toggleControls('on');
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "chore");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('chore').style.display = "block"
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+ " "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All data deleted!");
			window.location.reload();
			return false;
		}
	}
	
	var RewardsGroup = ["N/A", "N/A", "Toys", "Lego", "Hotwheels", "Barbie Doll", "My Little Pony", "Money", "$1", "$5", "$10", "Other"];
		choreValue = "No"
	;	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var accept = $('submit');
	accept.addEventListener("click", storeData);

});