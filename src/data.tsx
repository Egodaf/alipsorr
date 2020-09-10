import image1 from './images/game_1.png'
import image2 from './images/game_2.jpg'
import image3 from './images/game_3.jpg'
import image4 from './images/game_4.png'
import image5 from './images/game_5.png'
import image6 from './images/game_6.jpg'
import { ellipse, book, albumsOutline, airplane, car } from 'ionicons/icons';

export const routes = [
    {
        label: 1,
        key: 1,
        href: '/tab1',
        tab: 'tab1',
        image: image1,
        title: '',
        descriptionArr: [
          {
            title: 'Brand Philosophy',
            texts: [
              'Brand Philosophy',
              'ALPINA creates exclusive automobiles for a small circle of connoisseurs who appreciate the extraordinary and who know how to enjoy pleasure - cars for automotive gourmets.',
              'These vehicles are likely the most renowned individual automobiles based on BMW cars, and have been developed and produced at the small autonomous family business, in friendly cooperation with BMW, for 50 years now. The love for details is always eminent in this process. Today, company founder Burkard Bovensiepen heads the company together with his sons Andreas and Florian.',
              'The close cooperation with BMW is the basis for ALPINA’s continued success: it’s what empowers the creation of products that are highly individual while at the same time meeting the stringent quality and safety standards that apply to large-scale production cars.',
              'Tradition and authenticity are important values of the brand.',
            ],
          },
          {
            title: 'Oscar Wilde',
            texts: [
              '“I’m a man of simple tastes. I’m always satisfied with the best.”',
              'Inspired by this quote from Oscar Wilde, powered by the will to turn something good into something individual and driven by a great passion for automobiles, I started out at my father’s former typewriter factory to develop a power enhancing multi-carburettor unit for the BMW 1500, and I called it the “ALPINA unit”.',
              'What was eyed by my father rather with mistrust in the day, turned out to become - thanks to the trust put into me by BMW back then - the starting point of a success story, one which I had surely dreamed of, but which I had no way of foreseeing to come true.',
              'A lot has changed since then. The original backyard workshop in Kaufbeuren has evolved into a modern family business over the past fifty years, which lives up to the exclusive demands of its customers worldwide with a current production output of 1,700 automobiles per year.',
              'My sons and I owe this success to numerous companions: foremost, to Bayerische Motoren Werke, who not only kept opening niches to us throughout all these years, but who provided comprehensive support in many ways to us fill those niches; to our suppliers and business partners, some of whom we have been cooperating with for decades in a highly constructive manner; to our dealers and importers who so successfully have represented us for many years in Europe, Asia and the USA; to our customers, some of whom are already the generation driving our cars on the roads of the world; to the city of Buchloe, which provides caring support and a home to our company since 1970; and last but not least, to our employees, who have adopted this philosophy with their hearts and minds, and who – each in their own field of expertise – contribute with their loyalty, passion and enthusiasm to our customers feeling in good hands with ALPINA, both with their existing fleet and when purchasing new automobiles.',
              'As you see, even in the face of change, ALPINA also stands for continuity: the motto, the will and the passion have remained the same they were in the beginning. We strive to produce exclusive masterpieces for automotive connoisseurs with all our motivation, drive and passion.',
            ],
          },

          
          
        ],
        icon: book,
      },
    {
        label: 2,
        key: 2,
        href: '/tab2',
        tab: 'tab2',
        image: image2,
        title: 'History - Stages of Alpina Development',
        descriptionArr: [
          {
            title: '1961 How it all began',
            texts: [
              'Burkard Bovensiepen begins his career in the automotive industry with the creation of a Weber twin carburetor for the BMW 1500.',
            ],
          },
          {
            title: '1964 Double Weber carburetor',
            texts: [
              'ALPINA engines with double carburettor, assembled by a young student of economics and mechanical engineering in his fathers factory, are widely recognized in the specialized press. And also the high quality of ALPINA products is recognized by Paul Hahnemann, the legendary head of BMW sales.',
               
            ],
          },
          {
            title: '1965 Foundation of the company',
            texts: [
              'ALPINA Burkard Bovensiepen KG was founded in Kaufbeuren on 1st January 1965. The company employs 8 people.',
              
            ],
          },
          {
            title: '1967 ALPINA brand name',
            texts: [
              'The developed logo becomes not only a brand name, but also a quality mark. It makes ALPINA company easily recognizable.',
              
            ],
          },
          {
            title: '1968 Participation in the Touring Car Championship',
            texts: [              
              'ALPINA takes part in the Touring Car Championship for the first time. This event started a unique success story. Drivers Derek Bell, Harald Ertl, James Hunt, Jackie X, Niki Lauda, ​​Brian Muir and Hans Stuck performed from 1969 to 1973. for the ALPINA team.',
            ],
          },
          {
            title: '1970 ALPINA Wins',
            texts: [
              'Team ALPINA wins the European Touring Car Championship and the Spa-Francorchamps 24 Hours, as well as various German circuit, mountain and rally championships.',
            ],
          },
          {
            title: '1971 Lightweight coupe',
            texts: [
              'ALPINA convinces BMW of the need for a lightweight version of the BMW 3.0 CS in order to remain successful in motorsport. The project for the creation of a new version of the lightweight 3.0 CSL coupe is commissioned by BMW to ALPINA. ALPINAs classic 20-spoke ALPINA rims are the external hallmark of ALPINAs involvement in the project of this official BMW sports car.              ',
            ],
          },
          {
            title: '1973 Success in racing',
            texts: [
              'Derek Bell, Harald Ertl, Niki Lauda and Brian Muir win the European Touring Car Championship for ALPINA and BMW. Niki Lauda in a lightweight coupe sets an absolute record in a 6-hour race at the Nürburgring',
            ],
          },{
            title: '1973 Oil Crisis',
            texts: [
              'The energy crisis is shaking the auto industry. ALPINA gets through this difficult time without layoffs. This became possible not only thanks to its good reputation, but also due to the flexible response to market demands and the extraordinary dedication of the staff to the company. ALPINA develops gasoline engines that are economical and powerful',
            ],
          },{
            title: '1975 Sales start in Switzerland and England',
            texts: [
              'In cooperation with selected BMW dealers, the construction of ALPINAs own dealer network in Germany begins. Representative offices in Switzerland and Great Britain are opened at the same time',
            ],
          },{
            title: '1977 End of the first stage of participation in motorsport',
            texts: [
              'Dieter Kvester in the BMW ALPINA 3.5 CSL becomes the European Touring Car Champion, leaving behind the Jaguar team, which was promised an easy victory. At the end of this successful season, ALPINA retired from motorsport for ten years to devote itself to creating great road cars',
            ],
          },{
            title: '1978 Electronic ignition',
            texts: [
              'Presentation of a new generation of cars completely designed by ALPINA. ALPINA B6 2.8 is the BMW 3 Series with a 6-cylinder engine, while the base model from BMW is offered exclusively with a 4-cylinder unit. A similar engine size on such a sleek car meant completely new sensations of “high-speed comfort”. The BMW ALPINA B7 Turbo based on the BMW 5 Series becomes the fastest sedan in the world! ALPINA B7 Turbo Coupe with its 300 hp takes its rightful place among the most powerful sports coupes. All engines of the new generation ALPINA are equipped for the first time with a fully electronic ignition system as standard - an absolute innovation in the automotive industry',
            ],
          },{
            title: '1979 Distribution and collection of exclusive wines',
            texts: [
              'Burkard Bovensiepen founds a new business line - the distribution of exclusive wines. In a very short time, not only many wine connoisseurs become customers, but virtually the entire luxury restaurant industry in Germany. ALPINA office opens in Japan - the beginning of successful cooperation. In 2001, ALPINA delivered the 2000th car to Japan',
            ],
          },{
            title: '1981 Shell Economy Marathon',
            texts: [
              'Auto Motor und Sport and Shell are running a competition for the most fuel efficient car. BMW 318i ALPINA wins its class with 2.672 liters per 100 km',
            ],
          },{
            title: '1987 Participation in M3 motorsport',
            texts: [
              'ALPINA returns to motorsport and takes part in the German Open Touring Car Championship. Burkard Bovensiepen took an active part in drawing up the competition regulations. Hélène Laure, Andy Bovensiepen, Fabien Giraud, Peter Oberndorfer and Christian Danner not only rank high, but also celebrate numerous victories in the BMW ALPINA M3 Group A. In environmental matters, ALPINA also achieves phenomenal results - a metal catalyst, first installed on BMW ALPINA M3 Gruppe A, later becomes an integral part of the cars participating in the German Touring Car Championship',
            ],
          },{
            title: '1988 End of the second stage of participation in auto racing',
            texts: [
              'Due to limited production capacity, ALPINA decides to focus on the design and production of BMW ALPINA road vehicles. ALPINA retires from motorsport at the end of the year',
            ],
          },{
            title: '1989 B10 Bi-Turbo',
            texts: [
              'The presentation of the new BMW ALPINA B10 Bi-Turbo is of great public interest. On the pages of Road & Track magazine, renowned journalist and race car driver Paul Frere says of this car: “For me, its a car. ... ... I think this is the best sedan in the world “',
            ],
          },{
            title: '1990 Increase in the staff to 120 people',
            texts: [
              'ALPINA is expanding. The companys staff increases to 120 people. A new administrative and production complex is being built',
            ],
          },{
            title: '1992 SHIFT-TRONIC',
            texts: [
              'ALPINA becomes the first automaker to introduce electronic clutch control in the BMW ALPINA B12 5,7 Coupe. ALPINA technology is called SHIFT-TRONIC. Giving up the clutch pedal is very easy given the completely new dynamics when driving with a 6-speed gearbox.',
            ],
          },{
            title: '1993 SWITCH-TRONIC',
            texts: [
              ' ALPINAs SWITCH-TRONIC technology opens up new perspectives for sporty driving in vehicles with automatic gearboxes. The drivers self-shifting capability convinces many manual transmission enthusiasts of the benefits of modern automatic shifting technology. A special feature of SWITCH-TRONIC technology is the ability to shift gears using buttons integrated on the back of the steering wheel. Technology makes you feel like a Formula 1 driver',
            ],
          },{
            title: '1995 SUPERKAT',
            texts: [
              'ALPINA becomes the first automotive manufacturer in the world to use SUPERKAT technology, an electrically heated metal catalyst, as standard for the BMW ALPINA B12 5.7 E-KAT. This development is the result of collaboration between ALPINA, BMW and EMITEC. Thanks to this completely new exhaust gas treatment technology, HC + NOx and CO emissions standards in force since 1996 have been exceeded by more than 80%',
            ],
          },{
            title: '1999 D10 Bi-Turbo',
            texts: [
              'The beginning of a new era: ALPINA presents the ALPINA D10 BiTurbo at the Geneva Motor Show, the first diesel car in the companys 35-year history. ALPINA D10 BiTurbo is the most powerful diesel sedan in the world. Creation of a "super diesel" - a joint project of BMW and ALPINA',
            ],
          },{
            title: '2002 Roadster V8',
            texts: [
              'For fans of luxurious and comfortable outdoor driving, ALPINA is developing its version of the roadster based on the BMW Z8 - the BMW ALPINA Roadster V8 with SWITCH-TRONIC technology. The total number is limited to 555 copies. ALPINA enters the American market for the first time with this exclusive model',
            ],
          },{
            title: '2003 Radial compressor',
            texts: [
              'A new engine with a mechanically driven radial compressor is being developed for the BMW ALPINA B7. The premiere was the combination of supercharging concept and Valvetronic technology for the first time, which significantly reduced fuel consumption and CO2 emissions of this 500-horsepower car',
            ],
          },{
            title: '2005 BMW ALPINA B5',
            texts: [
              'The 4.4 L supercharged V8 engine is now also available in the 5 Series. BMW ALPINA B5 is honored by many friends of the company as a worthy successor to the legendary B10 Bi-Turbo. Its phenomenal traction and dynamic characteristics put the BMW ALPINA B5 on a par with the most famous sports cars in the world.',
            ],
          },{
            title: '2007 BMW ALPINA B3 Bi-Turbo',
            texts: [
              'By combining design and technology in a brilliant way in the B3 Bi-Turbo with a 3-liter 6-cylinder engine, ALPINA continues the successful history of the 3 Series. The legendary BMW ALPINA B6 2.8 in 1978 marked the beginning of a success story that continues to this day and has been embodied in 6,000 cars.',
            ],
          },{
            title: '2008 Construction of a new engineering center',
            texts: [
              'To expand the technical know-how, ALPINA is building a state-of-the-art engineering center, thanks to which ALPINA will be able to accelerate the process of bringing its products to market and at the same time offer engineering services',
            ],
          },
        ],
        icon: albumsOutline,
      },
    {
        label: 3,
        key: 3,
        href: '/tab3',
        tab: 'tab3',
        image: image3,
        title: 'Alpine models',
        descriptionArr: [
          {
            title: 'Alpina BMW B10 (E24) 3.5',
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
        icon: car,
      },
]