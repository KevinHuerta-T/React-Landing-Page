import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w[192] min-w-[120px] m-5`}>
            <img src={client.logo} alt="client logo" className="sm:2-[192px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )


export default Clients