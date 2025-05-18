interface CardProps {
  title: string;
  description: string;
  image: string;
  //   link: string; add into the Card Props to make it dynamic
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="max-w-sm mx-auto m-[1rem] bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold  mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          //   href={link} add to the Card Props to make it dynamic
          className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
