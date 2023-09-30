function ShoeCard({shoeURL, bigShoeImage, changeBigShoeImage}) {

	const handleClick =() => {
		if (bigShoeImage !== shoeURL.bigShoeImage) {
			changeBigShoeImage(shoeURL.bigShoe)
		}
	}
  return (
    <div
      className={`border-2 rounded-lg ${
        bigShoeImage === shoeURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer bg-hero p-3 `}
      onClick={handleClick}
    >
      <img
        src={shoeURL.thumbnail}
        alt="shoe collection"
        width={150}
        height={150}
      />
    </div>
  );
}

export default ShoeCard