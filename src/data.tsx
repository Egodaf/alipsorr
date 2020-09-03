import image1 from './images/game_1.png'
import image2 from './images/game_2.png'
import image3 from './images/game_3.png'
import image4 from './images/game_4.png'
import image5 from './images/game_5.png'
import { ellipse, square, triangle, airplane, boat } from 'ionicons/icons';

export const routes = [
    {
        label: 1,
        key: 1,
        href: '/tab1',
        tab: 'tab1',
        image: image1,
        title: 'What Is a Rocket?',
        descriptionArr: [
          {
            title: '',
            texts: [
              'The word "rocket" can mean different things. Most people think of a tall, thin, round vehicle. They think of a rocket that launches into space. "Rocket" can mean a type of engine. The word also can mean a vehicle that uses that engine.',
            ],
          },
          {
            title: 'How Does a Rocket Engine Work?',
            texts: [
              'Like most engines, rockets burn fuel. Most rocket engines turn the fuel into hot gas. The engine pushes the gas out its back. The gas makes the rocket move forward.',
              'A rocket is different from a jet engine. A jet engine needs air to work. A rocket engine doesn\'t need air. It carries with it everything it needs. A rocket engine works in space, where there is no air.',
              'There are two main types of rocket engines. Some rockets use liquid fuel. The main engines on the space shuttle orbiter use liquid fuel. The Russian Soyuz uses liquid fuels. Other rockets use solid fuels. On the side of the space shuttle are two white solid rocket boosters. They use solid fuels. Fireworks and model rockets also fly using solid fuels.',

            ],
          },
          {
            title: 'Why Does a Rocket Work?',
            texts: [
              'In space, an engine has nothing to push against. So how do rockets move there? Rockets work by a scientific rule called Newton\'s third law of motion. English scientist Sir Isaac Newton listed three Laws of Motion. He did this more than 300 years ago. His third law says that for every action, there is an equal and opposite reaction. The rocket pushes on its exhaust. The exhaust pushes the rocket, too. The rocket pushes the exhaust backward. The exhaust makes the rocket move forward.',
              'This rule can be seen on Earth. Imagine a person standing on a skateboard. Imagine that person throwing a bowling ball. The ball will go forward. The person on the skateboard will move, too. The person will move backward. Because the person is heavier, the bowling ball will move farther.',

            ],
          },
          {
            title: 'When Were Rockets Invented?',
            texts: [
              'The first rockets we know about were used in China in the 1200s. These solid rockets were used for fireworks. Armies also used them in wars. In the next 700 years, people made bigger and better solid rockets. Many of these were used for wars too. In 1969, the United States launched the first men to land on the moon using a Saturn V rocket.',

            ],
          },
          {
            title: 'How Does NASA Use Rockets?',
            texts: [
              'Early NASA missions used rockets built by the military. Alan Shepard was the first American in space. He flew on the U.S. Army\'s Redstone rocket. John Glenn was the first American in orbit. He flew on an Atlas rocket. NASA\'s Gemini missions used the Titan II rocket. The first rockets NASA built to launch astronauts were the Saturn I, the Saturn IB and the Saturn V. These rockets were used for the Apollo missions. The Apollo missions sent men to the moon. A Saturn V also launched the Skylab space station. The space shuttle uses rocket engines.',
              'NASA uses rockets to launch satellites. It also uses rockets to send probes to other worlds. These rockets include the Atlas V, the Delta II, the Pegasus and Taurus. NASA uses smaller "sounding rockets" for scientific research. These rockets go up and come back down. They do not fly into orbit',
            ],
          },
          {
            title: 'How Will NASA Use Rockets in the Future?',
            texts: [
              'New rockets are being developed today. They will launch astronauts on future missions.',
              'The new rockets will not look like the space shuttle. These rockets will look more like earlier ones. They will be tall and round and thin. These rockets will take astronauts into space. They will take supplies to the International Space Station. NASA also is working on a powerful new rocket called a heavy lift vehicle. This rocket will be able to take big loads into space.',
              'Together, these new rockets will make it possible to explore other worlds. Someday they may send humans to Mars.',
            ],
          },
        ],
        icon: square,
      },
    {
        label: 2,
        key: 2,
        href: '/tab2',
        tab: 'tab2',
        image: image2,
        title: 'Rockets and rocket launches, explained',
        descriptionArr: [
          {
            title: '',
            texts: [
              'Since the invention of gunpowder in China more than seven centuries ago, humans have sent cylinders soaring into the skies with the help of controlled explosions. These craft and their engines, called rockets, have taken on many roles as fireworks, signal flares, and weapons of war.',
              'But since the 1950s, rockets also have let us send robots, animals, and people into orbit around Earth—and even beyond.',
            ],
          },
          {
            title: 'How do rockets work?',
            texts: [
              'As tempting as the logic may be, rockets don\'t work by “pushing against the air,” since they also function in the vacuum of space. Instead, rockets take advantage of momentum, or how much power a moving object has.',
              'If no outside forces act on a group of objects, the group\'s combined momentum must stay constant over time. Imagine yourself standing on a skateboard with a basketball in your hands. If you throw the basketball in one direction, you and the skateboard will roll in the opposite direction to conserve momentum. The faster you throw the ball, the faster you roll backward.',
              'Rockets work by expelling hot exhaust that acts in the same way as the basketball. The exhaust\'s gas molecules don\'t weigh much individually, but they exit the rocket\'s nozzle very fast, giving them a lot of momentum. As a result, the rocket moves in the opposite direction of the exhaust with the same total oomph.',
              'Rockets make exhaust by burning fuel in a rocket engine. Unlike airplanes\' jet engines, rockets are designed to work in space: They don\'t have intakes for air, and they bring along their own oxidizers, substances that play the role of oxygen in burning fuel. A rocket\'s fuel and oxidizer—called propellants—can be either solid or liquid. The space shuttle\'s side boosters used solid propellants, while many modern rockets use liquid propellants',
            ],
          },
          {
            title: 'What are the stages of a rocket launch?',
            texts: [
              'Today\s large, space-bound rockets consist of at least two stages, sections stacked in a shared cylindrical shell. Each stage has its own engines, which can vary in number. The first stage of SpaceX\'s Falcon 9 rocket has nine engines, while the first stage of Northrop Grumman\'s Antares rocket has two.',
              'A rocket\'s first stage gets the rocket out of the lower atmosphere, sometimes with the help of extra side boosters. Because the first stage must lift the entire rocket, its cargo (or payload), and any unused fuel, it\'s the biggest and most powerful section.',
              'The faster a rocket goes, the more air resistance it encounters. But the higher the rocket goes, the thinner the atmosphere gets. Combined, these two factors mean that the stress on a rocket rises and then falls during a launch, peaking at a pressure known as max q. For the SpaceX Falcon 9 and the United Launch Alliance Atlas V, max q occurs at 80 to 90 seconds after liftoff, at altitudes between seven and nine miles.',
              'Once the first stage has done its job, the rocket drops that portion and ignites its second stage. The second stage has a lot less to transport, and it doesn\'t have to fight through the thick lower atmosphere, so it usually has just one engine. At this point, rockets also let go of their fairings, the pointed cap at the rocket\'s tip that shields what the rocket is carrying—its payload—during the launch\'s first phase.',
              'Historically, most of a rocket\'s discarded parts were left to fall back down to Earth and burn up in the atmosphere. But starting in the 1980s with NASA\'s space shuttle, engineers designed rocket parts that could be recovered and reused. Private companies including SpaceX and Blue Origin are even building rockets with first stages that return to Earth and land themselves. The more that a rocket\'s parts can be reused, the cheaper rocket launches can get.',
            ],
          },
          {
            title: 'What are the different types of rockets?',
            texts: [
              "Just as automobiles come in many shapes and sizes, rockets vary depending on the jobs they do.",
              "Sounding rockets launch high in the air on ballistic arcs, curving into space for five to 20 minutes before they crash back to Earth. They're most often used for scientific experiments that don't need a lot of time in space. For instance, NASA used a sounding rocket in September 2018 to test parachutes for future Mars missions. (Where exactly is the edge of the space?The answer is surprisingly complex.)",
              "Suborbital rockets such as Blue Origin's New Shepard are strong enough to temporarily enter space, either for scientific experiments or space tourism. Orbital-class rockets are powerful enough to launch objects into orbit around Earth. Depending on how big the payload is, they also can send objects beyond Earth, such as scientific probes (or sports cars).",
              "Ferrying satellites to orbit or beyond requires serious power. For a satellite to remain in a circular orbit 500 miles above Earth's surface, it must be accelerated to more than 16,600 miles an hour. The Saturn V rocket, the most powerful ever built, lifted more than 300,000 pounds of payload into low-Earth orbit during the Apollo missions.",
              "For now, SpaceX's Falcon Heavy and United Launch Alliance's Delta IV Heavy are the world's most powerful rockets, but even bigger ones are coming. Once NASA's Space Launch System gets past its delays and cost overruns, it will be the most powerful rocket ever built. Meanwhile, SpaceX is building a test version of its Starship, the massive rocket formerly known as the BFR (Big Falcon Rocket). Russia has also announced its goal of launching a “super-heavy lift” rocket in 2028.",
              "As some rocket makers go big, others are going small to service the growing boom in cheap-to-build satellites no bigger than refrigerators. Rocket Labs's Electron rocket can lift just a few hundred pounds into low-Earth orbit, but for the small satellites it's ferrying, that's all the power it needs.",
            ],
          },
          {
            title: 'What is a launch pad?',
            texts: [
              "A launch pad is a platform from which a rocket is launched, and they're found at facilities called launch complexes or spaceports. (Explore a map of the world's active spaceports.)",
              "A typical launch pad consists of a pad and a launch mount, a metal structure that supports the upright rocket before it launches. Umbilical cables from the launch mount provide the rocket with power, cooling liquids, and top-up propellant before launch. The structure also helps shield the rocket from lightning strikes.",
              "Different launch complexes have different ways of putting rockets on launch pads. At NASA's Kennedy Space Center, the space shuttle was assembled vertically and moved to the launch pad on a tank-like vehicle called a crawler. The Russian space program transports its rockets horizontally by train to the launch pad, where they're then lifted upright.",
              "Launch pads also have features that minimize damage from the rocket's launch. When a rocket first ignites, valves lining the launch pad spray hundreds of thousands of gallons of water into the air around the exhaust, which helps lessen the rocket's deafening roar. Trenches beneath the launch pad also direct the rocket's exhaust out and away from the craft, so the flames can't rise back up and engulf the rocket itself.",
            ],
          },
          {
            title: 'Where are rockets launched?',
            texts: [
              "There are many launch sites around the world, each with different pros and cons. In general, the closer a launch site is to the Equator, the more efficient it is. That's because the Equator moves faster than Earth's poles as the planet rotates, like the outer edge of a spinning record. Launch sites at higher latitudes more easily place satellites into orbits that pass over the poles.",
              "Between 1957 and 2017, 29 spaceports sent satellites or humans into orbit. Many of the sites are still active, including the only three facilities ever to launch humans into orbit. More spaceports are on the way, both public and private. In 2018, the U.S.-New Zealand firm Rocket Labs launched satellites into orbit from its own private launchpad on New Zealand's Mahia Peninsula.",
            ],
          },
          {
            title: 'Where can I see a rocket launch?',
            texts: [
              "In the United States, NASA's Kennedy Space Center regularly offers access to visitors. NASA's Wallops Flight Facility in Virginia also allows launch viewing from its visitor center. The European Space Agency's spaceport in French Guiana is open to visitors, but the agency encourages travelers to plan ahead. Tourists can visit Kazakhstan's Baikonur Cosmodrome, the storied home of the Soviet and Russian space programs, but only by booking a tour. The facility remains closely guarded. (See pictures of the villages near Russia's Plesetsk Cosmodrome, where salvaging discarded rockets is a way of life.)",
              "If you can't visit a spaceport in person, never fear: Many public space agencies and private companies offer online livestreams of their launches.",
            ],
          },
        ],
        icon: triangle,
      },
    {
        label: 3,
        key: 3,
        href: '/tab3',
        tab: 'tab3',
        image: image3,
        title: 'The History of Rockets',
        descriptionArr: [
          {
            title: '',
            texts: [
              "The principles of rocketry were first tested more than 2,000 years ago, but it's really only been in the past 70 years or so that these machines have been used for applications in space exploration. Today, rockets routinely take spacecraft to other planets in our solar system. Closer to Earth, rockets carrying supplies up to the International Space Station can return to Earth, land on their own and be used again.",
            ],
          },
          {
            title: 'Early rocketry',
            texts: [
              "There are tales of rocket technology being used thousands of years ago. For example, around 400 B.C., Archytas, a Greek philosopher and mathematician, showed off a wooden pigeon that was suspended on wires. The pigeon was pushed around by escaping steam, according to NASA.",
              "Around 300 years after the pigeon experiment, Hero of Alexandria is said to have invented the aeolipile (also called Hero's engine), NASA added. The sphere-shaped device sat on top of a boiling pool of water. Gas from the steaming water went inside of the sphere and escaped through two L-shaped tubes on opposite sides. The thrust created by the escaping steam made the sphere rotate.",
              "Historians believe the Chinese developed the first real rockets around the first century A.D. They were used for colorful displays during religious festivals, similar to modern fireworks.",
              "For the next few hundred years, rockets were mainly used as military weapons, including a version called the Congreve rocket, developed by the British military in the early 1800s.",
            ],
          },
          {
            title: 'Fathers of rocketry',
            texts: [
              "In the modern era, those who work in spaceflight today often acknowledge three “fathers of rocketry” who helped push the first rockets into space. Only one of the three survived long enough to see rockets being used for space exploration.",
              "Russian Konstantin E. Tsiolkovsky (1857-1935) published what is now known as the “rocket equation” in 1903, in a Russian aviation magazine, according to NASA.The equation concerns relationships between rocket speed and mass, as well as how fast the gas is leaving when it exits the propellant system's exhaust and how much propellant there is. Tsiolkovsky also published a theory of multistage rockets in 1929.",
              "Robert Goddard (1882-1945) was an American physicist who sent the first liquid-fueled rocket aloft in Auburn, Massachusetts, on March 16, 1926. He had two U.S. patents for using a liquid-fueled rocket and also for a two- or three-stage rocket using solid fuel, according to NASA.",
              "Hermann Oberth (1894-1989) was born in Romania and later moved to Germany. According to NASA, he became interested in rocketry at an early age, and at age 14 he imagined a \"recoil rocket\" that could move through space using nothing but its own exhaust. As an adult, his studies included multistage rockets and how to use a rocket to escape Earth's gravity. His legacy is tainted by the fact that he helped develop the V-2 rocket for Nazi Germany during World War II; the rocket was used for devastating bombings on London. Oberth lived for decades after space exploration began and saw rockets bring people all the way to the moon and watched the reusable space shuttle heft crews into space again and again.",
            ],
          },
          {
            title: 'Rockets in spaceflight',
            texts: [
              "Following World War II, several German rocket scientists emigrated to both the Soviet Union and the United States, assisting those countries in the Space Race of the 1960s. In that contest, both countries vied to demonstrate technological and military superiority, using space as the frontier. ",
              "Rockets were also used to take measurements of radiation in the upper atmosphere after nuclear tests. The nuclear explosions mostly ceased after 1963's Limited Nuclear Test Ban Treaty.",
              "While rockets worked well within Earth's atmosphere, figuring out how to send them into space was difficult. Rocket engineering was in its infancy and computers weren't powerful enough to perform simulations. This meant that numerous flight tests ended with the rockets dramatically exploding seconds or minutes after leaving the launchpad.",
              "With time and experience, however, progress was made. A rocket was used for the first time to send something into space on the Sputnik mission, which launched a Soviet satellite on Oct. 4, 1957. After a few failed attempts, the United States used a Jupiter-C rocket to heft its Explorer 1 satellite into space on Feb. 1, 1958.",
              "It took several more years before either country felt confident enough to use rockets to send people into space; both countries started with animals (monkeys and dogs, for example). Russian cosmonaut Yuri Gagarin was the first human in space, leaving Earth on April 12, 1961, aboard a Vostok-K rocket for a multiorbit flight. About three weeks later, Alan Shepard made the first American suborbital flight on a Redstone rocket. A few years later in NASA's Mercury program, the agency switched to Atlas rockets to achieve orbit, and in 1963, John Glenn became the first American to orbit Earth.",
              "When aiming for the moon, NASA used the Saturn V rocket, which, at 363 feet tall, included three stages — the last one designed to be powerful enough to break away from Earth's gravity. The rocket successfully launched six moon-landing missions between 1969 and 1972. The Soviet Union developed a moon rocket called N-1, but its program was permanently suspended after multiple delays and problems, including a deadly explosion.",
              "NASA's space-shuttle program (1981 to 2011) used solid rockets for the first time to boost humans into space, which is notable, because unlike liquid rockets, they cannot be turned off. The shuttle itself had three liquid-fueled engines, with two solid rocket boosters strapped on the sides. In 1986, a solid rocket booster's O-ring failed and caused a catastrophic explosion, killing seven astronauts aboard the space shuttle Challenger. The solid rocket boosters were redesigned after the incident.",
              "Rockets have since been used to send spacecraft farther into our solar system: past the moon, Venus and Mars in the early 1960s, which later expanded into the exploration of dozens of moons and planets. Rockets have carried spacecraft throughout the solar system so that astronomers now have imagery of every planet (as well as the dwarf planet Pluto), many moons, comets, asteroids and smaller objects. And, because of powerful and advanced rockets, the Voyager 1 spacecraft was able to leave our solar system and reach interstellar space.",
            ],
          },
          {
            title: 'Rockets of the future',
            texts: [
              "Several companies in many countries now manufacture uncrewed rockets — the United States, India, Europe and Russia, to name a few — and routinely send military and civilian payloads into space.",
              "And scientists and engineers are continually working toward developing even more sophisticated rockets. Stratolaunch, the aerospace design company backed by Paul Allen and Burt Rutan, aims to launch satellites using civilian aircraft. SpaceX and Blue Origin have also developed reusable first-stage rockets; SpaceX now has reusable Falcon 9 rockets that routinely make cargo runs to the International Space Station. [In Photos: SpaceX's 1st Falcon Heavy Rocket Launch Success!]",
              "Experts predict that rockets of the future will be able to carry bigger satellites into space and may be able to carry multiple satellites at the same time, the Los Angeles Times reported. These rockets could use new composite materials, advances in electronics or even artificial intelligence to perform their work. Future rockets may also use different fuels — such as methane — that are healthier for the environment than the more traditional kerosene that is used in rockets today.",
              "Join our Space Forums to keep talking space on the latest missions, night sky and more! And if you have a news tip, correction or comment, lets know at: community@space.com.",
            ],
          },
        ],
        icon: ellipse,
      },
    {
        label: 4,
        key: 4,
        href: '/tab4',
        tab: 'tab4',
        image: image4,
        title: 'Space rockets',
        descriptionArr: [
          {
            title: '',
            texts: [
              "The most exciting thing you can possibly do on Earth is to get away from it: jump in a rocket and blast into space! Rockets always seem to be firing us into the future, but their basic technology is rooted far in the past—in firework-like missiles developed almost 800 years ago in 13th-century China. Since the first modern liquid-fueled rocket soared to the sky in 1926, rockets have ferried about 500 people, several thousand satellites, and quite a few unmanned probes to the deep darkness beyond Earth. While exploring space is obviously the main point of all that effort, it's worth remembering that \"stepping outside\" Earth gives us a better understanding of our own planet: weather forecasting, climate research, and navigation are just three of the things we can do better thanks to the development of the space rocket. Now rockets are useful things, but they're also very complex and highly dangerous. How exactly do they work? Let's take a closer look!",
            ],
          },
          {
            title: 'What exactly is space?',
            texts: [
              `If you want to understand space rockets, you need to understand space.`,
              `Strapped to your rocket, whistling your way to the stars, you won't pass any road signs: "Space: Population 0, Please drive carefully." There's no neat dividing line between the end of Earth and the beginning of space. That's because gravity (the force that sucks air molecules toward our planet, creating Earth's atmosphere) reaches out to infinity. In other words, Earth's atmosphere ends gradually, blurring invisibly with the start of space.`,
            ],
          },
          {
            title: 'Where does space start?',
            texts: [
              `Most jet planes don't fly above 15km (9.5 miles, 50,000ft), where there's still enough oxygen to burn fuel in their engines and keep them flying, but that's nowhere near the start of space. Space is generally defined as starting at about 100km (60 miles) above Earth (an arbitrary point sometimes called the Kármán line), which is where conventional planes would struggle to make enough lift to stay in the air. That doesn't mean Earth's atmosphere is all done and dusted by that point; far from it! The lowest satellites (known as low-earth orbit (LEO) satellites) fly at heights above 160km or 100 miles from Earth, which is over 10 times higher than planes fly. Even so, they still feel some drag (aerodynamic resistance) from the outer reaches of our atmosphere, which fizzles on up to 800km (500 miles) or higher.`,
              `You might think space is a long way away, but a hundred kilometers is not so far: a car, hurtling along at highway speed, would take just an hour to get you there; a rocket will get there about 20 times faster—in just 3 minutes.`,
            ],
          },
          {
            title: 'What is space like?',
            texts: [
              `From the point of someone designing a rocket, space is the place effectively beyond Earth's reach—beyond most of its gravity and atmosphere. Although we tend to think of it as a vacuum, it's not completely empty. There's radiation zipping through it (there must be—how else would we see all those distant stars and planets?), meteorites nipping past, "cosmic dust," and even bits of space junk (broken bits of satellites and rockets). Perhaps the best way to think of space is as a place of wild extremes: emptiness, weightlessness (when you're far from any planets). One minute, deep darkness and extreme cold (when you're shaded from the sun); the next, blinding light, dangerous cosmic radiation, and extreme heat.`,
            ],
          },
          {
            title: 'Is there more than one kind of space?',
            texts: [
              `Mostly we're interested in the interplanetary space of our own Solar System (the area round the Sun), which is measured in distances of millions of kilometers. But space telescopes and unmanned probes also study the further reaches of what's called interstellar space (the space between stars), measured in vastly greater distances called light years (the distance light travels in one year, which is almost 10 trillion kilometers). The Milky Way galaxy, of which our solar system is just one part, measures about 100,000 light years (1 million, million, million km) across.`,
              `Space, if you haven't figured it out already, is a pretty big place!`,
            ],
          },
          {
            title: 'Thrust and drag',
            texts: [
              `The force that pushes a rocket upward is called thrust; it depends on the amount (mass) and speed of gas that the rocket fires and the way its exhaust nozzle is shaped to squirt out that gas in a high-pressure jet. When a rocket's engine develops enough power, the thrust force pushing it upward will be bigger than its own weight (the force of gravity) pulling it down, so the rocket will climb into the sky. As the rocket climbs, air resistance (drag) will try to pull it back too, fighting against the thrust. In an upward-climbing rocket, thrust has to fight both drag and weight. This is slightly different to an airplane, where thrust from the engines makes the plane fly forward, drag pulls the plane backward, and the forward motion of air over the wings generates lift, which overcomes the plane's weight. So a key difference between a rocket and a jet plane is that a rocket's engine lifts it directly upward into the sky, whereas a jet's engines simply speed the plane forward so its wings can generate lift. A plane's jet engines fire it forwards so its wings can lift it up; a rocket's engines lift it up directly.`,
              `The faster things move and the more their shape disturbs the air, the more drag they create and the more energy they waste, uselessly, as they speed along. That's why fast-moving things—jet airplanes, high-speed trains, space rockets... and even leaping salmon—tend to be long, thin, and tube-shaped, compared to slower-moving things like boats and trucks, which are less affected by drag.`,
            ],
          },
          {
            title: 'Escape velocity',
            texts: [
              `Rockets burn huge amounts of fuel very quickly to reach escape velocity of at least 25,000 mph (7 miles per second or 40,000 km/h), which is how fast something needs to go to break away from the pull of Earth's gravity. "Escape velocity" suggests a rocket must be going that fast at launch or it won't escape from Earth, but that's a little bit misleading, for several reasons. First, it would be more correct to refer to "escape speed," since the direction of the rocket (which is what the word velocity really implies) isn't all that relevant and will constantly change as the rocket curves up into space. (You can read more about the difference between speed and velocity in our article on motion). Second, escape velocity is really about energy, not velocity or speed. To escape from Earth, a rocket must do work against the force of gravity as it travels over a distance. When we say a rocket has escape velocity, we really mean it has at least enough kinetic energy to escape the pull of Earth's gravity (though you can never escape it completely). Finally, a rocket doesn't get all its kinetic energy in one big dollop at the start of its voyage: it gets further injections of energy by burning fuel as it goes. Quibbles aside, "escape velocity" is a quick and easy shorthand that helps us understand one basic point: a huge amount of energy is needed to get anything up into space.`,
            ],
          },
          {
            title: 'Parts of a space rocket',
            texts: [
              `A rocket contains about three million bits, of all shapes and sizes, but it's simpler to think of it as being made up of four separate parts. There's the structure (the framework that holds the whole thing together, similar to the fuselage on a plane), the propulsion system (the engine, fuel tanks, and any outer rocket boosters), the guidance system (the onboard, computer-based navigation that steers the rocket to its destination), and the payload (whatever the rocket is carrying, from people or satellites to space-station parts or even nuclear warheads). Modern space rockets work like two or three independent rockets stuck together to form what are called stages. Each stage may have its own propulsion and guidance system, though typically only the final stage contains the rocket's all-important payload. The lower stages break away in turn as they use up their fuel and only the upper stage reaches the rocket's final destination.`,
              `Some rockets (the Space Shuttle and the European Ariane) look like a whole bunch of rockets "strapped" together: a fat one in the middle with some skinnier ones either side. The big central rocket is the main one. The thinner rockets either side are what are called booster rockets. They're little more than fat fireworks: disposable engines that provide a thump of extra power during liftoff to get the main rocket up into space.`,
            ],
          },
          {
            title: 'Rocket engines',
            texts: [
              `The biggest (and arguably the most interesting) part of a rocket is the propulsion system—the engine that powers it into the sky. As we've already seen, rockets differ from jet planes (and other fuel-powered vehicles that work on Earth) because they have to carry their own oxygen supply. Modern space rockets have main engines powered by a liquid fuel (such as liquid hydrogen) and liquid oxygen (which does the same job as the air sucked into a car engine) that are pumped in from huge tanks. The fuel (also called the propellant) and oxygen (called the oxidizer) are stored at low temperatures and high pressures so more can be carried in tanks of a certain size, which means the rocket can go further on the same volume of fuel. External rocket boosters that assist a main rocket engine typically burn solid fuel instead (the Space Shuttle's were called solid rocket boosters, or SRBs, for exactly that reason). They work more like large, intercontinental ballistic missiles, which also burn solid fuels.`
            ],
          },
          {
            title: 'A typical space rocket: Ariane 5',
            texts: [
              `How many space rockets can you name? The mighty Saturn V that took astronauts to the Moon is probably top of your list. Or what about the super-versatile Atlas rockets? The first one took off on June 11, 1957 and the latest version, Atlas 5, is still blasting off today. The highlights of that half-century history include putting the first US astronaut into space, sending the Pioneer-10 space probe to Jupiter and beyond, and launching the ten Mariner program missions to explore Mars, Venus, and Mercury.`,
              `Outside the United States, there's the European Ariane rocket. Originally dreamed up in 1973 as a joint project between France, Germany, and the UK, it's gradually established itself as one of the most reliable of rockets, launching over half of the world's commercial satellites from its base on French Guiana. The latest version, Ariane 5, has launched about 90 times since its maiden voyage in 1996 (with only two major failures).`,
            ],
          },
          {
            title: 'Key parts of an Ariane rocket',
            texts: [
              `Sitting on the launchpad, Ariane has three main parts: the central rocket (up to 53m or 174ft high), powered by the main engine (Vulcain 2), and two 31m/101ft-high solid rocket boosters (one either side). The main rocket consists of two stages. The first (lower) stage is called the Cryogenic Main Stage (or EPC). Powered by the Vulcain engine, and assisted by the two SRBs, its job is to get the rocket and its payload out of Earth's atmosphere and into space. The second (upper) stage is called the Cryogenic Upper Stage (ESC-A). It's powered by a much smaller engine called Aestus, which produces a tiny 2.6 tonnes of thrust, just enough to put the rocket into its final orbit ready for the release of the satellites it carries as payload. The payload travels in the very top part of the rocket behind a detachable fairing (streamlined outer cover) that measures 17m high by 5.4m in diameter (56ft high by 18ft in diameter). The usual payload is either one or two satellites fixed either side of a launching structure called the Speltra (or a slightly different one called the Sylda).`,
            ],
          },
        ],
        icon: airplane,
      },
    {
        label: 5,
        key: 5,
        href: '/tab5',
        tab: 'tab5',
        image: image5,
        title: 'Rocket',
        descriptionArr: [
          {
            title: '',
            texts: [
              `A rocket may be a missile, spacecraft, aircraft or other vehicle which is pushed by a rocket engine. Some big rockets are launch vehicles and some are manned (e.g. Saturn V). Other rockets, for example missiles, are unmanned. ("Manned" means that a person is in it; "unmanned" means that the machine goes without a person.)`,
              `Most rockets can be launched from the ground because exhaust thrust from the engine is bigger than the weight of the vehicle on Earth. Some are used to bring satellites into orbit. Some rockets such as ion thrusters are too weak and heavy to lift themselves. They work after other rockets bring them to outer space.`,
              `The rocket was invented by the Chinese while using gunpowder. The first rockets were shaped like arrows and were not very fast. Most rockets still work by fire. The fire makes hot exhaust gases that expand and shoot out the back. This makes the rocket go forward.`,
              `Most rockets still use solid fuel to make the fire. The biggest ones use liquid fuel because it makes a hotter fire so the rocket is more powerful. However, handling the liquid fuel safely is difficult and expensive. Some satellite launch vehicles use both.`,
              `Rockets are also used for fireworks and weapons and to control moves in outer space.`,
              `Manned rockets, similar to other manned flying machines, are designed to limit their acceleration and vibration to protect the crew. Unmanned rockets however are not bound by the limits of humans.`,
              `Some rockets go faster than the speed of sound (Mach 1 or 1,225 km/h; 761 mph). Those that go into Low Earth orbit go 30,000 km/h (19,000 mph).`,
              `Yuri Gagarin was a Soviet cosmonaut who, on 12 April 1961, became the first human to fly into outer space. He was in the R-7 rocket launched by the Soviet Union.`,
            ],
          },
        ],
        icon: boat,
      },
]