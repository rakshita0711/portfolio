import {
FaReact,
FaHtml5,
FaCss3Alt,
FaBootstrap,
FaPhp,
FaNodeJs,
FaWordpress,
FaGitAlt
} from "react-icons/fa";

import {
SiJavascript,
SiMysql,
SiMongodb,
SiTailwindcss
} from "react-icons/si";

const tech=[
{icon:<FaReact/>,name:"React"},
{icon:<FaHtml5/>,name:"HTML5"},
{icon:<FaCss3Alt/>,name:"CSS3"},
{icon:<FaBootstrap/>,name:"Bootstrap"},
{icon:<SiTailwindcss/>,name:"Tailwind"},
{icon:<SiJavascript/>,name:"JavaScript"},
{icon:<FaPhp/>,name:"PHP"},
{icon:<FaNodeJs/>,name:"Node"},
{icon:<FaWordpress/>,name:"WordPress"},
{icon:<SiMysql/>,name:"MySQL"},
{icon:<SiMongodb/>,name:"MongoDB"},
{icon:<FaGitAlt/>,name:"Git"}
];

export default function Skills(){

return(

<section
id="skills"
className="py-28 px-6 bg-slate-900"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center">

Tech Stack

</h2>

<p className="text-center text-slate-400 mt-5">

Technologies I use to build modern applications.

</p>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-20">

{

tech.map((item)=>(

<div
key={item.name}
className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition hover:-translate-y-2 flex flex-col items-center"
>

<div className="text-5xl text-blue-400">

{item.icon}

</div>

<h3 className="mt-5">

{item.name}

</h3>

</div>

))

}

</div>

</div>

</section>

)

}