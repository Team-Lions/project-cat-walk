var parseSizeFirstSkus = function(skus) {
  var sizeFirstSkus = {};
  var size, quantity;
  for (var k in skus) {
    size = skus[k].size;
    quantity = skus[k].quantity;
    sizeFirstSkus[size] = {
      sku_id: k,
      quantity: quantity
    };
  }
  return sizeFirstSkus;
}

export default parseSizeFirstSkus;