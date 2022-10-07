import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)


    //update function for next and previous click common
    const updatenews = async () => {
        props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url)
        props.setprogress(40)
        let parsedata = await data.json()
        console.log(parsedata);       // ahiya thi khar pade ke otal 70 result 6 parntu apne ne 20 j dekahy 6
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)

        props.setprogress(100)
    }

    ///componet did mount--------------- 
    useEffect(() => {
        updatenews();
    }, [])

    //------>commit on infine scroll-v35
    const handlenextclick = async () => {
        setPage(page + 1)
        updatenews();
    }


    //---->comiton infinte scroll-v35
    const handlepreviousclick = async () => {
        setPage(page - 1)
        updatenews();
    }


    const fetchMoreData = async () => {
        // this.updatenews() ======>aa nathi no thayu
        let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pagesize=${props.pagesize}`
        setPage(page + 1)
        let data = await fetch(url)
        setLoading(true)
        let parsedata = await data.json()
        console.log(parsedata);       // ahiya thi khar pade ke otal 70 result 6 parntu apne ne 20 j dekahy 6
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
        setLoading(false)
    }


    return (
        <>
            {/* <div className="container my-4"> */}
            <h2 className="text-center" style={{marginTop:'65px'}}>NewsSafar - Top Headine {props.category}</h2>
            {loading && <Spinner />}
            {/* {this.state.articles.map((element)=>{console.log(element.author);
        })} */}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                // hasMore={this.state.articles.length !== this.totalResults}  ===>bhulhati endlless scroling je v-36 ma sudhari
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 45) : null} description={element.description ? element.description.slice(0, 80) : null} imageUrl={!element.urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU" : element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

            {/* <div className="container "> */}

            {/* </div> */}
        </>
    )

}
export default News


News.defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
    page: 1
}

News.propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string
}


