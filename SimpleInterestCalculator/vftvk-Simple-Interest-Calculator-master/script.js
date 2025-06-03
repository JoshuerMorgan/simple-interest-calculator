// creating a shorthand to document.getElementById
const $ = (id) => document.getElementById(id)

function compute()
{
    p = document.getElementById("principal").value;
    
    // initializing varibles 
    let principal = Number($("principal").value)
    let rate = $("rate").value
    let years = $("years").value
    let interest = principal * years * rate / 100
    let amount = parseInt(principal) + parseFloat(interest)
    let result = $("result")
    let year = new Date().getFullYear() + parseInt(years)

    if (principal <=0 || isNaN(principal)){
        alert("Enter a postive number") 
        $("principal").focus()
    }else if(interest == "") {
        alert("Select number of years ")

    }
    else{
        result.innerHTML = `If you deposit \$${principal},<br>
at an interest rate of ${rate}%.<br>
You will receive an amount of \$${amount},<br>
in the year ${year}<br></br>   `}

    
}

function updateRate()
{
    let rateval = $("rate").value;
    let ratedisplay = $("rate_val")
    
    ratedisplay.innerText = rateval
}

