import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import parseUploadRespData from "./utils/parseUploadResp";
import Img from "./components/Img";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImgSrc, setUploadedImgSrc] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(img);
    if (!firstName || !lastName || !img) {
      alert("Please fill out all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("img", img);

    setIsLoading(true);
    const { data } = await axios.post("http://localhost:3000/upload", formData);
    setIsLoading(false);

    const uploadRespData = parseUploadRespData(data);
    if (!uploadRespData) return alert("Something went wrong");

    setUploadedImgSrc(uploadRespData.Location);
  }

  return (
    <main className="p-2">
      <form
        className="max-w-[400px] flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <Input type="text" setState={setFirstName} label="First name" />
        <Input type="text" setState={setLastName} label="Last name" />
        <Input type="file" setState={setImg} label="Image" />
        <button
          style={{ cursor: isLoading ? "wait" : undefined }}
          className="bg-green-700 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
      <Img src={uploadedImgSrc} />
    </main>
  );
}

export default App;
