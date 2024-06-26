import loaderFull from "../images/loader-full.svg";
import banana from "../images/banana.svg";

type Props = { bananas: number };

const Loader = ({ bananas }: Props) => {
  const width = ((bananas + 1) / 7) * 100;

  return (
    <div className="w-[400px] z-10 transform transition h-6 fixed top-10 left-0 right-0 mx-auto rounded-full bg-gray-50 ">
      <div style={{ width: `${width}%`, height: "100%" }}>
        <img
          className="w-full h-full object-cover rounded-full"
          src={loaderFull}
          alt=""
        />
      </div>
      <img
        src={banana}
        className="absolute -right-8 -top-6 w-20"
        alt="banana"
      />
    </div>
  );
};

export default Loader;
