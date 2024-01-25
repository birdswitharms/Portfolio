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
  },
  {
    url: "https://www.willful.co/",
    name: "Willful",
    date: "Jan 2020 - Oct 2021",
    description:
      "Willful is a Canadian online Estate planning company, generating legal wills.",
  },
  {
    url: "https://planswell.com/",
    name: "Planswell",
    date: "June 2018 - Nov 2019",
    description:
      "Planswell is a financial retirement planning tool aiming to help Canadians live the lifestyle they want until retirement.",
  },
  {
    url: "https://generalassemb.ly/",
    name: "Bitmaker Labs - General Assembly Bootcamp",
    date: "",
    description:
      "Completed a in-person 12 week bootcamp in Toronto, ON. Learned the fundamentals of full-stack web development, including HTML, CSS, Javascript, Ruby, Ruby on Rails, SQL, and more.",
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
            <Card className="mb-6" key={exp.name}>
              <CardHeader>
                <CardTitle>{exp.name}</CardTitle>
                <CardDescription>{exp.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">{exp.description}</div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Details</AccordionTrigger>
                    <AccordionContent>Content here</AccordionContent>
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
