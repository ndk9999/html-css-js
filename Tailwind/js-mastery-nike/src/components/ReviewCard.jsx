import { star } from "../assets/icons";

const ReviewCard = ({customerName, imgURL, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img 
            src={imgURL}
            alt={customerName}
            className="rounded-full w-[120px] h-[120px] object-cover"
        />

        <p className="mt-6 max-w-sm text-center info-text">
            {feedback}
        </p>

        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img 
                src={star}
                alt="rating"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">
                ({rating})
            </p>
        </div>

        <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">
            {customerName}
        </h3>
    </div>
  )
}

export default ReviewCard;