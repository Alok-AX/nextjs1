import React from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import styles from './product.module.css'

const reqUrl = 'http://localhost/wordpress/pratice/wp-json/wp/v2/products?acf_format=standard&_fileds=id,slug,title,acf,large_img,summery'

const Product = async () => {
    const req = await fetch(reqUrl);
    const products = await req.json();

    // console.log('products', products)

    return (
        <div className={styles.blog_wrapper}>
            {products.map(product => (
                <ProductCard key={product.id} 
                title={product.title.rendered} 
                summery={product.acf.summery}
                thumbnail={product.acf.large_img}
                 subtitle={product.acf.category.name}
                  href={`/product/${product.slug}`} />
            ))}
        </div>
    )
}

export default Product