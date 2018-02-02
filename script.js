var userData = [],i;
var fn,ln,dob,email,mobile;
$.getJSON( "Users.json", function(json){
    //generate a dynamic table using json
    //build userThreeDisplay() method with required args.. userThreeDisplay(json[0].firstname, lastname, dob, )
   // var userData = JSON.parse(json);
    for(var i = 0;i<json.length;i++){
        userData.push(json[i]);
    }
    console.log(json);

    var col = [];
    for (var i = 0; i < json.length; i++) {
        for (var key in json[i]) {
            if (col.indexOf(key) === -1)
                col.push(key);
            else {
                break;
            }
        }
    }
     //creating a dynamic table
    var table = document.createElement("table");
    table.setAttribute("class", "table table-hover");
    var tr = table.insertRow(-1);
    console.log(col.length);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    var buttonArr = [];
    var target = "modal",btnId= "btn";

    for(i = 0;i<json.length;i++){
        target = "#modal";
        btnId = "btn"
        buttonArr[i]=document.createElement("button");
        buttonArr[i].setAttribute("type","button");
        btnId = btnId+i;
        buttonArr[i].setAttribute("id",btnId);
        buttonArr[i].setAttribute("class","btn btn-primary");
        buttonArr[i].setAttribute("data-toggle","modal");
        target = target +i;
        //console.log(target+"-->");
        buttonArr[i].setAttribute("data-target",target);
        fn = userData[i].FirstName;ln = userData[i].LastName;dob = userData[i].DOB;email = userData[i].eMail; mobile = userData[i].Mobile;
        buttonArr[i].setAttribute("onclick","userOneDisplay(fn, ln,dob,email,mobile)");
        buttonArr[i].innerHTML= "View";
    }
    //adding table data <td>
    var id = "sub",ele,bId=[];//ele for getting button object
    for (var i = 0; i < json.length; i++) {
        id = "sub";
        tr = table.insertRow(-1);
        console.log(tr);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json[i][col[j]];
            console.log(tabCell.innerHTML+"------------");
            if(tabCell.innerHTML == "undefined") {
                id = id+i;
                bId.push(id);
                tabCell.setAttribute("id",id);
            }
        }
    }

    // adding dynamic table to html
    var divContainer = document.getElementById("displayTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    //adding buttons into dynamic table
    for(var i = 0;i<bId.length;i++){
        ele= document.getElementById(bId[i]);
        ele.appendChild(buttonArr[i]);

    }
});

function userOneDisplay(arg1, arg2, arg3, arg4, arg5){
    //window.location.href = "displayUserDetails.html";
    //console.log(document.getElementById("fn1"));
    //document.getElementById("userOne").innerText = arg1;
    document.getElementById("m1fn").innerHTML= arg1;
    document.getElementById("m1ln").innerHTML = arg2;
    document.getElementById("m1dob").innerHTML = arg3;
    document.getElementById("m1email").innerHTML = arg4;
    document.getElementById("m1mobile").innerHTML = arg5;
}
