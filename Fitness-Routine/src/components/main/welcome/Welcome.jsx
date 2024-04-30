import "./Welcome.css";
import Image from 'react-bootstrap/Image';
import background from '../../../assets/background.jpg';

export default function FluidExample() {
    return (
        <>
        <main>
            <section className="">
                <h1>Welcome to Proyect Fitness</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, et.</p>
            </section>
            <section>
                <Image src={`${background}`} fluid />;
            </section>
        </main>
        </>
    )
  }