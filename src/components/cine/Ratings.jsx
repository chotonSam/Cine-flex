export default function Ratings({value}) {
  const stars = Array(value).fill("./assets/star.svg");

  return (
    <>
      {stars.map((star, index) => (
        <img src={star} width="14" height="14" alt="star" key={index} />
      ))}
    </>
  );
}
