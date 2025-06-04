/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
let arr=[];

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (let i=0;i<transactions.length;i++){
    const transaction = transactions[i]
    const category = transaction.category;
    const price = transaction.price;

    if (categoryMap[category]){
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  // Convert the map into the desired array of objects
  const result = [];
  for (let category in categoryMap) {
  
    result.push({
      category: category,
      totalSpent: categoryMap[category],
    });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
