import React,{useEffect,useState}  from 'react'

import Newsitem from './Newsitem';
import Spy from './Spy.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
    const[ articles,setArticles]= useState([])
      const[ loading,setLoading]= useState(true)
        const[ page,setPage]= useState(1)
     const[ totalResults, setTotalResults]= useState(0)
     //document.title = `${this.capitalizeFirst(props.category)}- NewsJet`;

   const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
   
     const updaten=async()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=059af0b760644f0a9e84717478abe8e1&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        try {
            let data = await fetch(url);
            props.setProgress(30);
            let parsedata = await data.json();
            props.setProgress(70);
            console.log(parsedata);
            if (parsedata.status === "ok") {
               setArticles(parsedata.articles) 
               setTotalResults(parsedata.totalResults)
               setLoading(false)
                
            }
            else {
                console.log("api error or limits reached:", parsedata);
                setArticles([])
                 setLoading(false);
            }
        }
        catch (error) {
            console.error("Error fetching data:", error);
            setArticles([])
                 setLoading(false);
        }
         props.setProgress(100);

    }
    useEffect(() => {
        document.title = `${capitalizeFirst(props.category)}- NewsJet`;
        updaten();
    },[])
    const componentDidMount=()=> {
        updaten();

    }
    const handleprevious = async () => {
        /*let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=059af0b760644f0a9e84717478abe8e1&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
        this.setState({loading : false});   
             fetch(url)
                  .then((data) => data.json())
                   .then((parsedata) => {
                    console.log(parsedata);
                   this.setState(
                    {
                        page: this.state.page-1,
                        articles: Array.isArray(parsedata.results)? parsedata.results :[],
                        loading:false
                    }
                   );
                })*/
               setPage(page-1)
        
        updaten();


    }

   const  handlenext = async () => {
    
        
        setPage(page+1)
        updaten();
    }
 const fetchMore = async() => {
    
    setPage(page+1);
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=059af0b760644f0a9e84717478abe8e1&setPage(page+1)&pageSize=${props.pageSize}`;
        setPage(page+1)
        setLoading(true);
        try {
            let data = await fetch(url);
            let parsedata = await data.json();
            setArticles(articles.concat(parsedata.articles))
            setTotalResults(parsedata.totalResults)
            console.log(parsedata);
           
        }
        catch (error) {
            console.error("Error fetching data:", error);
            setArticles([])
                 setLoading(false);
        }
    }
   
    
        return (
            <div className="container my-3">
                <h1 className="text-centre" style={{ margin: '40px 0px',marginTop: '90px'}}>NewsJet-Fast and Accurate</h1>
                {/*{this.state.loading && <Spy/>}*/}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMore}
                    hasMore={articles.length!==totalResults}
                    loader={<Spy/>}
                    endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
                >
                <div className="container">
                <div className="row">
                    {
                        Array.isArray(articles) && articles.map((element) => {
                            return (
                                < div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 40) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            
                            )
                        })}
                </div>
                </div>
                </InfiniteScroll>

                <div className="container d-flex justify-content-between">

                    <button disabled={page <= 1} type="button" className="btn-subtle theme-warning" onClick={handleprevious}> &larr; previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn-text theme-warning" onClick={handlenext}>next &rarr;</button>
                </div>

            </div>

        )
    }

 News.defaultProps = {
        country: 'us',
        pageSize: 7,
        category: 'general',
    }

News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: 'PropTypes.string',
    }

export default News
