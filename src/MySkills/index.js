import React from "react";
import "./styles.css";
import SkillsCard from "./SkillsCard";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiLaravel,
  DiMysql,
  DiGit,
  DiBootstrap,
  DiSass,
  DiResponsive,
  DiPhp,
  DiNodejs
} from "react-icons/di";

const MySkills = () => {
  return (
    <div className="skills">
      <h2>Minhas skills</h2>

      <div className="skillsGrid">
        <SkillsCard icon={<DiHtml5 className="icon" />} />
        <SkillsCard icon={<DiCss3 className="icon" />} />
        <SkillsCard icon={<DiJsBadge className="icon" />} />
        <SkillsCard icon={<DiReact className="icon" />} />
        <SkillsCard icon={<DiLaravel className="icon" />} />
        <SkillsCard icon={<DiMysql className="icon" />} />
        <SkillsCard icon={<DiGit className="icon" />} />
        <SkillsCard icon={<DiBootstrap className="icon" />} />
        <SkillsCard icon={<DiSass className="icon" />} />
        <SkillsCard icon={<DiResponsive className="icon" />} />
        <SkillsCard icon={<DiPhp className="icon" />} />
        <SkillsCard icon={<DiNodejs className="icon" />} />
      </div>
    </div>
  );
};

export default MySkills;
