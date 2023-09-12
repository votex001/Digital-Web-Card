import "./Header.css"


export default function Header() {
    return (
        <div className="header">
            <img className="header--img" src="profile.jpg" />
            <h1 className="header--name" >Eugene Bondarev</h1>
            <p className="header--bottom-text">Frontend Developer</p>
            <div className="header--links">
            <a className="header--link" href="mailto:jeneea45@gmail.com"><img src="./mail.svg" />Email</a>
            <a className="header--link blue" href="https://www.linkedin.com/in/evgheniy-bondarev-834b5525b" target="_blank"><img src="./linkedin.svg"/>Linkedin</a>
            </div>
        </div>
    )
}