import React, {useState} from 'react'
import axios from 'axios'

export default function Service() {

  const[news, setNews] = useState([])
  const[person, setPerson] = useState([])


  const fetchNewsApi = () => {
    //   console.log("CLicked!!")
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=35713a37bb7f4271b7a7d55c2d62f4b0")
    .then((response) => {
        console.log(response)
        setNews(response.data.articles)
    })
  }

// const fetchNewsApi = () => {
//     axios.get("http://localhost:8081/api/v1/employees")
//     .then((response) => {
//         console.log(response)
//         setPerson(response.data.firstName)
//     })
// }

  return (
    <div>
        <button className="btn btn-primary my-5" onClick={fetchNewsApi}>Fetch News</button>

        <div className="container">
            <div className="row">
                {
                    news.map((value) => {
                        return(
                            <div className="col-4">
                            <div className="card" style={{width: "18rem"}}>
                            <img src={value.urlToImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                                <a href="#" className="btn btn-primary">Read Now</a>
                            </div>
                            </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}
