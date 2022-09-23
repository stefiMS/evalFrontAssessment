import { Course } from "./courses/Course";
import { MyCourses } from "./courses/MyCourses";
import { Navbar } from "./NavBar";
import './Home.css'
import bar from "../../assets/bar.png"
import { MoreCourses } from "./courses/MoreCourses";


export const Home = () =>{

    return(
        <div className="containerHome">
            <Navbar/>
            <section className="sectionCourses">
                <Course/>
                <MyCourses/>
                <div>
                    <img src={bar} alt="bar" id="bar"/>
                </div>
                <MoreCourses/>
            </section>
            

        </div>
    )
}