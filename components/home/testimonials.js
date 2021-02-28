import styles from "../../styles/Home.module.css";

const rating = "***** Highly likely to recommend";

const review = `
  We were so fortunate to have found Brian Han as our Realtor,
  he helped us find the right house in the right neighborhood for
  the right price. He was patient as we traveled to look at homes
  over several months and cautioned us about making unreasonable
  offers when we fell too quickly for overpriced homes.

  In short, he was always on our side working to make our house
  purchase as simple and successful as possible. The best part about
  working with Brian was that he was always more focused on answering
  our questions, giving us good advice, and finding homes that met
  our needs than he was on closing a deal. We would recommend him to
  anyone.`;

const reviewer = "Jae Butler";

export default function Hero() {
  return (
    <div className={styles.testimonials}>
      <span className={styles.testimonials__quotes}>"</span>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__rating}>{rating}</div>
      <p className={styles.testimonials__review}>{review}</p>
      <p className={styles.testimonials__reviewer}>{reviewer}</p>
      <span className={styles.testimonials__quotes}>"</span>
    </div>
  );
}
