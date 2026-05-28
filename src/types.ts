export interface Service {
  id: string;
  title: string;
  category: "Tax" | "Compliance" | "Advisory" | "Audit";
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  imageUrl: string;
}
