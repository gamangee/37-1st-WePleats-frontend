import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigate from './components/Navigate/Navigate';
import Form from './components/Form/Form';
import Accordions from './components/Accordions/Accordions';
import Review from './components/Review/Review';
import './Product.scss';

function Product() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');

  const getUrl = e => {
    setCurrentUrl(e.target.src);
  };

  useEffect(() => {
    fetch(`http://3.35.54.156:3000/product/${id}`, {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setCurrentUrl(data.product.image_url[0].image);
      });
  }, [id]);

  if (!product.id) return;

  return (
    <div className="productBox">
      <main className="product">
        <Navigate product={product} />
        <section className="img">
          <div className="main">
            <img className="mainImg" src={currentUrl} alt="productMainImg" />
          </div>
          <div className="sub">
            <ul className="subImgs">
              {product.image_url &&
                product.image_url.map((item, index) => {
                  return (
                    <li onMouseOver={getUrl} key={index} className="subImg">
                      <img
                        className="subImage"
                        src={item.image}
                        alt="productSubImg"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
        <section className="content">
          <article className="details">
            <div className="brand">
              <img
                className="brandImg"
                src="/images/brandImg.jpg"
                alt="brandImg"
              />
            </div>
            <div className="description">
              <h3 className="title">개성을 살려주는 WePleats</h3>
              블랙, 그레이 모노톤으로만 이루어진 칙칙한 책상은 이제 그만!
              위플리츠는 하루에 대부분을 책상 앞에서 일하는 개발자들의 개성을
              표현해 줄 수 있는 색깔있는 프로덕트를 추천해줍니다.
            </div>
            <div className="detail">
              <h1 className="title">{product.name}</h1>
              <h6 className="text">{product.description}</h6>
              <h6 className="color">color : {product.color}</h6>
              <ul className="detailImgs">
                {product.image_url &&
                  product.image_url.map((item, index) => {
                    return (
                      <li onMouseOver={getUrl} key={index} className="subImg">
                        <img
                          className="img"
                          src={item.image}
                          alt="상세 이미지"
                        />
                      </li>
                    );
                  })}
              </ul>
              <span className="caution">
                모니터에 따라 약간의 색상차이가 발생할 수 있습니다.
              </span>
            </div>
          </article>
          <Accordions product={product} />
        </section>
        <Review product={product} />
      </main>
      <Form product={product} />
    </div>
  );
}

export default Product;
