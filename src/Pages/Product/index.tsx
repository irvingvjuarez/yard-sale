import { useParams } from "react-router-dom"
import { ButtonCTA } from "../../Components/ButtonCTA"
import { Rating } from "../../Components/Rating"

export const Product: React.FC = (): JSX.Element => {
  const { title } = useParams()

  return(
    <section className="Detail">
      <article className="Detail__thumbnail">
        {/* <img src="" alt="" /> */}
      </article>

      <article className="Detail__info">
        <div className="Detail__info--header">
          <h2>Article Name</h2>
          <ButtonCTA />
        </div>

        <div className="Detail__info--meta">
          <span className="Detail__price">$XXXXX</span>
          <Rating content={4.5} />
        </div>

        <p className="Detail__info--description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime iure cupiditate dolor, accusamus laboriosam culpa. Commodi temporibus distinctio aliquid totam, voluptatem cum voluptas ad? Animi qui quam enim nihil.
        </p>
      </article>
    </section>
  )
}