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