import { Button, Card } from "react-bootstrap"
import type { IarticleObj } from "./Home"
import { useNavigate } from "react-router-dom"

interface SingleArticle{
    article: IarticleObj

}



const ArticleCard =(props: SingleArticle)=>{
    const navigate=useNavigate()
return(
    <Card className="h-100">
      <Card.Img variant="top" src={props.article.image_url}  />
      <Card.Body className="h-100 d-flex flex-column">
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {props.article.summary}
        </Card.Text>
        <Card.Text>
          {props.article.published_at.toString().slice(0,10)} - {props.article.authors.map(author=>author.name)}
        </Card.Text>
        <Button variant="secondary" onClick={() => navigate(`/article/${props.article.id}`)}>vedi i dettagli</Button>
      </Card.Body>
    </Card>

)
}
export default ArticleCard