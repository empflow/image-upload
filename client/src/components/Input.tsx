import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

interface TProps {
  type: string;
  setState: Dispatch<SetStateAction<any>>;
  label: string;
}

type TChangeEvent = ChangeEvent<HTMLInputElement>;

export default function Input({ label, setState, type }: TProps) {
  const id = useRef(Math.random().toString());

  function handleInputChange(e: TChangeEvent) {
    setState(e.target.value);
    console.log("sdf");
  }

  function handleFileInputChange(e: TChangeEvent) {
    const {
      currentTarget: { files },
    } = e;
    console.log("hi");
    setState(files ? files[0] : null);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id.current}>{label}</label>
      <input
        className="border border-gray-400 rounded"
        type={type}
        onChange={type === "file" ? handleFileInputChange : handleInputChange}
        id={id.current}
        style={{ border: type === "file" ? "none" : undefined }}
      />
    </div>
  );
}
