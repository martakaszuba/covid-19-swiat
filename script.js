var tabledata = document.querySelector("#data")
function getapi(){
    $.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var arr =[]
    var d = data.countryitems[0]
    for (var i=1; i<=182; i++){
        arr.push(d[i])
    }
    arr = JSON.stringify(arr)
    $.ajax({
        type: "POST",
        url: 'index.php',
        data: {
            dane:arr
        },
        success: function(feedback)
        {
          final =JSON.parse(feedback)
          tabledata.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Nowe przypadki dzienne</th>
    <th>Wszystkie przypadki</th>
    <th>Łączna liczba zgonów</th>
  </tr>`
          for (var j=1; j<=181; j++){
            tabledata.innerHTML +=`<tr>
    <td>${final[j]["title"]}</td>
    <td>${final[j]["total_new_cases_today"]}</td>
    <td>${final[j]["total_cases"]}</td>
    <td>${final[j]["total_deaths"]}</td>
  </tr>`
}        
}
    })
}
    })
}

 $(document).ready(function(){
     getapi()
 })