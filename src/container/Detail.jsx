import React, { useState, useEffect } from 'react';
import Color from 'color-thief-react';

// Header
import Header from '../components/Header.jsx';

// Back btn
import backArrow from '../assets/images/back-btn.svg';

// Test
import testImage from '../assets/images/25-Pikachu.png';

const Detail = props => {
  const [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/pokemon/${props.match.params.pokedex_number}`
    )
      .then(response => response.json())
      .then(response =>
        setDataRender({
          error: response.error,
          status: response.status,
          body: response.body
        })
      )
      .catch(e => console.log(e));
  }, []);

  const remoteCharAt = text => {
    const firstChar = text.replace('[', '');
    const lastChar = firstChar.replace(']', '');
    const finalText = lastChar;
    return finalText;
  };

  const goBack = () => props.history.goBack();

  return (
    <>
      <Header />
      <Color src={testImage}>
        {({ data, loading, error }) => (
          <div
            className='detail'
            style={{
              backgroundColor: data
            }}
          >
            <div className='wrapper'>
              {/* <button className='btn-back desktop' onClick={goBack}>
                Go back
              </button> */}
              <div className='detail-backBtn'>
                <img src={backArrow} alt='go back' onClick={goBack} />
              </div>
              <div className='cards'>
                {dataRender.body ? (
                  <>
                    <div className='card01'>
                      <div className='card01--grid'>
                        <div className='card01--grid01'>
                          <img src={testImage} alt={dataRender.body.name} />
                          <div className='card01--grid01-title'>
                            <h1>{dataRender.body.name}</h1>
                            <p>#{dataRender.body.pokedex_number}</p>
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
                                    <div className='color-green'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'dark' ||
                                    dataRender.body.type1 === 'normal' ||
                                    dataRender.body.type1 === 'steel' ? (
                                    <div className='color-dark'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'dragon' ||
                                    dataRender.body.type1 === 'flying' ||
                                    dataRender.body.type1 === 'water' ||
                                    dataRender.body.type1 === 'ice' ? (
                                    <div className='color-blue'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'electric' ||
                                    dataRender.body.type1 === 'fire' ? (
                                    <div className='color-yellow'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'fairy' ||
                                    dataRender.body.type1 === 'ghost' ||
                                    dataRender.body.type1 === 'poison' ? (
                                    <div className='color-purple'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'fighting' ||
                                    dataRender.body.type1 === 'psychic' ||
                                    dataRender.body.type1 === 'rock' ? (
                                    <div className='color-red'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : (
                                    ''
                                  )}

                                  {dataRender.body.type2 === 'bug' ||
                                  dataRender.body.type2 === 'grass' ||
                                  dataRender.body.type2 === 'ground' ? (
                                    <div className='color-green'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : dataRender.body.type2 === 'dark' ||
                                    dataRender.body.type2 === 'normal' ||
                                    dataRender.body.type2 === 'steel' ? (
                                    <div className='color-dark'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : dataRender.body.type2 === 'dragon' ||
                                    dataRender.body.type2 === 'flying' ||
                                    dataRender.body.type2 === 'water' ||
                                    dataRender.body.type2 === 'ice' ? (
                                    <div className='color-blue'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : dataRender.body.type2 === 'electric' ||
                                    dataRender.body.type2 === 'fire' ? (
                                    <div className='color-yellow'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : dataRender.body.type2 === 'fairy' ||
                                    dataRender.body.type2 === 'ghost' ||
                                    dataRender.body.type2 === 'poison' ? (
                                    <div className='color-purple'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : dataRender.body.type2 === 'fighting' ||
                                    dataRender.body.type2 === 'psychic' ||
                                    dataRender.body.type2 === 'rock' ? (
                                    <div className='color-red'>
                                      {dataRender.body.type2}
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                </>
                              ) : (
                                <>
                                  {dataRender.body.type1 === 'bug' ||
                                  dataRender.body.type1 === 'grass' ||
                                  dataRender.body.type1 === 'ground' ? (
                                    <div className='color-green'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'dark' ||
                                    dataRender.body.type1 === 'normal' ||
                                    dataRender.body.type1 === 'steel' ? (
                                    <div className='color-dark'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'dragon' ||
                                    dataRender.body.type1 === 'flying' ||
                                    dataRender.body.type1 === 'water' ||
                                    dataRender.body.type1 === 'ice' ? (
                                    <div className='color-blue'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'electric' ||
                                    dataRender.body.type1 === 'fire' ? (
                                    <div className='color-yellow'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'fairy' ||
                                    dataRender.body.type1 === 'ghost' ||
                                    dataRender.body.type1 === 'poison' ? (
                                    <div className='color-purple'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : dataRender.body.type1 === 'fighting' ||
                                    dataRender.body.type1 === 'psychic' ||
                                    dataRender.body.type1 === 'rock' ? (
                                    <div className='color-red'>
                                      {dataRender.body.type1}
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                </>
                              )}
                            </div>
                          </div>
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
                      <div className='card01--outGrid-description'>
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
                              <p>{dataRender.body.pokedex_number}</p>
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
                  </>
                ) : (
                  'Loading...'
                )}
              </div>
            </div>
          </div>
        )}
      </Color>
    </>
  );
};

export default Detail;
