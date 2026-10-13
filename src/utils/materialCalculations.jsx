import data from "../data/mockSuppliers.json";

export function getMaterialTotals() {
  const products = data["3.12"]["sold product"];

  return products.reduce((result, product) => {
    product.materials.forEach((material) => {
      if (!result[material.name]) {
        result[material.name] = 0;
      }

      result[material.name] +=
        material.kg * product.quantity;
    });

    return result;
  }, {});
}

export function getMaterialDetails(materialName) {
  const products = data["3.12"]["sold product"];

  return products
    .filter((product) =>
      product.materials.some(
        (material) => material.name === materialName
      )
    )
    .map((product) => {
      const material = product.materials.find(
        (material) => material.name === materialName
      );

      return {
        id: product.id,
        productName: product.name,
        quantity: product.quantity,
        kgPerProduct: material.kg,
        totalKg: material.kg * product.quantity,
      };
    });
}