// export default function MyComponent({ title, fileName}) {
//     const imageObject = require(`../images/${fileName}`);
//     const imageURL = imageObject.default;

//     const imgURL = `../images/${fileName}`;
//     console.log("imgURL", imgURL);

//     return (
//         <article>
//             <h2>{title}</h2>
//             <img src={imageURL} alt={title}/>
//         </article>
//     );
// }

export default function MyComponent({ title, fileName, price}) {
    const imageObject = require(`../pictures/products-cupcakes/${fileName}`);
    const imageURL = imageObject.default;

    const imgURL = `../pictures/products-cupcakes/${fileName}`;
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
