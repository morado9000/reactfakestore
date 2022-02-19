function swap(productArray, low, high) {
    const product = productArray[low];
    productArray[low] = productArray[high];
    productArray[high] = product;
  }
  
  function partition(productArray, low, high) {
      const pivot = Number(productArray[high].price);
      let i=(low-1);

      for(var j=low; j<=high-1; j++){
          if(Number(productArray[j].price) < pivot){
              i++;
              swap(productArray,i,j);
          }
      }
      swap(productArray, i+1, high);
      return(i+1);
  }
  

  function partitionReverse(productArray, low, high) {
    const pivot = Number(productArray[high].price);
    let i=(low-1);

    for(var j=low; j<=high-1; j++){
        if(Number(productArray[j].price) > pivot){
            i++;
            swap(productArray,i,j);
        }
    }
    swap(productArray, i+1, high);
    return(i+1);
}
  function quickSortProducts(productArray, low, high) {

    if(low < high){
        let index = partition(productArray, low, high);
        quickSortProducts(productArray, low, index - 1);
        quickSortProducts(productArray, index+1, high);
    }
    
  }

  function quickSortProductsReverse(productArray, low, high) {

    if(low < high){
        let index = partitionReverse(productArray, low, high);
        quickSortProductsReverse(productArray, low, index - 1);
        quickSortProductsReverse(productArray, index+1, high);
    }
    
  }

  export {quickSortProducts, quickSortProductsReverse };