
import React from "react";
import "../styles.css";

/**
 * ProductList.jsx
 * Zeigt mehrere Pflanzenkategorien (z. B. Citrus, Indoor, Herbs).
 * Jede Pflanze hat Thumbnail (Bild), Name und Preis.
 * Bilder werden aus /public/images/ geladen.
 */

const productData = [
  {
    category: "Citrus",
    items: [
      {
        id: "c1",
        name: "Lemon Tree",
        price: 29.99,
        image: "/images/citrus-lemon.jpg",
      },
      {
        id: "c2",
        name: "Orange Tree",
        price: 34.99,
        image: "/images/citrus-orange.jpg",
      },
    ],
  },
  {
    category: "Indoor",
    items: [
      {
        id: "i1",
        name: "Ficus Elastica",
        price: 24.99,
        image: "/images/indoor-ficus.jpg",
      },
      {
        id: "i2",
        name: "Monstera Deliciosa",
        price: 39.99,
        image: "/images/indoor-monstera.jpg",
      },
    ],
  },
  {
    category: "Herbs",
    items: [
      {
        id: "h1",
        name: "Mint",
        price: 4.99,
        image: "/images/herb-mint.jpg",
      },
      {
        id: "h2",
        name: "Basil",
        price: 3.99,
        image: "/images/herb-basil.jpg",
      },
    ],
  },
];

const ProductList = () => {
  return (
    <section className="product-list" aria-label="Plant product categories">
      {productData.map(({ category, items }) => (
        <div key={category} className="category-block">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {items.map((p) => (
              <article className="product-card" key={p.id}>
                <img
                  className="product-thumb"
                  src={p.image}
                  alt={`${p.name} thumbnail`}
                  loading="lazy"
                />
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <div className="product-price">
                    {p.price.toLocaleString(undefined, {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
