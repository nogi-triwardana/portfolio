type ExperienceData = {
  index: number;
  office: string;
  role: string;
  time: string;
};

type ProjectData = {
  index: number;
  is_true_real_url: boolean;
  title: string;
  identity: string;
  description: string;
  responsibilities: string[];
  technologies: string;
  url: string;
};

type CertificateItem = {
  index: number;
  description: string;
  image: string;
  link: string;
  name: string;
  platform: string;
  years: string;
};
