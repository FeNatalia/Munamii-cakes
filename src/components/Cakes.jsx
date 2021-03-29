export default function Cakes({ title, fileName, price}) {
    const imageObject = require(`../pictures/products-wedding-cakes/${fileName}`);
    const imageURL = imageObject.default;

    const imgURL = `../pictures/products-wedding-cakes/${fileName}`;
    console.log("imgURL", imgURL);

    return (
        <section class="content">
            <article class="picture-item">
                <img src={imageURL} alt={title}/>
                <h3>{title}</h3>
                <h3>{price}kr</h3>
            </article>
        </section>
    );
}