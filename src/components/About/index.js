import React from "react";
import img from '../../assets/imgs/me.jpg'

//component about me

function About(){
    return(
        <section className="mx-5">
            <h1 className="my-3">About Me</h1>
            <img src={img} alt="Javier" className="img"/>
            <p className="my-3 p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem? aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mag Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam do  loremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem? nam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem?
            </p>
            <p className="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem? i cupiditate quaerat nisi dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, nesciunt deserunt quidem quod libero quos corrupti ipsam doloremque. Blanditiis hic neque omnis eum, amet sequi cupiditate quaerat nisi dolorem?
            </p>
        </section>
    );
}

export default About;