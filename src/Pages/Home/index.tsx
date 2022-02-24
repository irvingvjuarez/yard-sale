import { Filter } from "../../Containers/Filter";
import { Item } from "../../Components/Item";

export const Home: React.FC = (): JSX.Element => {
  return(
    <section className="Home">
      <Filter />

      <section className="Home__items">
        <Item />
      </section>
    </section>
  )
}