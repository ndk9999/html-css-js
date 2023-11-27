const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img 
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard;