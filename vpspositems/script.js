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
                                items+=`<tr>
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