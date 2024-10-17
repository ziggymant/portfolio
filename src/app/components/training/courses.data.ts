import { Course} from "@models/project.interface";


export const COURSES: Course[] = [
  {
    name: "Kubernetes Certified Application Developer (CKAD) with Tests",
    duration: "15,5 Hours",
    date: "22.07.2024",
    url: "https://www.udemy.com/course/certified-kubernetes-application-developer",
    cert_url: "https://www.udemy.com/certificate/UC-33a5fed3-7d90-4261-a8cd-96ce997b5f1f/",
    description: `"This course helps you gain the knowledge required to design and deploy cloud-native applications on a Kubernetes cluster.  A series of well-designed lectures with animation and illustration help you understand complex concepts easily."`,
    skills: [{ name: "Kubernetes", icon: "kubernetes" }]
  },
  {
    name: "Kubernetes for the Absolute Beginners - Hands-on",
    duration: "6,5 Hours",
    url: "https://www.udemy.com/course/learn-kubernetes",
    cert_url: "https://www.udemy.com/certificate/UC-dc8b8a7d-9363-4468-8df3-f099a7f15802/",
    date: "08.05.2024",
    description: `"This course is for absolute Kubernetes beginners. With zero knowledge about Kubernetes, once you take this course and complete all of the hands-on coding exercises, you will be ready to deploy your own applications on a Kubernetes platform."`,
    skills: [{ name: "Kubernetes", icon: "kubernetes" }]
  },
  {
    name: "Professional Scrum Master training (PSM I) with certificate",
    duration: "2 Days",
    url: "https://berlin-product-people.com/de/training/professional-scrum-master-training-psm-i/",
    cert_url: "https://www.credly.com/badges/fe8bfd57-2755-4a62-a6b0-8b2f72de71b7/",
    date: "20.04.2022",
    description: `"The Professional Scrum level I certification is recognized by the industry as a certification that demonstrates a fundamental level of Scrum mastery. As a PSM I certification holder, you have proven that you understand Scrum as described in the Scrum Guide and how to apply Scrum in Scrum Teams. PSM I holders have a consistent terminology and approach to Scrum."`,
    skills: [{ name: "Professional Scrum Master", icon: "psm" }]
  },
  {
    name: "LPIC-1 - Linux System Administrator - Kurs 101",
    duration: "13 Hours",
    url: "https://www.udemy.com/course/lpic-1-linux-system-administrator-kurs-101",
    cert_url: "https://www.udemy.com/certificate/UC-c142fdaa-6993-4011-a51b-de59fc9d70d9/",
    date: "11.02.2021",
    description: `"Dieser Kurs orientiert sich zu 100% an den Prüfungsvorgaben von LPI. Alle Themen und alle Programme und Kommandos, die LPI festgelegt hat, werden in diesem Kurs ausführlich besprochen. Ich selbst habe die LPIC-1 Prüfung 2017 abgelegt. Ich persönlich lerne lieber mit Videokursen als mit Büchern. Leider sind deutschsprachige Videokurse sehr rar. Englischsprachige Videokurse gibt es einige, aber selbst wenn man Englisch spricht, ist ein deutschsprachiger Kurs immer noch einfacher zu verstehen, da es einfach die eigene Muttersprache ist."`,
    skills: [{ name: "Linux", icon: "linux" }]
  }
]


