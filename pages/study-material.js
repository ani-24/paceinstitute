import { useEffect } from "react";

const StudyMaterial = () => {
  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div className="container">hello</div>;
};

export default StudyMaterial;
