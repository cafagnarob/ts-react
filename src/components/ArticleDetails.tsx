import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { IarticleObj } from "./Home"
import { Button, Container } from "react-bootstrap"





const ArticleDetails =()=>{
     const navigate=useNavigate()
    const {id}= useParams()

    const [articleD, setArticleD]= useState<IarticleObj | null>(null)


    const getArticleD=()=>{

        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error(`errore nella fetch: ${res.status.toString()}`)
            }
        })
        .then(data=>{
            console.log(data)
            setArticleD(data)
        })
        .catch(err=>{
            console.log('errore', err)
        })

    }

    useEffect(()=>{
        getArticleD()
    }, [id])

    if(!articleD) return <p>Loading...</p>


return(
    <Container className="my-4 text-center" fluid={true} >
            <h1>{articleD.title}</h1>

            <img
                src={articleD.image_url}
                alt={articleD.title}
                className="img-fluid my-3"
            />

            <p>{articleD.summary}</p>

            <p>
                {articleD.authors?.map(author => author.name).join(", ")}
            </p>

            <p>
                <a href={articleD.url} target="_blank" rel="noreferrer noopener">
  {articleD.url}
</a>
            </p>
            <Button variant="secondary" onClick={() => navigate(`/`)}> Torna alla home</Button>
        </Container>

)
}
export default ArticleDetails