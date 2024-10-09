const uid = "66f44dfed6b40e6958dfbd49";

export async function productLoader() {
  try {
    const response = await fetch("http://localhost:3000/product/get-products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const myProds = await response.json();
    return myProds; // Explicitly return the data
  } catch (err) {
    console.error(err);
  }
}

export async function cartLoader() {
  const response = await fetch(`http://localhost:3000/cart/my-cart/${uid}`);
  if (!response.ok) {
    throw new Error("Cart Error..!!");
  }
  const cartData = await response.json();
  return cartData;
}

export async function saveforLater() {
  const response = await fetch(
    `http://localhost:3000/cart/save-for-later/${uid}`
  );

  if (!response.ok) {
    throw new Error("saveForLater error..!!");
  }

  const laterItems = await response.json();
  return laterItems;
}
