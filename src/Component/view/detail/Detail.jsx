import DetailComp from "../../detailComp/DetailComp";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return <DetailComp id={id} />;
};

export default Detail;
