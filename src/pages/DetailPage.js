import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TokenSale from "../components/TokenSale";
import TokenInfo from "../components/TokenInfo";
import ProjectInfo from "../components/ProjectInfo";
import axios from "axios";
import Header from "../components/Header";

function DetailPage() {

  const { id } = useParams();
  console.log(id);
  const [project, getProject] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://marifx.com/api/projects/${id}`)
      .then((res) => {
        getProject(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Error from getProject By Name");
      });
  }, [id]);

  return (
    <div className="h-full">
      <Header />
      <div
        className="w-full px-20 h-[500px] pt-8"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(15, 16, 12, 0.3), rgba(40, 37, 31, 0.6)), url(${project.banner_image})`,
          filter: "blur(26px)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className=" absolute"
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "65%",
          zIndex: 2,
        }}
      >
        <ProjectInfo project={project} />
        <div className="grid gap-8" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <TokenInfo project={project} />
            <TokenSale project={project} />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
