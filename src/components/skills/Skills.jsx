import SectionTitle from "../SectionTitle"
import "./skills.css"
import SkillsSidebar from './SkillsSidebar'


const Skills = () => {
    return (
        <section className="skills">
            <div className="container container-skills">
                <div className="skills-content">
                    <SectionTitle number="02" text="my skills" />
                    <p className="skills-text inner-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a href="" className="skills-link btn-orange">DOWNLOAD CV</a>
                </div>
                <SkillsSidebar />
            </div>
        </section>
    )
}

export default Skills