import bgImg from "../../assets/images/bg.png";

const NewsLatter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`bg-cover space-y-5 bg-center bg-no-repeat text-white px-6 py-16 text-center mb-8`}
    >
      <h2 className="text-3xl text-white font-bold">
        Create an Amazing Newspaper
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        quibusdam molestiae tenetur
      </p>
      <button className="btn btn-error rounded-none text-white">
        Learn More
      </button>
    </div>
  );
};

export default NewsLatter;
