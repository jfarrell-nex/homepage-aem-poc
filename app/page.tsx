import Image from "next/image";
import styles from "./page.module.css";
import { fetchCMSData } from "./cms";

const mapPromotionToPromotions = (promotion: {
  
  promotionName: {
    value: string;
  };
  imageUrl: {
    value: string;
  };
}): Promotion[] => {

  const promotionLocal: Promotion = {
    promotionName: promotion.promotionName.value,
    imageUrl: promotion.imageUrl.value,
  }

  return [promotionLocal,promotionLocal,promotionLocal,promotionLocal,promotionLocal,promotionLocal,promotionLocal,promotionLocal]
};

export default async function Home() {
  const data = await fetchCMSData();

  return (
    <main className={styles.main}>
      <Hero />
      <FlightManagement />
      <Content promotions={mapPromotionToPromotions(data)} />
    </main>
  );
}

const Hero = () => {
  return <div className={styles.hero} />;
};

const FlightManagement = () => {
  return (
    <div className={styles.flightManagementContainer}>
      <button>Manage My Booking</button>
      <button>Check In</button>
      <button>Check Flight Status</button>
    </div>
  );
};

interface Promotion {
  promotionName: string;
  imageUrl: string;
}

interface ContentI {
  promotions: Promotion[];
}

const Content = ({ promotions }: ContentI) => {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>Your Account</div>
      <div className={styles.column2}>
        <div className={styles.element1}>
          <PromotionGrid promotions={promotions} />
        </div>
        <div className={styles.element2}>
          <div className={styles.subElement}>Sub-element 1</div>
          <div className={styles.subElement}>Sub-element 2</div>
        </div>
      </div>
    </div>
  );
};

const PromotionGrid = ({ promotions }: ContentI) => {
  return (
    <div className={styles.gridContainer}>
      {promotions.map((promotion, index) => {
        return (
          <div className={styles.itemContainer} key={index}>
            <div className={styles.overflow}>
              <div className={styles.gridItem}>
                <Image
                  src={promotion.imageUrl}
                  width={160}
                  height={160}
                  alt=""
                />
              </div>
            </div>
            <p>{promotion.promotionName}</p>
          </div>
        );
      })}
    </div>
  );
};
