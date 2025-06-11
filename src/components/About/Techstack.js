import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiRedux,
} from "react-icons/si";

import { FaLaravel } from "react-icons/fa";
import { SiDjango, SiFlask, SiLaravel, SiApollographql } from "react-icons/si";
import { MdOutlineHttp } from "react-icons/md";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <FaLaravel /> {/* Laravel */}
</Col>


<Col xs={4} md={2} className="tech-icons">
  <SiDjango /> {/* Django */}
</Col>



<Col xs={4} md={2} className="tech-icons">
  <SiFlask /> {/* Flask */}
</Col>
    </Row>
  );
}

export default Techstack;
