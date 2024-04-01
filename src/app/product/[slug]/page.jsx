"use client"
import React, { useState, useEffect } from 'react';
import styles from './singleProduct.module.css';

const reqUrl = 'http://localhost/wordpress/pratice/wp-json/wp/v2';

const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const req = await fetch(`${reqUrl}/products?acf_format=standard&_fields=id,slug,title,acf,large_img,summery&slug=${params.slug}`);
        if (!req.ok) {
          throw new Error('Failed to fetch product data');
        }
        const products = await req.json();
        if (products && products.length > 0) {
          setProduct(products[0]);
        } else {
          throw new Error('No product found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.singlepost_wrapper}>
      {product && (
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.single_post_img}>
              <img src={product.acf.large_img} alt={product.title.rendered} width='100%' />
            </div>
          </div>
          <div className="col-lg-8">
            <div className={styles.single_post_description}>
              <h2>{product.title.rendered}</h2>
              <div className={styles.auth_publish_row}>
                <div className={styles.publisher_col}>
                  <img src="/tech_project02.jpg" alt="" />
                  <div className={styles.publisher_despo}>
                    <span><b>Published</b></span>
                    <span>1.06.2023</span>
                  </div>
                </div>
              </div>
              <p>{product.acf.summery}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
