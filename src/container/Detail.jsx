import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Header
import Header from '../components/Header.jsx';

// Evolution
import Evolution from '../components/Evolution.jsx';

// Back btn
import backArrow from '../assets/images/back-btn.svg';

// Test
// import testImage from '../assets/images/39-Jigglypuff.png';

const Detail = props => {
  const [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/pokemon/${props.match.params.number}`
    )
      .then(response => response.json())
      .then(response =>
        setDataRender({
          error: response.error,
          status: response.status,
          body: response.body,
          imageCORSS: response.body.image_link
        })
      )
      .catch(e => console.log(e));
  }, [props.match.params.number]);

  const remoteCharAt = text => {
    const firstChar = text.replace('[', '');
    const lastChar = firstChar.replace(']', '');
    const finalText = lastChar;
    return finalText;
  };

  const goBack = () => props.history.goBack();

  // CORSS--------

  const img = new Image();

  let imageURL = dataRender.imageCORSS && dataRender.imageCORSS;
  let googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

  img.crossOrigin = 'Anonymous';
  img.src =
    dataRender.imageCORSS && googleProxyURL + encodeURIComponent(imageURL);

  // END CORSS--------

  const extractingKeysFromString = evolution => {
    // const evolution = "{'10': 'Caterpie', '11': 'Metapod', '12': 'Butterfree'}";
    const newData = evolution.replace(/[']/g, '"');
    const objectData = JSON.parse(newData);
    // console.log('Keys: ', Object.keys(objectData));
    return Object.keys(objectData);
  };

  return (
    <>
      <Header />
      {dataRender.body && dataRender.imageCORSS ? (
        <div className='detail'>
          <span className='margin-desktop-detail HideOnMobile' />
          <div className='wrapper'>
            <div className='detail-backBtn-desktop HideOnMobile'>
              <button onClick={goBack} type='button' aria-label='back'>
                Go back
              </button>
            </div>
            <div className='detail-backBtn'>
              <img src={backArrow} alt='go back' onClick={goBack} />
            </div>
            <div className='cards'>
              <>
                <div className='card01'>
                  <div className='card01--grid'>
                    <div className='card01--grid01'>
                      <img
                        src={img.src}
                        alt={dataRender.body.name}
                        id='testId'
                      />
                      <div className='card01--grid01-title'>
                        <h1>{dataRender.body.name}</h1>
                        <h3>#{dataRender.body.number}</h3>
                      </div>
                    </div>
                    <div className='card01--outGrid-description ShowOnMobile'>
                      <div>
                        <p>{remoteCharAt(dataRender.body.description)}</p>
                      </div>
                    </div>
                    <div className='card01--grid02'>
                      <div className='card01--grid02-type'>
                        <h2>Type</h2>
                        <div className='flex'>
                          {dataRender.body.type2 ? (
                            <>
                              {dataRender.body.type1 === 'bug' ||
                              dataRender.body.type1 === 'grass' ||
                              dataRender.body.type1 === 'ground' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-green'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'dark' ||
                                dataRender.body.type1 === 'normal' ||
                                dataRender.body.type1 === 'steel' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-dark'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'dragon' ||
                                dataRender.body.type1 === 'flying' ||
                                dataRender.body.type1 === 'water' ||
                                dataRender.body.type1 === 'ice' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-blue'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'electric' ||
                                dataRender.body.type1 === 'fire' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-yellow'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'fairy' ||
                                dataRender.body.type1 === 'ghost' ||
                                dataRender.body.type1 === 'poison' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-purple'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'fighting' ||
                                dataRender.body.type1 === 'psychic' ||
                                dataRender.body.type1 === 'rock' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-red'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : (
                                ''
                              )}

                              {dataRender.body.type2 === 'bug' ||
                              dataRender.body.type2 === 'grass' ||
                              dataRender.body.type2 === 'ground' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-green'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : dataRender.body.type2 === 'dark' ||
                                dataRender.body.type2 === 'normal' ||
                                dataRender.body.type2 === 'steel' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-dark'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : dataRender.body.type2 === 'dragon' ||
                                dataRender.body.type2 === 'flying' ||
                                dataRender.body.type2 === 'water' ||
                                dataRender.body.type2 === 'ice' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-blue'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : dataRender.body.type2 === 'electric' ||
                                dataRender.body.type2 === 'fire' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-yellow'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : dataRender.body.type2 === 'fairy' ||
                                dataRender.body.type2 === 'ghost' ||
                                dataRender.body.type2 === 'poison' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-purple'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : dataRender.body.type2 === 'fighting' ||
                                dataRender.body.type2 === 'psychic' ||
                                dataRender.body.type2 === 'rock' ? (
                                <Link to={`/${dataRender.body.type2}`}>
                                  <div className='color-red'>
                                    {dataRender.body.type2}
                                  </div>
                                </Link>
                              ) : (
                                ''
                              )}
                            </>
                          ) : (
                            <>
                              {dataRender.body.type1 === 'bug' ||
                              dataRender.body.type1 === 'grass' ||
                              dataRender.body.type1 === 'ground' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-green'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'dark' ||
                                dataRender.body.type1 === 'normal' ||
                                dataRender.body.type1 === 'steel' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-dark'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'dragon' ||
                                dataRender.body.type1 === 'flying' ||
                                dataRender.body.type1 === 'water' ||
                                dataRender.body.type1 === 'ice' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-blue'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'electric' ||
                                dataRender.body.type1 === 'fire' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-yellow'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'fairy' ||
                                dataRender.body.type1 === 'ghost' ||
                                dataRender.body.type1 === 'poison' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-purple'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : dataRender.body.type1 === 'fighting' ||
                                dataRender.body.type1 === 'psychic' ||
                                dataRender.body.type1 === 'rock' ? (
                                <Link to={`/${dataRender.body.type1}`}>
                                  <div className='color-red'>
                                    {dataRender.body.type1}
                                  </div>
                                </Link>
                              ) : (
                                ''
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      {dataRender.body.is_legendary ? (
                        <div className='color-yellow legendary'>LEGENDARY</div>
                      ) : (
                        ''
                      )}
                      <div className='card01--grid02-classification'>
                        <h2>Classification</h2>
                        <div className='color-dark'>
                          {dataRender.body.classification}
                        </div>
                      </div>
                      <div className='card01--grid02-abilities'>
                        <h2>Abilities</h2>
                        <div>
                          <p>{remoteCharAt(dataRender.body.abilities)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card01--outGrid-description HideOnMobile'>
                    <div>
                      <p>{remoteCharAt(dataRender.body.description)}</p>
                    </div>
                  </div>
                </div>
                <div className='card02'>
                  <h2>Stats</h2>
                  <div className='card02--grid'>
                    <div className='card02--grid01'>
                      <div className='card02--grid01-item'>
                        <div className='flex'>
                          <p>Pokedex Number: </p>
                          <p>{dataRender.body.number}</p>
                        </div>
                      </div>
                      <div className='card02--grid01-item'>
                        <div className='flex'>
                          <p>Attack: </p>
                          <p>{dataRender.body.attack}</p>
                        </div>
                      </div>
                      <div className='card02--grid01-item'>
                        <div className='flex'>
                          <p>Defense: </p>
                          <p>{dataRender.body.defense}</p>
                        </div>
                      </div>
                    </div>
                    <div className='card02--grid02'>
                      <div className='card02--grid02-item'>
                        <div className='flex'>
                          <p>Speed: </p>
                          <p>{dataRender.body.speed}</p>
                        </div>
                      </div>
                      <div className='card02--grid02-item'>
                        <div className='flex'>
                          <p>hp: </p>
                          <p>{dataRender.body.hp}</p>
                        </div>
                      </div>
                      <div className='card02--grid02-item'>
                        <div className='flex'>
                          <p>Generation: </p>
                          <p>{dataRender.body.generation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card03'>
                  <div className='card03--grid'>
                    {/* {
                      <Evolution
                        {...extractingKeysFromString(
                          dataRender.body.evolution_line
                        )}
                      />
                    } */}
                    {Object.values(
                      extractingKeysFromString(dataRender.body.evolution_line)
                    ).map((obj, i) => (
                      <Evolution number={obj} key={i} />
                    ))}
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default Detail;
