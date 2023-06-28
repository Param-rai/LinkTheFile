import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInput = useRef();
  const logo =
    "https://img.freepik.com/free-vector/transfer-files-concept-landing-page_52683-25088.jpg?w=740&t=st=1687310952~exp=1687311552~hmac=210b98c3aff44c119950fe49b85e4ac53236225aad6aa51b37434040f461d033";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let res = await uploadFile(data);
        setResult(res.path);
      }
    };

    getImage();
  }, [file]);

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple File sharing</h1>
        <p>Upload any file and share the link with your friends</p>
        <button onClick={() => fileInput.current.click()}>Upload</button>
        <input
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
