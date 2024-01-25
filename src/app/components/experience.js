import "../globals.css";
import Link from "next/link";
import PageFooter from "./PageFooter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experience = [
  {
    url: "https://altrio.com/",
    name: "Altrio",
    date: "Sept 2022 - Oct 2023",
    description:
      "Altrio is a Canadian Series A startup building real estate investment software.",
    details: [
      "Implemented a column and row tiling system to work with tables and other dynamic data.",
      "Developed a sophisticated, responsive table component featuring dynamic column freezing capabilities reminiscent of Google Sheets and Notion, which improves user experience by facilitating flexible views and interactive data grouping.",
      "Developed an internal tool to automate data-processing for a remote team in India",
      "Reduced our CI/CD pipeline processing time by half with improvements to tests and infrastructure",
    ],
  },
  {
    url: "https://www.willful.co/",
    name: "Willful",
    date: "Jan 2020 - Oct 2021",
    description:
      "Willful is a Canadian online Estate planning company, generating legal wills.",
    details: [
      "Developed new functionalities and upheld existing ones throughout the entire technology stack, employing React/Redux for the front-end and Ruby on Rails for the back-end.",
      "Collaborated with a small startup team to strategize, define scope, and successfully implement various projects",
      "Product redesign, overhauling the application navigation and workflow",
      "Introducing French language support and implementing product-specific adjustments for the Quebec launch",
      "Creating a family plan feature with a user invite flow (akin to Spotify family plans)",
    ],
  },
  {
    url: "https://planswell.com/",
    name: "Planswell",
    date: "June 2018 - Nov 2019",
    description:
      "Planswell is a financial retirement planning tool aiming to help Canadians live the lifestyle they want until retirement.",
    details: [
      "Implemented a points + rewards system into the main application",
      "Continued to develop and improve the KYC (know your client) application",
      "Implemented Flinks (banking third party software) into the main application",
      "Worked with designers and product managers to develop web and mobile applications, design and conduct tests",
      "Defining application objectives, features, and functionality by analyzing user stories",
      "Writing well-tested, understandable code",
    ],
  },
  {
    url: "https://generalassemb.ly/",
    name: "Bitmaker Labs - General Assembly Bootcamp",
    date: "",
    description: "Completed a in-person 12 week bootcamp in Toronto, ON.",
    details: [
      "Learned the fundamentals of programming using Ruby",
      "Learned the fundamentals of web development using HTML, CSS, and JavaScript",
      "Built a final project (My Kitchen) with a partner and was able to get my first job from an industry night event",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col justify-between p-24"
    >
      <div className="ml-24 mb-24">
        <h1 className="scroll-m-20 border-b text-4xl font-extrabold tracking-tight lg:text-5xl">
          Experience
        </h1>
      </div>
      <div className="w-1/2 mx-auto">
        {experience.map((exp) => {
          return (
            <Card className="mb-6 bg-muted" key={exp.name}>
              <CardHeader>
                <CardTitle>{exp.name}</CardTitle>
                <CardDescription>{exp.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">{exp.description}</div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Details</AccordionTrigger>
                    <AccordionContent>
                      {exp.details.map((detail) => {
                        return (
                          <div className="text-indent" key={detail}>
                            {" "}
                            • {detail}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <Link className="hover:underline" href={exp.url}>
                  link <span>&#8594;</span>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="mt-auto pt-8">
        <PageFooter target="technologies" />
      </div>
    </section>
  );
}
