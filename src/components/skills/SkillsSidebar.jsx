import { skills } from "../../utils/data";


const SkillsSidebar = () => {
  return (
        <div className="skills-sidebar">
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          {/* Название навыка */}
          <h4 className="skill-name">{skill.name}</h4>

          {/* Прогресс-бар */}
          <div className="skill-bar">
            <span className={`skill-level ${skill.levelClass}`}></span>
          </div>

          {/* Процент */}
          <div className="skill-pers">{skill.percent}</div>
        </div>
      ))}
    </div>
  )
}

export default SkillsSidebar