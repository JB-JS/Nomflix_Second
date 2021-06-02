import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import noPosterSmall from '../../assets/noPosterSmall.png'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 50px);
  padding: 50px;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: url(${(props) => props.bgImage}) no-repeat center / cover;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.7);
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: inherit;
`

const Cover = styled.div`
  width: 30%;
  background: url(${(props) => props.bgImage}) no-repeat center / cover;
`

const Data = styled.div`
  width: 70%;
  margin-left: 2.5rem;
`

const ItemSection = styled.div`
  margin: 1.5rem 0;
`

const ItemContainer = styled.div`
  margin: 1.25rem 0;
`

const Item = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  width: 50%;
  opacity: 0.7;
  line-height: 1.5;
  font-size: 12px;
  text-align: justify;
`

const ItemSectionTitle = styled.h2`
  margin-bottom: 1.25rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2.5rem')};
`

const VideoItemContainer = styled.div`
  display: inline-flex;
  max-width: 100%;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.4);
  overflow: scroll;
`

const VideoItem = styled.div`
  width: 300px;
  & + div {
    margin-left: 1.25rem;
  }
`

const ItemTabs = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
`

const ItemTab = styled(Link)`
  padding: 0 0.5rem 0.5rem;
  border-bottom: ${(props) =>
    props.$current ? '4px solid rgb(129, 107, 255)' : 'transparent'};
  color: ${(props) => (props.$current ? 'rgb(129, 107, 255)' : '#fff')};
`

const ItemContent = styled.div`
  & + div {
    margin-left: 1.25rem;
  }
`

const Image = styled.div`
  width: ${(props) => (props.width ? props.width : '250px')};
  height: ${(props) => (props.height ? props.height : '350px')};
  background: url(${(props) => props.bgImage}) no-repeat center / cover;
  margin-bottom: 1rem;
`

const DetailPresenter = ({ result, loading, error, id, pathname, url }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading - 영화 제공 서비스 Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {error
            ? 'Not Found - 영화 제공 서비스 Nomflix'
            : `${
                result.title ? result.title : result.name
              } - 영화 제공 서비스 Nomflix`}
        </title>
      </Helmet>
      <Container>
        {error ? (
          <Message text={error} color="rgb(233, 30, 0)" />
        ) : (
          result &&
          Object.keys(result).length > 0 && (
            <>
              <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
              />

              <Content>
                <Cover
                  bgImage={
                    result.poster_path
                      ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                      : noPosterSmall
                  }
                />
                <Data>
                  <ItemSectionTitle>
                    {result.title ? result.title : result.name}
                  </ItemSectionTitle>
                  <ItemContainer>
                    <Item>
                      {result.release_date
                        ? result.release_date.substring(0, 4)
                        : result.first_air_date.substring(0, 4)}
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                      {result.runtime
                        ? result.runtime
                        : result.episode_run_time}{' '}
                      min
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                      {result.genres.map((genre, index, genres) =>
                        index === genres.length - 1
                          ? genre.name
                          : `${genre.name} / `
                      )}
                    </Item>
                  </ItemContainer>
                  <Overview>{result.overview}</Overview>
                  {console.log(result)}

                  {result.videos.results.length > 0 && (
                    <ItemSection>
                      <ItemSectionTitle fontSize="1.5rem">
                        Videos
                      </ItemSectionTitle>
                      <VideoItemContainer>
                        {result.videos.results.map((video) => (
                          <VideoItem key={video.id}>
                            <iframe
                              src={`https://www.youtube.com/embed/${video.key}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            <p style={{ marginTop: '1rem', lineHeight: '1.5' }}>
                              {video.name}
                            </p>
                          </VideoItem>
                        ))}
                      </VideoItemContainer>
                    </ItemSection>
                  )}

                  <ItemSection>
                    <ItemTabs>
                      <ItemTab
                        $current={
                          `/tv/${id}` === pathname ||
                          `/movie/${id}` === pathname
                        }
                        to={`${url}`}
                      >
                        시즌
                      </ItemTab>
                      <ItemTab
                        $current={pathname === `${url}/company`}
                        to={`${url}/company`}
                      >
                        제작사
                      </ItemTab>
                      <ItemTab
                        $current={pathname === `${url}/countries`}
                        to={`${url}/countries`}
                      >
                        제조국
                      </ItemTab>
                      <ItemTab
                        $current={pathname === `${url}/creator`}
                        to={`${url}/creator`}
                      >
                        제작자
                      </ItemTab>
                    </ItemTabs>

                    {pathname === `${url}` &&
                      result.seasons &&
                      result.seasons.length > 0 && (
                        <VideoItemContainer>
                          {result.seasons.map((season) => (
                            <ItemContent key={season.id}>
                              <Image
                                bgImage={
                                  season.poster_path
                                    ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                                    : noPosterSmall
                                }
                              ></Image>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  marginTop: '1rem',
                                }}
                              >
                                <span>{season.name}</span>
                                <span>{season.air_date}</span>
                              </div>
                            </ItemContent>
                          ))}
                        </VideoItemContainer>
                      )}

                    {pathname === `${url}/company` &&
                      result.production_companies &&
                      result.production_companies.length > 0 && (
                        <VideoItemContainer style={{ alignItems: 'center' }}>
                          {result.production_companies.map((companie) => (
                            <ItemContent key={companie.id}>
                              <img
                                src={
                                  companie.logo_path
                                    ? `https://image.tmdb.org/t/p/w200/${companie.logo_path}`
                                    : noPosterSmall
                                }
                                alt={companie.name}
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  marginTop: '1rem',
                                }}
                              >
                                <span>{companie.name}</span>
                              </div>
                            </ItemContent>
                          ))}
                        </VideoItemContainer>
                      )}

                    {pathname === `${url}/countries` &&
                      result.production_countries &&
                      result.production_countries.length > 0 && (
                        <VideoItemContainer>
                          {result.production_countries.map((countrie, idx) => (
                            <ItemContent key={idx}>
                              <img
                                src={
                                  countrie.iso_3166_1
                                    ? `https://www.countryflags.io/${countrie.iso_3166_1}/flat/64.png`
                                    : noPosterSmall
                                }
                                alt={countrie.name}
                              />

                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  marginTop: '1rem',
                                }}
                              >
                                <span>{countrie.name}</span>
                              </div>
                            </ItemContent>
                          ))}
                        </VideoItemContainer>
                      )}

                    {pathname === `${url}/creator` &&
                      result.created_by &&
                      result.created_by.length > 0 && (
                        <VideoItemContainer>
                          {result.created_by.map((created) => (
                            <ItemContent key={created.id}>
                              <Image
                                width="150px"
                                height="150px"
                                bgImage={
                                  created.profile_path
                                    ? `https://image.tmdb.org/t/p/original${created.profile_path}`
                                    : noPosterSmall
                                }
                              ></Image>
                              <p>{created.name}</p>
                            </ItemContent>
                          ))}
                        </VideoItemContainer>
                      )}
                  </ItemSection>
                </Data>
              </Content>
            </>
          )
        )}
      </Container>
    </>
  )

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object,
  error: PropTypes.string,
}

export default DetailPresenter
