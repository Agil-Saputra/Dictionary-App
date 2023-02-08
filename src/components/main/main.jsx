import Audio from "./audio";

// import all dependencies
import { useQuery } from "react-query";
import axios from "axios";

const main = () => {
  // fetching data from api
  const getFacts = async () => {
    const res = await axios(
      "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
    );
    return res;
  };

  // Using the hook
  const { error, isLoading, data } = useQuery("names", getFacts);

  // define a data variable
  const datas = data?.data[0]
  const phonetics =   data?.data[0].phonetics[2];
  const definitions = data?.data[0].meanings[0].definitions;
  // const meanings = 

  

  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex justify-between">
        <h1>{datas.word}</h1>
        <Audio url={phonetics.audio} />
      </div>
      <p>{datas.phonetic}</p>
      <p>noun</p>
      <p>meaning</p>
      <p></p>
    </>
  );
};

export default main;
