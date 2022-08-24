$(document).ready(() => {
    $('#input').keyup((e)=>{
        setTimeout(() => {
            $('#fake').hide();
            const selection = $('#selector').val();
            const input = $('#input').val();
            if(selection == "1"){
                try{
                $.ajax({
                    type:'get',
                    contentType: 'application/json',
                        url : `https://vpsposapi.herokuapp.com/items/name/${input}`,
                        success : function(result){
                            let items ="";
                            items+=`        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                <th scope="col">Item Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Sinhala Name</th>
                                                <th scope="col">Barcode</th>
                                                <th scope="col">Cost Price</th>
                                                <th scope="col">Wholesale Price</th>
                                                <th scope="col">Bill Price</th>
                                                <th scope="col">Sale Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>`;
    
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
                            items+=`</tbody>
                                        </table>`;
                                        document.getElementById('tbldata').innerHTML = items;
                        }
                    }
                );
                }catch(err){
                    alert(err);
                }
            }else if(selection == 3){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/barcode/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    }
            }else if(selection == 2){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/sinhalaname/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    }
            }else if(selection == 4){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/costprice/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 5){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/wholesaleprice/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 6){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/billprice/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    } 
            }else if(selection == 7){
                try{
                    $.ajax({
                        type:'get',
                        contentType: 'application/json',
                            url : `https://vpsposapi.herokuapp.com/items/saleprice/${input}`,
                            success : function(result){
                                let items ="";
                                items+=`        <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Item Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Sinhala Name</th>
                                                    <th scope="col">Barcode</th>
                                                    <th scope="col">Cost Price</th>
                                                    <th scope="col">Wholesale Price</th>
                                                    <th scope="col">Bill Price</th>
                                                    <th scope="col">Sale Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>`;
        
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
                                items+=`</tbody>
                                            </table>`;
                                            document.getElementById('tbldata').innerHTML = items;
                            }
                        }
                    );
                    }catch(err){
                        alert(err);
                    } 
            }else{
                alert('please select type of input');
                $('#fake').show();
            }
        },1000)

    });
});