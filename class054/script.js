
//collection map

//create a simple collection map
const my_map = new Map();

//set some keys for the const myMap
my_map.set("name", "Gabriel");
my_map.set("age", 20);
my_map.set(1, "Hello world");
my_map.set("number", 1000);
my_map.set(2, 1500);
my_map.set("random", true);

//this function show all datas of the collection
const output_data_collection = ()=>{
    
    //get keys of the colection
    const keys = my_map.keys();
    console.log("keys: " + keys);
    
    //get values of the collection
    const values = my_map.values();
    console.log("values: " + values);
    
    //get size of the collection
    const size_col = my_map.size;
    console.log("size: " + size_col);
   
    //search by a especific key
    const has_name = my_map.has("name");
    console.log("has_name: " + has_name);
    
    //to delete a key
    my_map.delete(1);
    
    //get all the data
    console.log(`name: ${my_map.get("name")}
    age: ${my_map.get("age")}`);
}

//to call function for to show the data
output_data_collection();

