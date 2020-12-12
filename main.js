var editIndex;

var person = [];
function gas() {
    var x = $("#first").val();
    var y = $("#second").val();
    var z = $("#third").val();
    var a = $("#fourth").val();
    var b = $("#fifth").val();
    var c = $("#sixth").val();
    var status = $("#status").val();
    var ass = $("#Associate").val();

    if (x == "") {
        $('#one').html("required");
       
    }
   else {
        $('#one').html("");
    }

    if (y == "") {
        $('#two').html("required");
    }
    else {
        $('#two').html("");
    }

    if (z == "") {
        $('#three').html("required");
    }
    else {
        $('#three').html("");    }

    if (a == "") {
        $('#four').html("required");        
    }
    else {
        $('#four').html("");
    }
    
    if (b == "") {
        $('#five').html("required");    
    }
    else {
        $('#five').html("");
    }

    if (c == "") {
        $('#six').html("required");
    }
    else {
        $('#six').html("");
    }
    if (status == "") {
        $('#statusErr').html("required");       
    }
    else {
        $('#statusErr').html("");
    }
    if (ass == "") {
        $('#typErr').html("required");
        return false;
    }
    else {
        $('#typErr').html("");
    }

    var customerObj = {
        amar: x,
        nath: y,
        kavin: z,
        thiva: a,
        vizha:b,
        kiru:c,
        sam:status,
        dad:ass
    };


    person.push(customerObj);
    console.log(person);

console.log(editIndex);
if(editIndex != undefined){
person.splice(editIndex,1);
}

    Vic();
    $('input[type="text"],input[type="number"],input[type="date"],select,textarea').val("");

    // document.forms["myForm"]["first"].value = '';
    // document.forms["myForm"]["second"].value = '';
    // document.forms["myForm"]["third"].value = '';
    // document.forms["myForm"]["fourth"].value = '';
    // document.forms["myForm"]["fifth"].value = '';
    // document.forms["myForm"]["sixth"].value = '';
    // document.forms["myForm"]["status"].value = '';
    // document.forms["myForm"]["Associate"].value = '';

    // var x = $("#first").val();
    // var y = $("#second").val();
    // var z = $("#third").val();
    // var a = $("#fourth").val();
    // var b = $("#fifth").val();
    // var c = $("#sixth").val();
    // var status = $("#status").val();
    // var ass = $("#Associate").val();



}

function Vic() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < person.length; i++) {
        html += "<tr>";
        html += "<td>" + person[i].amar + "</td>";
        html += "<td>" + person[i].dad + "</td>";
        html += "<td>" + person[i].sam+ "</td>";
        html += '<td><button class=" btn btn-success" onclick="Edit(' + i + ')">Edit</button> <button class=" btn btn-info" onclick="Delete(' + i + ')">Delete</button></td>';
    }

    document.getElementById("body").innerHTML = html;
}
function Delete(del) {
    console.log(del);
    person.splice(del, 1);
    Vic();
};
function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(person);
    console.log(person[edi]);
    // document.forms["myForm"]["first"].value = person[edi].amar;
    // document.forms["myForm"]["second"].value = person[edi].nath;
    // document.forms["myForm"]["third"].value = person[edi].kavin;
    // document.forms["myForm"]["fourth"].value = person[edi].thiva;
    // document.forms["myForm"]["fifth"].value = person[edi].vizha;
    // document.forms["myForm"]["sixth"].value = person[edi].kiru;
    // document.forms["myForm"]["status"].value = person[edi].sam;
    // document.forms["myForm"]["Associate"].value = person[edi].dad;
    $("#first").val(person[edi].amar);
    $("#second").val(person[edi].nath);
    $("#third").val(person[edi].kavin);
    $("#fourth").val(person[edi].thiva);
    $("#fifth").val(person[edi].vizha);
    $("#sixth").val(person[edi].kiru);
    $("#status").val(person[edi].sam);
    $("#Associate").val(person[edi].dad);
    
};

