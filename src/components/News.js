import React, { Component } from "react";
import Newsitem from "./Newsitem";

import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";

export default class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    static defaultProps = {
        pageSize: '20',
        country: 'in',
        category: 'general',
        api: "1e32dfb24b9c4760bc5196ecf313ca76",
        progress: 10
    };

    static propTypes = {
        pageSize: PropTypes.string,
        country: PropTypes.string,
        category: PropTypes.string,
        api: PropTypes.string
    };

    async componentDidMount() {
        await this.fetchData();
    }

    async fetchData() {
        this.props.progress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.progress(40)
        let parsedData = await data.json();
        this.props.progress(75)
        this.setState(prevState => ({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        }));
        this.props.progress(100)
    }

    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${nextPage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(prevState => ({
            articles: prevState.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: nextPage,
            loading: false
        }));
    }

    scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }
    capitalizeFirstLetter=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    render() {
        return (
            <><div style={{position:"relative",top:'4rem',backgroundColor:"white"}}>
                <h2 className="text-center my-8"><strong>Newsbuzz- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</strong></h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container"  >
                        <div className="row">
                            {this.state.articles.map((e, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index} style={{ display: "flex", justifyContent: "center" }}>
                                    <Newsitem title={e.title ? e.title : ""} description={e.description ? e.description : ""} url={e.url} author={e.author} date={e.publishedAt} source={e.source.name} imageUrl={e.urlToImage ? e.urlToImage : "https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/300391336_483501177118048_4749021157093913815_n.png?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HO36_sL-PAIAX8EUNiQ&_nc_ht=scontent.fblr22-2.fna&oh=00_AfCnqaHmEOHq6lYZ1IDzD1JPxTy-HSjsV-ULAblXjKNSHw&oe=65D0ADD3"} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container">
                        <button type="button" className="btn btn-outline-dark" onClick={this.scrollToTop}>Move to Top</button>
                    </div>
                </InfiniteScroll>
                </div> </>
        );
    }
}
