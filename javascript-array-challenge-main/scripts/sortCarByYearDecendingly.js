function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  //Dita Noviyanti
  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i=0; i<cars.length-1;i++){
    for (let j=0; j<cars.length-1;j++){
      if (result[j].year < result[j+1].year){
        let temp = result[j]
        result[j] = result[j+1]
        result[j+1] = temp
      }
    }
  }
  console.log(result)
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
