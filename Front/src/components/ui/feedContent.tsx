import { Link } from "react-router-dom";
import fast from "../../assets/FAST.jpeg";
import { Badge } from "@/components/ui/badge";


interface FeedContentProps {
  university: {
    name: string;
    description?: string;
    image_url?: string;
    location?: string;
    tags: string[];
    Fee?: string; // Assuming Fee is the ObjectId of a FeeStructure
    Course?: string; // Assuming Course is the ObjectId of a Course
    _id: string;
  };
}

const FeedContent: React.FC<FeedContentProps> = ({ university }) => {
  const { name, description, image_url, tags } = university;
  return (
    <Link to={`university/${university._id}`}>
    <div className="flex flex-col  justify-center items-center my-2 border-gray-600  border-2 rounded-md p-2">
      <div className="flex flex-row justify-start gap-2 w-full">
        <section className="max-w-32 flex items-center justify-center max-h-28 rounded-lg overflow-hidden shadow-lg">
          <img src={image_url} alt={name} className="w-auto h-auto min-w-fit min-h-fit" />
        </section>
        <section className="flex flex-col w-full flex-1">
          <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-200 leading-tight">
            {name}
          </h1>
          <p className="max-h-24 overflow-scroll scrollbar-hide text-sm md:text-md lg:text-md">
            {description}
          </p>
        </section>
      </div>
      <div className="flex flex-row justify-start gap-2 w-full p-2 flex-wrap ">
        {tags.slice(0, 3).map((value, index) => (
          <Badge key={index} className="bg-blue-300 text-gray-800 hover:bg-white">
            {value}
          </Badge>
        ))}
      </div>
    </div>
    </Link>
  );
}



export default FeedContent;
