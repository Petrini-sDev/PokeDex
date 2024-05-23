import Link from "next/link";
import { Card, CardBody } from "react-bootstrap";
import PokemonDetails from "@/components/PokemonDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
    // Call an external API endpoint to get pokemon
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
    const data = await res.json();

    return {
        props: {
            pokemon: data
        }
    };
}

export default function About({ pokemon }) {
    return (
        <>
            <PageHeader name = {'About the Developer: Stefano Petrini'}/>

            <Card>
                <CardBody>
                    <p>Hi, I'm Stefano Petrini, currently immersed in the dynamic world of Computer Programming and Analysis at Seneca College. Coding isn't just a subject for me, it's a language I'm fluent in, and I thrive on the challenges it presents. When I'm not immersed in lines of code or debugging, you'll likely find me on the field, embracing the thrill of sports like hockey, soccer, and baseball. The blend of strategy, teamwork, and physical exertion in these sports provides a welcome contrast to the cerebral nature of programming.Beyond the digital realm, the sports field, and the fast-paced world of video games, I have a diverse set of coding skills. I am proficient in languages like C, C++, JavaScript, Python, HTML, CSS, SQL, and MongoDB. Additionally, I'm currently honing my skills in Python, adding another layer to my programming expertise. My particular interest lies in web development, where I find joy in creating visually appealing and functional websites that bring ideas to life. As I navigate through Seneca, I'm not just shaping a career in software development; I'm cultivating a well-rounded identity that includes the logical thinking required in coding, the immersive experiences found in video games, and a versatile skill set in multiple programming languages, with a specific focus on web development. These diverse interests and skills not only contribute to my personal growth but also bring a unique and valuable perspective to the tech industry. I look forward to graduating and combining my love for coding, sports, and web development into a fulfilling and dynamic career.</p>
                    <br />
                    <p>One of my favourite Pokemon of all time is <Link href="https://www.pokemon.com/us/pokedex/charizard" passHref legacyBehavior>Charizard</Link></p>
                </CardBody>
            </Card>
        </>
    )
}