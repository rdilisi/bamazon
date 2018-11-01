var inquirer = require ("inquirer")

var mysql = require ("mysql")

var connection = mysql.createConnection({
    user:"root", 
    database:"bamazon_db",
    password: "password"
})
connection.connect()
connection.query("select * from products",function(error,result){
    console.log (result)
    inquirer.prompt([
        {
            name:"q1",
            type:"input",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            name:"q2",
            type:"input",
            message: "How many units of the product they would like to buy?"
        }
    ]).then(function(answers){
        // console.log (answers)
        for (let i = 0; i < result.length; i++) { 
            if(result[i].item_id==answers.q1){
                // console.log (result[i])
                if(result[i].stock_quantity >= answers.q2){
                    console.log("Plenty in stock")
                    //rest in program written here
                    //make a variable new quantity. We get that by subtracting answers.q2 from result[i].stock_quantity
                    var newquantity = result[i].stock_quantity - answers.q2
                    var total = result[i].price * answers.q2
                    //update the database with the new stock quantities
                    //google how to do an update query with sql
                    UPDATE bamazon_db
                    SET stock_quantity = value WHERE item_id = value
                    connection.query('query',function(error,result){
                        //tell the customer they made a successful purchase and how much they were charged

                    })
                }
                else{
                    console.log("Sorry there is not enough in stock")
                }
            }
        }
    })
})

