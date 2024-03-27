import Image from "next/image";

type Props = {
  selectedData: any;
};

const DetailCar = ({ selectedData }: Props) => {
  return (
    <div>
      {" "}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {`${selectedData?.model} - ${selectedData?.year}`}
            <br className="hidden lg:inline-block" />
            {selectedData?.color}
          </h1>
          <ul className="mb-8">
            {selectedData?.features?.length > 0 &&
              selectedData?.features.map((e: string, idx: number) => {
                return (
                  <li key={idx} className="leading-relaxed">
                    {e}
                  </li>
                );
              })}
          </ul>

          <div className="flex justify-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {`$ ${selectedData?.price || 0}`}
            </h1>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={600}
            height={720}
            className="object-cover object-center rounded"
            alt="hero"
            src={selectedData?.image || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailCar;
