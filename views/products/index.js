module.exports = ({ products }) => {
    const renderedProducts = products.map(products => {
        return `
            <li>${product.title} - ${product.price}</li>
        `;
    }).join('');

    return `
        <ul>
        ${renderedProducts}
        </ul>
    `;
};