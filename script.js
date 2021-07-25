function compute()
{
   
    var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
   var amount= principal;
   if (principal <= 0)
{
alert("Please a positive number");
return false;
}
   
   
   document.getElementById("result").innerHTML="If you deposit <p style="color:yellow;">"+principal+"</p>,\<br\>at an interest rate of <p style="color:yellow;">"+rate+"%</p>\<br\>You will receive an amount of <p style="color:yellow;">"+amount+"</p>,\<br\>in the year <p style="color:yellow;">"+year+"</p>\<br\>"
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 
