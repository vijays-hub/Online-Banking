function transaction()
{
    var selection= document.getElementById("select").value
    // console.log(selection)

    if(selection=="with")
    {
        var descript= document.getElementById("descr").value
        var amount= document.getElementById("amt").value
        console.log("Amount "+amount)

        var withtab= document.getElementById("withTables")

        var row= withtab.insertRow()
        var cell1= row.insertCell(0)
        var cell2= row.insertCell(1)

        cell1.innerHTML= descript
        cell2.innerHTML= amount

        var rem_bal=document.getElementById("currentBal").value
        rem_bal= Number(rem_bal) - Number(amount)
        console.log("Value"+rem_bal)
        document.getElementById("currentBal").value=rem_bal

        // document.getElementById("currentBal").value=Number(document.getElementById("currentBal").value) - Number(amount)

        document.getElementById("lateWith").value= "-"+amount+" "+"for "+descript
        document.getElementById("lateWith").style.color="yellow"
        document.getElementById("lateWith").style.fontFamily="Raleway"
       
    }
    else if(selection=="depos")
    {
        var descript= document.getElementById("descr").value
        var amount= document.getElementById("amt").value

        var deptab= document.getElementById("depTables")

        var row= deptab.insertRow()
        var cell1= row.insertCell(0)
        var cell2= row.insertCell(1)

        cell1.innerHTML= descript
        cell2.innerHTML= amount

        var rem_bal=document.getElementById("currentBal").value
        rem_bal= Number(rem_bal) + Number(amount)
        document.getElementById("currentBal").value=rem_bal

        // document.getElementById("currentBal").value=Number(document.getElementById("currentBal").value) + Number(amount)

        document.getElementById("lateDepo").value= "+"+amount+" "+"for "+descript
        document.getElementById("lateDepo").style.color="yellow"
        document.getElementById("lateDepo").style.fontFamily="Raleway"
       
    }

    else if(selection=="loan")
    {
        var descript= document.getElementById("descr").value
        var amount= document.getElementById("amt").value
        console.log("Amount "+amount)

        var withtab= document.getElementById("withTables")

        var row= withtab.insertRow()
        var cell1= row.insertCell(0)
        var cell2= row.insertCell(1)

        cell1.innerHTML= descript
        cell2.innerHTML= amount

        var rem_bal=document.getElementById("currentBal").value
        rem_bal= Number(rem_bal) - Number(amount)
        console.log("Value"+rem_bal)
        document.getElementById("currentBal").value=rem_bal

        // document.getElementById("currentBal").value=Number(document.getElementById("currentBal").value) - Number(amount)

        document.getElementById("lateWith").value= "-"+amount+" "+"for "+descript
        document.getElementById("lateWith").style.color="yellow"
        document.getElementById("lateWith").style.fontFamily="Raleway"
       
    }

    else if(selection=="recharge")
    {
        var descript= document.getElementById("descr").value
        var amount= document.getElementById("amt").value
        console.log("Amount "+amount)

        var withtab= document.getElementById("withTables")

        var row= withtab.insertRow()
        var cell1= row.insertCell(0)
        var cell2= row.insertCell(1)

        cell1.innerHTML= descript
        cell2.innerHTML= amount

        var rem_bal=document.getElementById("currentBal").value
        rem_bal= Number(rem_bal) - Number(amount)
        console.log("Value"+rem_bal)
        document.getElementById("currentBal").value=rem_bal

        // document.getElementById("currentBal").value=Number(document.getElementById("currentBal").value) - Number(amount)

        document.getElementById("lateWith").value= "-"+amount+" "+"for "+descript
        document.getElementById("lateWith").style.color="yellow"
        document.getElementById("lateWith").style.fontFamily="Raleway"
       
    }

    else if(selection=="bills")
    {
        var descript= document.getElementById("descr").value
        var amount= document.getElementById("amt").value
        console.log("Amount "+amount)

        var withtab= document.getElementById("withTables")

        var row= withtab.insertRow()
        var cell1= row.insertCell(0)
        var cell2= row.insertCell(1)

        cell1.innerHTML= descript
        cell2.innerHTML= amount

        var rem_bal=document.getElementById("currentBal").value
        rem_bal= Number(rem_bal) - Number(amount)
        console.log("Value"+rem_bal)
        document.getElementById("currentBal").value=rem_bal

        // document.getElementById("currentBal").value=Number(document.getElementById("currentBal").value) - Number(amount)

        document.getElementById("lateWith").value= "-"+amount+" "+"for "+descript
        document.getElementById("lateWith").style.color="yellow"
        document.getElementById("lateWith").style.fontFamily="Raleway"
       
    }
}