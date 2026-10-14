import data from "../data/mockSuppliers.json";

export function getMaterialTotals() {
// Denna funktion hämtar och summerar den totala materialvikten per material.
// Den returnerar ett objekt där varje materialnamn kopplas till den sammanlagda vikten,för alla sålda produkter.
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
// Denna funktion tar emot materialName som är själva materialet,
// Och returnerar material och produkt-info för alla produkter som består av det materialet
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

export function getMaterialTotalKg(materialName) {
//Denna funktion beräknar den totala vikten för ett specifikt material
  const products = getMaterialDetails(materialName);

  return products.reduce(
    (sum, product) => sum + product.totalKg,
    0
  );
}