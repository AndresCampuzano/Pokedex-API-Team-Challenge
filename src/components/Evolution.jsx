import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Evolution = ({ number }) => {
  const [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    fetch(`https://pokdex-master-devs.uc.r.appspot.com/api/pokemon/${number}`)
      .then(response => response.json())
      .then(response =>
        setDataRender({
          error: response.error,
          status: response.status,
          body: response.body,
          imageCORSS: response.body.image_link
        })
      )
      .catch(e => console.log('Error: ', e));
  }, [number]);

  // CORSS--------
  const img = new Image();
  let imageURL = dataRender.imageCORSS && dataRender.imageCORSS;
  let googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
  img.crossOrigin = 'Anonymous';
  img.src =
    dataRender.imageCORSS && googleProxyURL + encodeURIComponent(imageURL);
  // End CORSS--------

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {dataRender.body ? (
        <>
          <LazyLoad height={250}>
            <article className='ItemHome'>
              <Link
                to={`/${dataRender.body.number}/${dataRender.body.name}`}
                onClick={scrollUp}
              >
                <div className='ItemHome--fakeBG'>
                  <div className='ItemHome--realBG'>
                    <div className='ItemHome-realBG--img'>
                      <img src={img.src} alt={dataRender.body.name} />
                    </div>
                    <h2
                      className={`${
                        dataRender.body.is_legendary
                          ? 'color-text-yellow'
                          : 'color-text-dark'
                      }`}
                    >
                      {dataRender.body.name}
                    </h2>
                    <p
                      className={`${
                        dataRender.body.is_legendary
                          ? 'color-text-yellow'
                          : 'color-text-dark'
                      }`}
                    >
                      #{dataRender.body.number}
                    </p>
                    <h3
                      className={`${
                        dataRender.body.is_legendary
                          ? 'color-text-yellow'
                          : 'color-text-dark'
                      }`}
                    >
                      {dataRender.body.classification}
                    </h3>
                    <div className='ItemHome-realBG--type'>
                      {dataRender.body.type2 ? (
                        <>
                          {dataRender.body.type1 === 'bug' ||
                          dataRender.body.type1 === 'grass' ||
                          dataRender.body.type1 === 'ground' ? (
                            <p className='color-green round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'dark' ||
                            dataRender.body.type1 === 'normal' ||
                            dataRender.body.type1 === 'steel' ? (
                            <p className='color-dark round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'dragon' ||
                            dataRender.body.type1 === 'flying' ||
                            dataRender.body.type1 === 'water' ||
                            dataRender.body.type1 === 'ice' ? (
                            <p className='color-blue round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'electric' ||
                            dataRender.body.type1 === 'fire' ? (
                            <p className='color-yellow round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'fairy' ||
                            dataRender.body.type1 === 'ghost' ||
                            dataRender.body.type1 === 'poison' ? (
                            <p className='color-purple round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'fighting' ||
                            dataRender.body.type1 === 'psychic' ||
                            dataRender.body.type1 === 'rock' ? (
                            <p className='color-red round01'>
                              {dataRender.body.type1}
                            </p>
                          ) : (
                            ''
                          )}

                          {dataRender.body.type2 === 'bug' ||
                          dataRender.body.type2 === 'grass' ||
                          dataRender.body.type2 === 'ground' ? (
                            <p className='color-green round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : dataRender.body.type2 === 'dark' ||
                            dataRender.body.type2 === 'normal' ||
                            dataRender.body.type2 === 'steel' ? (
                            <p className='color-dark round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : dataRender.body.type2 === 'dragon' ||
                            dataRender.body.type2 === 'flying' ||
                            dataRender.body.type2 === 'water' ||
                            dataRender.body.type2 === 'ice' ? (
                            <p className='color-blue round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : dataRender.body.type2 === 'electric' ||
                            dataRender.body.type2 === 'fire' ? (
                            <p className='color-yellow round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : dataRender.body.type2 === 'fairy' ||
                            dataRender.body.type2 === 'ghost' ||
                            dataRender.body.type2 === 'poison' ? (
                            <p className='color-purple round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : dataRender.body.type2 === 'fighting' ||
                            dataRender.body.type2 === 'psychic' ||
                            dataRender.body.type2 === 'rock' ? (
                            <p className='color-red round02'>
                              {dataRender.body.type2}
                            </p>
                          ) : (
                            ''
                          )}
                        </>
                      ) : (
                        <>
                          {dataRender.body.type1 === 'bug' ||
                          dataRender.body.type1 === 'grass' ||
                          dataRender.body.type1 === 'ground' ? (
                            <p className='color-green roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'dark' ||
                            dataRender.body.type1 === 'normal' ||
                            dataRender.body.type1 === 'steel' ? (
                            <p className='color-dark roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'dragon' ||
                            dataRender.body.type1 === 'flying' ||
                            dataRender.body.type1 === 'water' ||
                            dataRender.body.type1 === 'ice' ? (
                            <p className='color-blue roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'electric' ||
                            dataRender.body.type1 === 'fire' ? (
                            <p className='color-yellow roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'fairy' ||
                            dataRender.body.type1 === 'ghost' ||
                            dataRender.body.type1 === 'poison' ? (
                            <p className='color-purple roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : dataRender.body.type1 === 'fighting' ||
                            dataRender.body.type1 === 'psychic' ||
                            dataRender.body.type1 === 'rock' ? (
                            <p className='color-red roundAlone'>
                              {dataRender.body.type1}
                            </p>
                          ) : (
                            'No API'
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </LazyLoad>
        </>
      ) : (
        'This Pokémon does not have evolutions'
      )}
    </>
  );
};

export default Evolution;
