import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ArticleCard from "./ArticleCard"



export interface IarticleObj {
  id: number
  title: string
  authors: Author[]
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date
  updated_at: Date
  featured: boolean
  launches: Launch[]
  events: any[]
}

export interface Author {
  name: string
  socials: null
}

export interface Launch {
  launch_id: string
  provider: string
}



const Home =()=>{






const [article,setArticle]= useState<IarticleObj[]>([])

const getArticle=()=>{
fetch('https://api.spaceflightnewsapi.net/v4/articles/')
.then(res=>{
    if(res.ok){
        return res.json()
    }else{
        throw new Error(`errore nella fetch: ${res.status.toString()}`)
    }
})
.then(data=>{
    console.log(data.results)
    setArticle(data.results)
})
.catch(err=>{
    console.log('errore', err)
})
}

useEffect(()=>{
    getArticle()
}, [])




    return(
        <Container>
            <Row>
                {article.slice(0,9).map((item)=>{
                    return(

                <Col key={item.id} sm={12} md={6} lg={4}  className="my-3">
                <ArticleCard article={item}/>
                </Col>
                    )
                })}
            </Row>
        </Container>
    )

}
export default Home