// import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "../lib/image-url";
// import PortableText from "./portableText";
// import Container from "./container";
// import AuthorList from "./author-list";

// import styles from "./blog-post.module.css";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          image goes here
          {/* <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          /> */}
        </div>
      )}
      <div>
        <h1>{title}</h1>
        {/* {_rawBody && <PortableText blocks={_rawBody} />} */}

        <aside>
          {publishedAt && <p>published at goes here</p>}
          {/* {authors && <AuthorList items={authors} title="Authors" />} */}
          {/* {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )} */}
        </aside>
      </div>
    </article>
  );
}

export default BlogPost;
