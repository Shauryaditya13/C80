var studentarray=[];
function Submit(){
    var displayarray=[];
    for(var i=1; i<=4; i++){
    var name=document.getElementById("name"+i).value;
    studentarray.push(name);
    }
    console.log(studentarray);
    for(j=0; j<studentarray.length;j++){
        displayarray.push("<h4> name-"+studentarray[j]+"</h4>");
        console.log(displayarray);
    }
    document.getElementById("output").innerHTML=displayarray;
    var remove_commas=displayarray.join("");
    document.getElementById("displaywithoutcommas").innerHTML=remove_commas;
    document.getElementById("Submitbutton").style.display="none";
    document.getElementById("Sortingbutton").style.display="inline";
}
function Sorting(){
    studentarray.sort();
    var displayarray2=[];
    for(j=0; j<studentarray.length;j++){
        displayarray2.push("<h4> name-"+studentarray[j]+"</h4>");
        console.log(displayarray2);
    }
    document.getElementById("output").innerHTML=displayarray2;
    var remove_commas=displayarray2.join("");
    document.getElementById("displaywithoutcommas").innerHTML=remove_commas;
}