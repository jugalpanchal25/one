function validateFirstName()
{
	var fName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(rel.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<span style='color:white;'>&#10004;</span>";
        return true;		
	}
	else
	{
		document.getElementById("firstNamePrompt").style.color = "red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong><span style='color:red;'>&#10006;</span></strong>";
		return false;
	}
}

function validateLastName()
{
	var lName = document.getElementById("lastName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(rel.test(lName))
	{
		document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<span style='color:white;'>&#10004;</span>";
        return true;		
	}
	else
	{
		document.getElementById("lastNamePrompt").style.color = "red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong><span style='color:red;'>&#10006;</span></strong>";
		return false;
	}
}

function validatePhoneNumber()
{
	var pNumber = document.getElementById("phoneNumber").value;
	var rel = /^\d{10}$/;
	
	if(rel.test(pNumber))
	{
		document.getElementById("phoneNumberPrompt").style.color = "green";
		document.getElementById("phoneNumberPrompt").innerHTML = "<span style='color:white;'>&#10004;</span>";
        return true;		
	}
	else
	{
		document.getElementById("phoneNumberPrompt").style.color = "red";
		document.getElementById("phoneNumberPrompt").innerHTML = "<strong><span style='color:red;'>&#10006;</span></strong>";
		return false;
	}
}


function validatequantity()
{
	var qu = document.getElementById("quantity").value;
	var rel = /^[0-9]+$/;
	
	if(rel.test(qu))
	{
		document.getElementById("quantityPrompt").style.color = "green";
		document.getElementById("quantityPrompt").innerHTML = "<span style='color:white;'>&#10004;</span>";
        return true;		
	}
	else
	{
		document.getElementById("quantityPrompt").style.color = "red";
		document.getElementById("quantityPrompt").innerHTML = "<strong><span style='color:red;'>&#10006;</span></strong>";
		return false;
	}
}

function validateprice()
{
	var price = document.getElementById("price").value;
	var rel = /^[0-9]+$/;
	
	if(rel.test(price))
	{
		document.getElementById("pricePrompt").style.color = "green";
		document.getElementById("pricePrompt").innerHTML = "<span style='color:white;'>&#10004;</span>";
        return true;		
	}
	else
	{
		document.getElementById("pricePrompt").style.color = "red";
		document.getElementById("pricePrompt").innerHTML = "<strong><span style='color:red;'>&#10006;</span></strong>";
		return false;
	}
}


