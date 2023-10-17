function createProductList(userCart) {
    const productList = [];
  
    userCart.forEach(item => {
      const productId = item.product_id; 
      const productName = item.name;
  
      const existingProduct = productList.find(product => product.product_id === productId);
      if (!existingProduct) {
        productList.push({ product_id: productId, name: productName });
      }
    });
  
    return productList;
  }
  
  const userCart = [
    { product_id: '123', name: 'Product A' },
    { product_id: '456', name: 'Product B' },
    { product_id: '123', name: 'Product A' }, 
    { product_id: '789', name: 'Product C' },
  ];
  
  const productSelection = createProductList(userCart);
  console.log(productSelection);