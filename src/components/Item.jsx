import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

// Test image
// import testImage from '../assets/images/25-Pikachu.png';

const Item = props => {
  // console.log('Props from ItemHome: ', props);

  const isLegendary = props.is_legendary
    ? 'color-text-yellow'
    : 'color-text-dark';

  const img = new Image();

  let imageURL = props.image_link;
  let googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

  img.crossOrigin = 'Anonymous';
  img.src = props.image_link && googleProxyURL + encodeURIComponent(imageURL);

  return (
    <LazyLoad height={250}>
      <article className='ItemHome'>
        <Link to={`/${props.number}/${props.name}`}>
          <div className='ItemHome--fakeBG'>
            <div className='ItemHome--realBG'>
              <div className='ItemHome-realBG--img'>
                <img src={img.src} alt={props.name} />
              </div>
              <h2 className={`${isLegendary}`}>{props.name}</h2>
              <p className={`${isLegendary}`}>#{props.number}</p>
              <h3 className={`${isLegendary}`}>{props.classification}</h3>
              <div className='ItemHome-realBG--type'>
                {props.type2 ? (
                  <>
                    {props.type1 === 'bug' ||
                    props.type1 === 'grass' ||
                    props.type1 === 'ground' ? (
                      <p className='color-green round01'>{props.type1}</p>
                    ) : props.type1 === 'dark' ||
                      props.type1 === 'normal' ||
                      props.type1 === 'steel' ? (
                      <p className='color-dark round01'>{props.type1}</p>
                    ) : props.type1 === 'dragon' ||
                      props.type1 === 'flying' ||
                      props.type1 === 'water' ||
                      props.type1 === 'ice' ? (
                      <p className='color-blue round01'>{props.type1}</p>
                    ) : props.type1 === 'electric' || props.type1 === 'fire' ? (
                      <p className='color-yellow round01'>{props.type1}</p>
                    ) : props.type1 === 'fairy' ||
                      props.type1 === 'ghost' ||
                      props.type1 === 'poison' ? (
                      <p className='color-purple round01'>{props.type1}</p>
                    ) : props.type1 === 'fighting' ||
                      props.type1 === 'psychic' ||
                      props.type1 === 'rock' ? (
                      <p className='color-red round01'>{props.type1}</p>
                    ) : (
                      ''
                    )}

                    {props.type2 === 'bug' ||
                    props.type2 === 'grass' ||
                    props.type2 === 'ground' ? (
                      <p className='color-green round02'>{props.type2}</p>
                    ) : props.type2 === 'dark' ||
                      props.type2 === 'normal' ||
                      props.type2 === 'steel' ? (
                      <p className='color-dark round02'>{props.type2}</p>
                    ) : props.type2 === 'dragon' ||
                      props.type2 === 'flying' ||
                      props.type2 === 'water' ||
                      props.type2 === 'ice' ? (
                      <p className='color-blue round02'>{props.type2}</p>
                    ) : props.type2 === 'electric' || props.type2 === 'fire' ? (
                      <p className='color-yellow round02'>{props.type2}</p>
                    ) : props.type2 === 'fairy' ||
                      props.type2 === 'ghost' ||
                      props.type2 === 'poison' ? (
                      <p className='color-purple round02'>{props.type2}</p>
                    ) : props.type2 === 'fighting' ||
                      props.type2 === 'psychic' ||
                      props.type2 === 'rock' ? (
                      <p className='color-red round02'>{props.type2}</p>
                    ) : (
                      ''
                    )}
                  </>
                ) : (
                  <>
                    {props.type1 === 'bug' ||
                    props.type1 === 'grass' ||
                    props.type1 === 'ground' ? (
                      <p className='color-green roundAlone'>{props.type1}</p>
                    ) : props.type1 === 'dark' ||
                      props.type1 === 'normal' ||
                      props.type1 === 'steel' ? (
                      <p className='color-dark roundAlone'>{props.type1}</p>
                    ) : props.type1 === 'dragon' ||
                      props.type1 === 'flying' ||
                      props.type1 === 'water' ||
                      props.type1 === 'ice' ? (
                      <p className='color-blue roundAlone'>{props.type1}</p>
                    ) : props.type1 === 'electric' || props.type1 === 'fire' ? (
                      <p className='color-yellow roundAlone'>{props.type1}</p>
                    ) : props.type1 === 'fairy' ||
                      props.type1 === 'ghost' ||
                      props.type1 === 'poison' ? (
                      <p className='color-purple roundAlone'>{props.type1}</p>
                    ) : props.type1 === 'fighting' ||
                      props.type1 === 'psychic' ||
                      props.type1 === 'rock' ? (
                      <p className='color-red roundAlone'>{props.type1}</p>
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
  );
};

export default Item;
