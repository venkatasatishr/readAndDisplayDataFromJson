$.getJSON( "Users.json", function(json){
    //generate a dynamic table using json
    //build userThreeDisplay() method with required args.. userThreeDisplay(json[0].firstname, lastname, dob, )

    var userData = json;
    console.log(userData);
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
    //col.push("View");
    /*console.log("----------------------------");
    for(var i = 0; i<col.length;i++ )
        console.log(col[i]);*/
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
    for(var i = 0;i<json.length;i++){
        buttonArr[i]=document.createElement("button");
        buttonArr[i].setAttribute("type","button");
        buttonArr[i].setAttribute("class","btn btn-primary");
        buttonArr[i].setAttribute("data-toggle","modal");
        buttonArr[i].setAttribute("data-target","#modalOne");
        buttonArr[i].setAttribute("onclick","userOneDisplay(userData[i].FirstName,userData[i].LastName,userData[i].DOB,userData[i].E-Mail,userData[i].Mobile)");
        buttonArr[i].innerHTML= "View";

    //userOneDisplay(json[i].FirstName,json[i].LastName,json[i].DOB,json[i].E-Mail,json[i].Mobile)
    }
    /*var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","btn btn-primary");
    button.setAttribute("data-toggle","modal");
    button.setAttribute("data-target","");
    button.setAttribute("onclick","userOneDisplay()");
    button.innerHTML= "View";*/
    var id = "sub",ele,bId=[];
    for (var i = 0; i < json.length; i++) {
        id = "sub";
        tr = table.insertRow(-1);
        console.log(tr);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json[i][col[j]];
            console.log(tabCell.innerHTML+"------------");
            if(tabCell.innerHTML == "") {
                id = id+i;
                bId.push(id);
                tabCell.setAttribute("id",id);
                //ele = document.getElementById(id);
                //ele.appendChild(button);

                //tabCell.append("button", "View");
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
    console.log(document.getElementById("fn1"));
    document.getElementById("userOne").innerText = arg1;
    document.getElementById("m1fn").innerText = arg1;
    document.getElementById("m1ln").innerText = arg2;
    document.getElementById("m1dob").innerText = arg3;
    document.getElementById("m1email").innerText = arg4;
    document.getElementById("m1mobile").innerText = arg5;
}
