import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const QuizInfo = ({
  quizName,
  setQuizName,
  quizObj,
  setQuizObj,
  preview,
  setPreview,
  selectedFile,
  setSelectedFile,
}) => {
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="w-full px-20">
      {/* <h2 className="text-xl font-bold tracking-tight">
            Quiz Info
        </h2> */}

      <div className="flex flex-col justify-between">
        <div className="my-2">
          {/* Set quiz name */}
          <Input
            type="quiz"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            placeholder="Quiz Name"
          />
        </div>

        {/* Set quiz pic */}
        <div className="pb-4 flex flex-col justify-center">
          <Label htmlFor="picture">Quiz Pic</Label>
          <Input id="picture" onChange={onSelectFile} type="file" />
        </div>
        <div className="pb-4 flex flex-row justify-center">
          {selectedFile && <img src={preview} width={200} height={100} />}
        </div>

        {/* Set quiz desc */}
        <div className="my-2">
          <Input
            type="quiz"
            value={quizObj}
            onChange={(e) => setQuizObj(e.target.value)}
            placeholder="Quiz Objective"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizInfo;
