import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter=(str)=>{

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


  constructor(props) {
    super(props);

    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsCrack`

    this.state = {
      articles: [],

      loading: false,

      page: 1,
      totalResults:0
    };
  }

 async updateNews(){

  this.props.progress(10);

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;

  this.setState({ loading: true });

  let data = await fetch(url);

  this.props.progress(30);

  let parseddata = await data.json();

  this.props.progress(70);

  console.log(parseddata);

  this.setState({
    articles: parseddata.articles,
    totalResults: parseddata.totalResults,
    loading: false,
  });

  this.props.progress(100);

 }


  async componentDidMount() {

   this.updateNews();

  }

  Previews_click = async () => {
   
    this.setState({ page: this.state.page - 1,});

    this.updateNews();

  };

  Next_click = async () => {
    
      this.setState({ page: this.state.page + 1, });
      this.updateNews();

    };

    fetchMoreData = async () => {
      // 20 more records in 1.5 secs

     

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;

      this.setState({ page: this.state.page + 1, });

  let data = await fetch(url);

  let parseddata = await data.json();

      setTimeout(() => {
        

        this.setState({
          articles:this.state.articles.concat(parseddata.articles),
          totalResults: parseddata.totalResults,
          
         

        });



      }, 1500);

    };
    

  render() {
    return (
      <>
      {/* <div className="container my-3"> */}
      <div className="test_text" style={{backgroundColor:'red',color:'white',marginTop:'56px',marginBottom:'30px'}}><marquee direction="right"> this website under developement </marquee></div>
        <h2 className="text-center my-3">NewsCrack - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        
        
        {this.state.loading && <Spiner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={!(this.state.page + 1 >
            Math.ceil(this.state.totalResults / `${this.props.pagesize}`))&&<Spiner/>}
        >

         <div className="container">

        <div className="row my-4">
          {
            this.state.articles.map((elements) => {
              return (
                <div className="col-md-4 my-3" key={elements.url}>
                  <Newsitem
                    title={elements.title}
                    description={elements.description}
                    imgUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    update_time={elements.publishedAt}
                    author={elements.author}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
        </div>

        </div>

        </InfiniteScroll>





        {/* {this.state.loading && <Spiner />}

        <div className="row my-4">
          {!this.state.loading &&
            this.state.articles.map((elements) => {
              return (
                <div className="col-md-4 my-3" key={elements.url}>
                  <Newsitem
                    title={elements.title}
                    description={elements.description}
                    imgUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    update_time={elements.publishedAt}
                    author={elements.author}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
        </div> */}

        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark btn-sm"
            onClick={this.Previews_click}
          >
            {" "}
            &larr; Previews
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / `${this.props.pagesize}`)
            }
            className="btn btn-dark btn-sm"
            onClick={this.Next_click}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
  }
}

export default News;
