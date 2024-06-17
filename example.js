// U09226075
// Set up example.js.
//Create function.
function main() {
    d3.csv('../data/purchase_orders.csv').then(
        function (d) {
            for (let index = 0; index < d.length; index++) {
                const element = d[index];
                var list = document.getElementById("list");
                var item = document.createElement("li");
                var text = `${element.customerName} - ${element.orderID}: ${element.purchaseAmount}`;
                item.appendChild(document.createTextNode(text));
                list.appendChild(item);
            }
        }
    )
}

