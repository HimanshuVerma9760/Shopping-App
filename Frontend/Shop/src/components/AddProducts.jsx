export default function AddProducts() {
  async function onSubmitHamdler(event) {
    event.preventDefault();

    const formData = {
      title: event.target.name.value,
      author: event.target.author.value,
      url: event.target.url.value,
      desc: event.target.desc.value,
      price: parseFloat(event.target.price.value),
    };
    try {
      await fetch("http://localhost:3000/product/add-product", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={(event) => onSubmitHamdler(event)}>
          <div>
            <label htmlFor="name">Title of your book</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label htmlFor="price">Price of your book</label>
            <input type="number" name="price" required />
          </div>
          <div>
            <label htmlFor="author">Author of the book</label>
            <input type="text" name="author" required />
          </div>
          <div>
            <label htmlFor="desc">Description of your book</label>
            <input type="text" name="desc" required />
          </div>
          <div>
            <label htmlFor="url">url of your book's cover photo</label>
            <input type="text" name="url" required />
          </div>
          <div>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
}
