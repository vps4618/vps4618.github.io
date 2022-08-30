let json!:string;

var items:any = [];

const readFile =async () => {
    const file = await fetch("https://raw.githubusercontent.com/vps4618/items/main/items.txt");
    json= await file.text();
    const jsonWithoutNewLines =json.replaceAll('\n','');
    const  jsonWithoutSpacing= jsonWithoutNewLines.replaceAll('  ','');
    const jsonData =JSON.parse(jsonWithoutSpacing);
    for(var i in jsonData)
    items.push(jsonData[i]);
}

readFile();

export default items;