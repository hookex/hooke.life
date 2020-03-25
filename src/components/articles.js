import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          <div className=" uk-grid-match" data-uk-grid>
            {articles.map((article, i) => {
              return (
                <Card article={article} key={`article__${article.node.id}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
