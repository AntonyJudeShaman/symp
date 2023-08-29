import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Departments", href: "/department" },
  // { name: "Projects", href: "/projects" },
  // { name: "Contact", href: "/contact" },
];

export default function Home2() {
  return (
    <> 
    <Particles
        className="absolute inset-0 z-40 animate-fade-in"
        quantity={100}
      />   
      <div
      style={{ maxWidth: "100%", minHeight: "100vh" }}
      className="flex flex-col z-20 items-center overflow-hidden bg-gradient-to-tr from-zinc-950/20 via-teal-950 to-zinc-950/100"
    >
      <nav className="my-16 s animate-fade-in">
        <ul className="flex items-center text-6xl  justify-center ">
          <p className=" text-orange-600 pl-8 font-display">About TechFest </p>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/3 via-zinc-300/50 to-zinc-300/0" />
      
      <p className="p-margin text-justify font-display text-lg text-zinc-50 t animate-fade-in">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        esse distinctio saepe corporis velit accusantium, voluptatibus atque
        excepturi at reiciendis cupiditate omnis! Similique nesciunt tempore,
        laudantium earum nihil velit minus ipsum accusamus consectetur delectus
        soluta rem nobis error, minima a quaerat animi illo sunt nostrum rerum
        cumque dignissimos eum aliquid! Commodi expedita ex non voluptas
        molestiae saepe impedit enim quos repellendus numquam labore eos
        excepturi, beatae architecto assumenda distinctio vel id voluptate
        recusandae? Accusamus, deleniti labore non ipsa velit dolore quibusdam
        iste architecto porro ullam recusandae reprehenderit nam in. Repellendus
        error inventore incidunt veritatis repellat perferendis nam cum dolores?
        Accusantium.
      </p>

      <p className="p-margin mt-10 text-lg text-justify font-display text-zinc-50 animate-fade-in">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        esse distinctio saepe corporis velit accusantium, voluptatibus atque
        excepturi at reiciendis cupiditate omnis! Similique nesciunt tempore,
        laudantium earum nihil velit minus ipsum accusamus consectetur delectus
        soluta rem nobis error, minima a quaerat animi illo sunt nostrum rerum
        cumque dignissimos eum aliquid! Commodi expedita ex non voluptas
        molestiae saepe impedit enim quos repellendus numquam labore eos
        excepturi, beatae architecto assumenda distinctio vel id voluptate
        recusandae? Accusamus, deleniti labore non ipsa velit dolore quibusdam
        iste architecto porro ullam recusandae reprehenderit nam in. Repellendus
        error inventore incidunt veritatis repellat perferendis nam cum dolores?
        Accusantium.
      </p>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center border-2 border-zinc-50 rounded-xl animate-fade-in">
        {navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							<button className="button1 border-2 border-zinc-50"></button>
						</Link>
					))}
      </div>
    </div>
    </>

  );
}
