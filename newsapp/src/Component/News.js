import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  // articles = [
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Sandra Gonzalez",
  //     "title": "Coolio, 'Gangsta's Paradise' rapper, dead at 59 - CNN",
  //     "description": "Coolio, the '90s rapper who lit up the music charts with hits like \"Gangsta's Paradise\" and \"Fantastic Voyage,\" has died, his friend and manager Jarez Posey, told CNN. He was 59.",
  //     "url": "https://www.cnn.com/2022/09/28/entertainment/coolio-obit/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220928175747-coolio-1995.jpg?q=w_800,c_fill",
  //     "publishedAt": "2022-09-29T07:21:00Z",
  //     "content": "Coolio, the 90s rapper who lit up the music charts with hits like Gangstas Paradise and Fantastic Voyage, has died, his friend and manager Jarez Posey, told CNN. He was 59. \r\nPosey said Coolio died W… [+3430 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Luke McGee",
  //     "title": "Liz Truss's premiership has got off to the worst start possible - CNN",
  //     "description": "Liz Truss's first few weeks as British prime minister have been defined by crisis. She'd barely been in the job 48 hours when news broke that Queen Elizabeth II had died, placing the country in a state of official mourning and delaying the official launch of …",
  //     "url": "https://www.cnn.com/2022/09/28/europe/uk-truss-crisis-labour-starmer-gbr-intl-cmd/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220926152445-liz-truss-0923.jpg?q=w_800,c_fill",
  //     "publishedAt": "2022-09-29T06:54:00Z",
  //     "content": "Liz Trusss first few weeks as British prime minister have been defined by crisis. Shed barely been in the job 48 hours when news broke that Queen Elizabeth II had died, placing the country in a state… [+6374 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": "",
  //     "title": "Fantasy Football Week 4 Start 'Em & Sit 'Em Wide Receivers: Brandin Cooks overdue for his breakout game - CBS Sports",
  //     "description": "Helping you make the right lineup calls at wide receiver for Week 4",
  //     "url": "https://www.cbssports.com/fantasy/football/news/fantasy-football-week-4-start-em-sit-em-wide-receivers-brandin-cooks-overdue-for-his-breakout-game/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/04/07/2189591c-491d-4b10-89c2-f3f14c60b67b/thumbnail/1200x675/bec95791c2e713da3f483d86c88c1404/brandin-cooks.jpg",
  //     "publishedAt": "2022-09-29T06:32:00Z",
  //     "content": "Injuries, injuries. Stefon Diggs (lower body), Amon-Ra St. Brown (ankle), Michael Thomas (toe), Jaylen Waddle (groin), Tee Higgins (toe), Keenan Allen (hamstring), Chris Godwin (hamstring), Hunter Re… [+533 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "WION Business News | Jeff Bezo's ex-wife MacKenzie Scott files for divorce from her second husband - WION",
  //     "description": "Billionaire philanthropist MacKenzie Scott has filed for divorce from her second husband, Dan Jewett. According to the Court clerk’s office, she filed the pa...",
  //     "url": "https://www.youtube.com/watch?v=YnQQ6eSslkE",
  //     "urlToImage": "https://i.ytimg.com/vi/YnQQ6eSslkE/maxresdefault.jpg",
  //     "publishedAt": "2022-09-29T05:33:44Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Russia set to annex Ukraine territory; West warns of new sanctions - Reuters.com",
  //     "description": "Russia was poised to annex a swath of Ukraine within days, releasing what it called vote tallies showing overwhelming support in four provinces to join it, after what Ukraine and the West denounced as illegal sham referendums held at gunpoint.",
  //     "url": "https://www.reuters.com/world/europe/russia-set-annex-ukraine-territory-west-warns-new-sanctions-2022-09-29/",
  //     "urlToImage": "https://www.reuters.com/resizer/IjhKnijRCgMUc-bM_t1V9HsMASM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4EM2M75SR5OQ7KKNSGYDVULXGQ.jpg",
  //     "publishedAt": "2022-09-29T05:07:00Z",
  //     "content": "ZAPORIZHZHIA, Ukraine, Sept 29 (Reuters) - Russia was poised to annex a swath of Ukraine within days, releasing what it called vote tallies showing overwhelming support in four provinces to join it, … [+5460 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "axios",
  //       "name": "Axios"
  //     },
  //     "author": "Jacob Knutson",
  //     "title": "Hurricane Ian slams southwest Florida with \"catastrophic\" storm surge - Axios",
  //     "description": "Storm surge is often the most deadly and destructive aspect of hurricanes.",
  //     "url": "https://www.axios.com/2022/09/28/hurricane-ian-storm-surge-southwest-florida",
  //     "urlToImage": "https://images.axios.com/1fSayuLdNQc38dstlG1_Qd8LVT0=/0x39:3000x1726/1366x768/2022/09/28/1664386356379.jpg",
  //     "publishedAt": "2022-09-29T04:34:17Z",
  //     "content": "Hurricane Ian is expected to flood some areas of Florida's west coast with storm surges as high as 18 feet above ground level as it moves across the peninsula after making landfall Wednesday afternoo… [+2709 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CNBC"
  //     },
  //     "author": "Samantha Subin",
  //     "title": "Stock futures inch lower after Wednesday's big market rally - CNBC",
  //     "description": "Stocks rebounded sharply on Wednesday as the Bank of England said it would purchase bonds to help steady its financial markets. Bond yields also slid.",
  //     "url": "https://www.cnbc.com/2022/09/28/stock-market-news-open-to-close-futures-live-updates.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107125370-LiveWire-OB-Photo-20220927-CC-PRESS-18.jpg?v=1664402496&w=1920&h=1080",
  //     "publishedAt": "2022-09-29T04:23:00Z",
  //     "content": "Stock futures inched lower on Thursday morning after the Dow Jones Industrial Average staged a comeback off its lowest level for the year.\r\nFutures tied to the Dow Jones slipped 22 points, or 0.07%, … [+2190 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Eonline.com"
  //     },
  //     "author": "Alyssa Ray",
  //     "title": "Khloe Kardashian Reveals She Turned Down Tristan Thompson's Proposal - E! NEWS",
  //     "description": "On the Sept. 29 episode of Hulu's The Kardashians, Khloe Kardashian confirmed that Tristan Thompson proposed before their split—an offer she turned down. Here's what she said.",
  //     "url": "https://www.eonline.com/news/1348244/khloe-kardashian-reveals-she-turned-down-tristan-thompsons-proposal",
  //     "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022824/rs_1200x1200-220924120012-1200-khloe-kardashian-tristan-thompson.cm.92422.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  //     "publishedAt": "2022-09-29T04:03:05Z",
  //     "content": "Khloe Kardashian did not hear wedding bells with Tristan Thompson.\r\nOn the Sept. 29 episode of Hulu's The Kardashians, the Good American founder shared that she had previously rejected a proposal fro… [+844 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "al-jazeera-english",
  //       "name": "Al Jazeera English"
  //     },
  //     "author": "Al Jazeera",
  //     "title": "US has agreed Pacific Islands deal, offering ‘big dollar numbers’ - Al Jazeera English",
  //     "description": "The US is looking to reengage in a region where China has been steadily expanding its influence.",
  //     "url": "https://www.aljazeera.com/news/2022/9/29/us-has-agreed-pacific-islands-deal-offering-big-dollar-numbers",
  //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/09/2022-09-28T225416Z_1130925113_RC2CQW9JBWT2_RTRMADP_3_USA-PACIFIC-ISLANDS.jpg?resize=1920%2C1440",
  //     "publishedAt": "2022-09-29T03:58:32Z",
  //     "content": "The United States says it has agreed on a partnership with the Pacific Islands that offers the prospect of big dollar help to a region where China has been expanding its influence.\r\nUS President Joe … [+3344 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Katie Bo Lillis, Natasha Bertrand, Kylie Atwood",
  //     "title": "First on CNN: European security officials observed Russian Navy ships in vicinity of Nord Stream pipeline leaks - CNN",
  //     "description": "European security officials on Monday and Tuesday observed Russian Navy support ships in the vicinity of leaks in the Nord Stream pipelines likely caused by underwater explosions, according two Western intelligence officials and one other source familiar with…",
  //     "url": "https://www.cnn.com/2022/09/28/politics/nord-stream-pipeline-leak-russian-navy-ships/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220927165357-01-nord-stream-leak-aerial-092722.jpg?q=w_800,c_fill",
  //     "publishedAt": "2022-09-29T02:48:00Z",
  //     "content": "European security officials on Monday and Tuesday observed Russian Navy support ships in the vicinity of leaks in the Nord Stream pipelines likely caused by underwater explosions, according two Weste… [+6183 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "KABC-TV"
  //     },
  //     "author": null,
  //     "title": "Hesperia shootout: 15-year-old girl shot at deputies before she was killed in 15 Freeway gun battle, sheriff says - KABC-TV",
  //     "description": "A 15-year-old girl, who was at the center of an Amber Alert, shot at deputies before she was killed in a highway shootout, the San Bernardino County sheriff said.",
  //     "url": "https://abc7.com/hesperia-shootout-savannah-graziano-shot-at-deputies/12276990/",
  //     "urlToImage": "https://cdn.abcotvs.com/dip/images/12277030_092822-kabc-5pm-fontana-woman-killed-vid.jpg?w=1600",
  //     "publishedAt": "2022-09-29T02:25:24Z",
  //     "content": "HESPERIA, Calif. (KABC) -- A 15-year-old girl shot at deputies before she was killed in a highway shootout between her father - a fugitive wanted in the death of the teen's mother - and law enforceme… [+3756 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "KCRA Sacramento"
  //     },
  //     "author": "Ashley Zavala",
  //     "title": "Gov. Newsom signs bills to turn unused retail areas into housing - KCRA Sacramento",
  //     "description": "Gov. Gavin Newsom on Wednesday will sign two bills his administration says will boost housing and create thousands of jobs in California.",
  //     "url": "https://www.kcra.com/article/gov-newsom-to-sign-bills-to-turn-unused-retail-areas-into-housing/41427984",
  //     "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/newsom-housing-1664391080.jpg?crop=1.00xw:0.846xh;0,0.0831xh&resize=1200:*",
  //     "publishedAt": "2022-09-29T02:09:00Z",
  //     "content": "Gov. Gavin Newsom on Wednesday signed two bills his administration says will boost housing and create thousands of jobs in California. \r\nThe governor signed AB 2011 and SB 6, which together will allo… [+2179 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-washington-post",
  //       "name": "The Washington Post"
  //     },
  //     "author": "Alex Horton",
  //     "title": "Pentagon will double HIMARS artillery for Ukraine - The Washington Post",
  //     "description": "The United States and nearly two dozen partner nations said they would accelerate weapons production, in anticipation of a sustained conflict with Russia.",
  //     "url": "https://www.washingtonpost.com/national-security/2022/09/28/himars-ukraine/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YI6FIZXZJ4I6ZAO3VQD2HFFINM.jpg&w=1440",
  //     "publishedAt": "2022-09-29T00:53:00Z",
  //     "content": "The United States will more than double its commitment of long-range rocket artillery systems for Ukraine, the Pentagon said Wednesday, part of a long-term strategy by the United States and its partn… [+3973 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "politico",
  //       "name": "Politico"
  //     },
  //     "author": null,
  //     "title": "'Rules of the game have changed': Key Florida campaigns keep running ads during hurricane - POLITICO",
  //     "description": "Gov. Ron DeSantis, Sen. Marco Rubio and Rep. Val Demings are all continuing to run ads during the storm.",
  //     "url": "https://www.politico.com/news/2022/09/28/storm-campaigning-florida-00059267",
  //     "urlToImage": "https://static.politico.com/4f/8f/da1b3d71432497a0c65a6270d9d1/https-delivery.gettyimages.com/downloads/1243577594",
  //     "publishedAt": "2022-09-29T00:27:34Z",
  //     "content": "I think campaigns should shift to helping what will be hundreds of thousands of Floridians that will need a lot of assistance, said former Florida Republican Gov. Jeb Bush when asked about the campai… [+6110 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "politico",
  //       "name": "Politico"
  //     },
  //     "author": null,
  //     "title": "Newsom reverses course and signs farmworker bill backed by Biden - POLITICO",
  //     "description": "California's governor made the surprise decision after a veto threat he telegraphed last month.",
  //     "url": "https://www.politico.com/news/2022/09/28/newsom-signs-biden-backed-union-bill-00056562",
  //     "urlToImage": "https://static.politico.com/e8/db/88b7c4524e8c9fb45675639fb5e6/https-delivery.gettyimages.com/downloads/1338935651",
  //     "publishedAt": "2022-09-29T00:21:47Z",
  //     "content": "Newsom made no mention of the fact that he had said he could not support the bill in its current form just before it passed near the end of the legislative session. His office said it had reached a s… [+3823 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "engadget",
  //       "name": "Engadget"
  //     },
  //     "author": "https://www.engadget.com/about/editors/igor-bonifacic",
  //     "title": "Amazon's Kindle Scribe is a $339 e-reader you can write on - Engadget",
  //     "description": "Nearly 15 years after introducing the first Kindle, Amazon is finally adding a stylus to one of its e-readers..",
  //     "url": "https://www.engadget.com/kindle-scribe-announced-161233669.html",
  //     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/840f3350-3f47-11ed-9ff5-8f3ca76ee89f",
  //     "publishedAt": "2022-09-29T00:11:29Z",
  //     "content": "Nearly 15 years after introducing the first Kindle, Amazon is finally adding a stylus to one of its e-readers. At its fall hardware event, the company introduced the Kindle Scribe. The device feature… [+815 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": "Emily Mae Czachor",
  //     "title": "Katie Couric announces her breast cancer diagnosis - CBS News",
  //     "description": "The former \"CBS Evening News\" and \"Today\" anchor finished her final round of radiation treatments this week.",
  //     "url": "https://www.cbsnews.com/news/katie-couric-announces-breast-cancer-diagnosis/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/09/28/8de99a44-0442-45d7-8065-b523838bacc0/thumbnail/1200x630/7e0a7593654c614ceb09888500b050d7/gettyimages-1423225337.jpg",
  //     "publishedAt": "2022-09-29T00:04:00Z",
  //     "content": "Katie Couric was diagnosed with breast cancer over the summer, and subsequently underwent surgery and radiation treatments that finished this week. \r\nAs the former \"CBS Evening News\" and \"Today\" anch… [+2381 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Deadline"
  //     },
  //     "author": "Armando Tinoco",
  //     "title": "Netflix Removes LGBTQ Tag From Jeffrey Dahmer Series Following Backlash - Deadline",
  //     "description": "Netflix has made the decision to drop the LGBTQ tag from Dahmer — Monster: The Jeffrey Dahmer Story after experiencing backlash from viewers. The series about the Milwaukee serial killer was categorized with the LGBTQ tag but was recently removed following cr…",
  //     "url": "https://deadline.com/2022/09/netflix-removes-lgbtq-tag-jeffrey-dahmer-series-backlash-1235129976/",
  //     "urlToImage": "https://deadline.com/wp-content/uploads/2022/09/dahmer-monster-the-jeffrey-dahmer-story-netflix.jpg?w=1000",
  //     "publishedAt": "2022-09-28T23:08:00Z",
  //     "content": "Netflix has made the decision to drop the LGBTQ tag from Dahmer — Monster: The Jeffrey Dahmer Story after experiencing backlash from viewers. The series about the Milwaukee serial killer was categori… [+1792 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Porsche to debut amid market tumult in historic IPO - Reuters",
  //     "description": "Porsche AG shares will list on the stock market on Thursday after Volkswagen <a href=\"https://www.reuters.com/companies/VOWG_p.DE\" target=\"_blank\">(VOWG_p.DE)</a> priced shares at the top end of the announced range, a sign the luxury brand has lured buyers de…",
  //     "url": "https://www.reuters.com/markets/europe/porsche-debut-amid-market-tumult-historic-ipo-2022-09-28/",
  //     "urlToImage": "https://www.reuters.com/resizer/5yBNZ7CNPHIKUsXOhp274QNxSA0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GW6KWEACFZITDKXBYMWCPSAKYE.jpg",
  //     "publishedAt": "2022-09-28T22:09:00Z",
  //     "content": "FRANKFURT, Sept 29 (Reuters) - Porsche AG shares will list on the stock market on Thursday after Volkswagen (VOWG_p.DE) priced shares at the top end of the announced range, a sign the luxury brand ha… [+2134 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Gizmodo.com"
  //     },
  //     "author": "Florence Ion",
  //     "title": "Google Maps Will Now \"Vibe Check\" Your Destination's Neighborhood For You - Gizmodo",
  //     "description": "Weren't we using it for that already? The feature comes as part of Google's Search On '22 announcements.",
  //     "url": "https://gizmodo.com/google-maps-vibe-check-immersive-view-visual-search-len-1849593421",
  //     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f0a737a7fef1c4bbec6ceb60c735a209.png",
  //     "publishedAt": "2022-09-28T21:45:00Z",
  //     "content": "While Amazon held its massivedeviceshowcase today, Google announced several new search features, including security updates. You can read about how Google will help you take sensitive information off… [+3884 chars]"
  //   }
  // ]

  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
    page:1
  }

  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string
  }


  constructor() {
    super()
    console.log('hello i am constructor from news componenet');
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }

  }
///////////////////////////////////////////////////////////////////////////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  //update function for next and previous click common
  async updatenews() {
    
    this.props.setprogress(10)
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setprogress(40)
    let parsedata = await data.json()
    console.log(parsedata);       // ahiya thi khar pade ke otal 70 result 6 parntu apne ne 20 j dekahy 6
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    })
    this.props.setprogress(100)
    // console.log(this.state.articles.length)                       ;
  }

  ///componet did mount--------------- 
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=2ca38cd9a482465abfb631ade3f88ed9&page=1&pagesize=${this.props.pagesize}`
    // let data = await fetch(url)
    // this.setState({ loading: true })
    // let parsedata = await data.json()
    // console.log(parsedata);       // ahiya thi khar pade ke otal 70 result 6 parntu apne ne 20 j dekahy 6
    // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false })
    this.updatenews();

  }

  //------>commit on infine scroll-v35
  // handlenextclick = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updatenews();
  // }


  //---->comiton infinte scroll-v35
  // handlepreviousclick = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updatenews();
  // }


  //next click------->
  // handlenextclick = async () => {
  //   console.log('next');
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
  //   }
  //   else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2ca38cd9a482465abfb631ade3f88ed9&page=${this.state.page}&pagesize=${this.props.pagesize}`
  //     let data = await fetch(url)
  //     this.setState({loading:true})
  //     let parsedata = await data.json()
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedata.articles,
  //       loading:false
  //      })
  //   }
  // }

  ///previous btn-------->
  // handlepreviousclick = async () => {
  //   console.log('previous');
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2ca38cd9a482465abfb631ade3f88ed9&page=${this.state.page - 1}&pagesize=20`
  //   let data = await fetch(url)
  //   this.setState({loading:true})
  //   let parsedata = await data.json()
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedata.articles,
  //     loading:false
  //   })
  // }

  fetchMoreData = async () => {
    // this.updatenews() ======>aa nathi no thayu
    let url =`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url)
    this.setState({ loading: true })
    let parsedata = await data.json()
    console.log(parsedata);       // ahiya thi khar pade ke otal 70 result 6 parntu apne ne 20 j dekahy 6
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false
    })
  }


  render() {
    return (
      <>
      {/* <div className="container my-4"> */}
        <h2 className="text-center">NewsSafar - Top Headine {this.props.category}</h2>
       { this.state.loading && <Spinner />}
        {/* {this.state.articles.map((element)=>{console.log(element.author);
        })} */}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // hasMore={this.state.articles.length !== this.totalResults}  ===>bhulhati endlless scroling je v-36 ma sudhari
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row">
              {this.state.articles.map((element) => {
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
}
