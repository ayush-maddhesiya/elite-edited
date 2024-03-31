import React from 'react'
import Head from "next/head";
import styles from "@/styles/Team.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CgMouse } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const teams = () => {
  const teamMembers = [
    { name: "Mandeep Yadav", role: "Web Developer", imageSrc: "mandeep.png" ,insta:'https://www.instagram.com/themandeepyadav/',linkdin:'https://www.linkedin.com/in/mandeepyadav27',github:'https://github.com/M7NDEEP'},
    { name: "Mayank Matkar", role: "Java Developer", imageSrc: "mayank.jpeg" ,insta:'https://www.instagram.com/mayank_matkar',linkdin:'https://www.linkedin.com/in/mayank-matkar-042003k',github:'https://github.com/Codermayankkk'},
    { name: "Abhigya Sharma", role: "Content/Java Developer", imageSrc: "abhigya.jpeg" ,insta:'https://www.instagram.com/itz_abhisss',linkdin:'https://www.linkedin.com/in/abhigya-sharma-88a929288',github:'https://github.com/abhigyaabs2'},
    { name: "Aditya Patel", role: "Web Developer", imageSrc: "aditya.jpeg" ,insta:'https://www.instagram.com/i_aditya.p/',linkdin:'https://www.linkedin.com/in/adityapatel09',github:'https://github.com/iampateladitya'},
    { name: "Khushbu Gehlot", role: "Web Developer", imageSrc: "khushbu.jpeg" ,insta:'https://www.instagram.com/khushbugehlot___',linkdin:'https://www.linkedin.com/in/khushbu-gehlot-15a38b214',github:'https://github.com/khushbugehlot31'},
    { name: "Kripansh Kumrawat", role: "Java/Python Developer", imageSrc: "kripansh.jpg" ,insta:'https://www.instagram.com/_kripansh_',linkdin:'http://linkedin.com/in/kripansh29',github:'http://github.com/shallow-universe'},
    { name: "Nawadha Jadiya", role: "Java/Flutter Developer", imageSrc: "navadha.jpeg" ,insta:'https://www.instagram.com/nawadhaaa___',linkdin:'https://www.linkedin.com/in/nawadha-jadiya-aab426253',github:'https://github.com/NawadhaJadiya'},
    { name: "Ayush Maddhesiya", role: "Backend Developer", imageSrc: "ayush.jpeg" ,insta:'#',linkdin:'https://www.linkedin.com/in/ayush-maddhesiya/',github:'https://github.com/ayush-maddhesiya'},
    { name: "Vaibhav Modi", role: "Frontend Developer", imageSrc: "vaibhav.jpeg" ,insta:'https://www.instagram.com/vaibhav_modi_45',linkdin:'https://www.linkedin.com/in/vaibhav-modi-59a775244/',github:'https://github.com/vaibhavmodi45'},
  ];
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.page1}>
          <div className={styles.box1}></div>
          <h1>Our <span style={{ WebkitTextStroke: '2px white', color: 'transparent', letterSpacing: '1px' }}>Team</span></h1>
        </div>
        <div className={styles.teamdiv}>
          {teamMembers.map((member, index) => (
            <div className={styles.teamcard}>
              <img src={member.imageSrc} alt={member.name} />
              <div className="flex flex-col text-white" style={{ position: 'absolute', bottom: '0%', left: '0', padding: '0.5rem' }}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className={styles.teamcardicon}>
                <Link href={member.insta} target='_blank'><IoLogoInstagram size={30} style={{ marginBottom: '0.5rem' }} /></Link>
                <Link href={member.linkdin} target='_blank'><FaLinkedinIn size={22} style={{ marginBottom: '0.5rem' }} /></Link>
                <Link href={member.github} target='_blank'><FaGithub size={23} /></Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default teams