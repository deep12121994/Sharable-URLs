var url_val = document.getElementById("url").innerText;

function submit(){
  var temp_url = url_val;
  console.log("url:"+ url_val);
  var name_val = document.getElementById("name").value;
  console.log(name_val);

  var year_val = document.getElementById("year").value;
  console.log(year_val);

  if(name_val !== "" && year_val === "")
  {
    temp_url += "?name="+name_val;
  }
  if (year_val !== "" && name_val === "")
  {
    temp_url += "?year="+year_val;
  }

  if(name_val !== "" && year_val !== ""){
    temp_url += "?name="+name_val + "&" + "year="+year_val;
  }

  document.getElementById("url").innerText = temp_url;
}
