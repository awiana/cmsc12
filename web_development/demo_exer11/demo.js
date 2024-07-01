function summarize() {
    var cname = document.getElementById("cname").value;
    var cell = document.getElementById("cell").value;

    document.getElementById("cinfo").innerHTML = "Customer Name: "+cname+"<br>Cell Number: "+cell;

    if (document.getElementById("size_s").checked) {
        document.getElementById("cost").innerHTML = "Cost: &#8369; 80.00";
        document.getElementById("addr").disabled = true;
        document.getElementById("addr").required = false;
    }
    else if (document.getElementById("size_m").checked) {
        document.getElementById("cost").innerHTML = "Cost: &#8369; 100.00";
        document.getElementById("addr").disabled = false;
        document.getElementById("addr").required = true;
    }
    else if (document.getElementById("size_l").checked) {
        document.getElementById("cost").innerHTML = "Cost: &#8369; 120.00";
        document.getElementById("addr").disabled = false;
        document.getElementById("addr").required = true;
    }
}
