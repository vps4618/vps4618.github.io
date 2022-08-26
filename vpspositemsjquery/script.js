"use strict";

$(document).ready(() => {
    $('#input').keyup((e)=>{
        setTimeout(() => {
            const selection = $('#selector').val();
            const input = $('#input').val();
            function getData(selectType){
                $.ajax({
                    type:'get',
                    contentType: 'application/json',
                        url : `https://vpsposapi.herokuapp.com/items/${selectType}/${input}`,
                        success : function(result){
                            let items ="";
    
                            for (const item of result) {
                                items+=`<tr onclick="viewDetails(${item.ITEM_ID})">
                                        <th scope="row">${item.ITEM_ID}</th>
                                        <td>${item.ItemName}</td>
                                        <td>${item.SinhalaName}</td>
                                        <td>${item.Barcode}</td>
                                        <td>${item.Cost}</td>
                                        <td>${item.Wholesale}</td>
                                        <td>${item.BillPrice}</td>
                                        <td>${item.Price}</td>
                                        </tr>`;
                            }
                            //items+="<script>function viewDetails(id){$('#search').hide();$.ajax({type:'get',contentType: 'application/json',url : `https://vpsposapi.herokuapp.com/items/id/${id}`,success : function(result){document.getElementById('details').innerHTML = `<div class='card border-dark mb-3' style='max-width: 18rem;'><div class='card-header'>Id : ${result[0].ITEM_ID}</div><div class='card-body text-dark'><h5 class='card-title'>${result[0].ItemName}</h5><ul class='list-group list-group-flush'><li class='list-group-item'>Sinhala Name : ${result[0].SinhalaName}</li><li class='list-group-item'>Barcode : ${result[0].Barcode}</li><li class='list-group-item'>Cost Price : ${result[0].Cost}</li><li class='list-group-item'>Wholesale Price : ${result[0].Wholesale}</li><li class='list-group-item'>Bill Price : ${result[0].BillPrice}</li><li class='list-group-item'>Sale Price : ${result[0].Price}</li></ul><button type='button' class='btn btn-secondary' onclick='goBack()'>Back to items page</button></div></div>`;}});function goBack(){$('#details').hide();$('#search').show();}}</script>";
                            document.getElementById('data').innerHTML = items;

                        }
                    }
                );            
            }
            if(selection == "1"){
                try{
                    getData('name');
                }catch(err){
                    alert(err);
                }
            }else if(selection == 3){
                try{
                    getData("barcode");
                    }catch(err){
                        alert(err);
                    }
            }else if(selection == 2){
                try{
                    getData("sinhalaname");
                    }catch(err){
                        alert(err);
                    }
            }else if(selection == 4){
                try{
                    getData("costprice");
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 5){
                try{
                    getData("wholesaleprice");    
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 6){
                try{
                    getData("billprice");
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 7){
                try{
                   getData("saleprice");
                    }catch(err){
                        alert(err);
                    } 
            }else{
                alert('please select type of input');
            }
        },1000)

    });

});