import {
  SiSharp,
  SiCplusplus,
  SiDart,
  SiJavascript,
  SiKotlin,
  SiSwift,
  SiPython,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const techGroups = [
  {
    label: "Languages",
    items: [
      { Icon: SiSharp, name: "C#" },
      { Icon: SiCplusplus, name: "C++" },
      { Icon: SiDart, name: "Dart" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiKotlin, name: "Kotlin" },
      { Icon: SiSwift, name: "Swift" },
      { Icon: SiPython, name: "Python" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { Icon: SiReact, name: "React" },
      { Icon: SiFlutter, name: "Flutter" },
      { Icon: SiNodedotjs, name: "Node.js" },
    ],
  },
  {
    label: "Databases",
    items: [
      { Icon: SiMysql, name: "MySQL" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="bg-[#101010] rounded-xl p-8 w-full max-w-3xl mx-auto text-center">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8">
        Technology Stack
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-6">
        {techGroups.map((group, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <h3 className="text-gray-300 font-semibold">{group.label}</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {group.items.map(({ Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center text-white text-sm"
                >
                  <Icon className="text-4xl" />
                  <span className="mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}