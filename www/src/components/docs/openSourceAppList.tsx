interface App {
  description: string;
  repoName: string;
  repo: string;
  linkName: string;
  linkExtra?: string;
  link: string;
}

const projects: App[] = [
  {
    description: "Create T3 Turbo - T3 Stack using Turborepo",
    repoName: "create-t3-turbo",
    repo: "https://github.com/t3-oss/create-t3-turbo",
    linkName: "create-t3-turbo.vercel.app",
    link: "https://create-t3-turbo.vercel.app/",
  },
  {
    description: "Zapdos - a QnA app for streamers",
    repoName: "pingdotgg/zapdos",
    repo: "https://github.com/pingdotgg/zapdos",
    linkName: "ask.ping.gg",
    link: "https://ask.ping.gg",
  },

  {
    description:
      "Shoutify - Free, open-source, self-hosted social media management",
    repoName: "techsquidtv/shoutify",
    repo: "https://github.com/TechSquidTV/Shoutify",
    linkName: "shoutify.app",
    link: "https://github.com/TechSquidTV/Shoutify",
    linkExtra: "(coming soon)",
  },

  {
    description:
      "Me3 - Describe yourself in 3 things and share with your friends.",
    repoName: "hnqg/me3",
    repo: "https://github.com/hnqg/me3",
    linkName: "me3.hnqg.io",
    link: "https://me3.hnqg.io",
  },

  {
    description: "Josh's personal site",
    repoName: "joshhyde9/t3-portfolio",
    repo: "https://github.com/JoshHyde9/t3-portfolio",
    linkName: "t3.joshhyde.me",
    link: "https://t3.joshhyde.me",
  },

  {
    description: "Cal.com - Scheduling infrastructure for absolutely everyone.",
    repoName: "calcom/cal.com",
    repo: "https://github.com/calcom/cal.com",
    linkName: "cal.com",
    link: "https://cal.com",
  },

  {
    description: "My FAQ Page - An FAQ Page generator",
    repoName: "ronanru/myfaq.page",
    repo: "https://github.com/ronanru/myfaq.page",
    linkName: "MyFAQ.page",
    link: "https://myfaq.page",
  },

  {
    description: "Tincy Pics - A tincy wincy image host",
    repoName: "mozzius/tincypics",
    repo: "https://github.com/mozzius/tincypics",
    linkName: "tincy.pics",
    link: "https://tincy.pics",
  },

  {
    description: "Ayanava's Guestbook",
    repoName: "AyanavaKarmakar/Guestbook",
    repo: "https://github.com/AyanavaKarmakar/Guestbook",
    linkName: "guestbook.ayanavakarmakar.software",
    link: "https://guestbook.ayanavakarmakar.software/",
  },

  {
    description: "Slug - URL Shortener",
    repoName: "pheralb/slug",
    repo: "https://github.com/pheralb/slug",
    linkName: "slug.vercel.app",
    link: "https://slug.vercel.app",
  },

  {
    description:
      "AI TTS Donations - FOSS AI Text To Speech service for Streamers.",
    repoName: "mmattDonk/AI-TTS-Donations",
    repo: "https://github.com/mmattDonk/AI-TTS-Donations",
    linkName: "staging.solrock.mmattDonk.com",
    link: "https://staging.solrock.mmattDonk.com",
  },

  {
    description: "The Doom",
    repoName: "moltivie/slug",
    repo: "https://github.com/Moltivie/the-t3-stack",
    linkName: "the-t3-stack.vercel.app",
    link: "https://the-t3-stack.vercel.app",
  },

  {
    description: "Railtrack",
    repoName: "noahflk/railtrack",
    repo: "https://github.com/noahflk/railtrack",
    linkName: "railtrack.flk.li",
    link: "https://railtrack.flk.li",
  },

  {
    description: "KARA Shop - Ecommerce website",
    repoName: "mehrabmp/kara-shop",
    repo: "https://github.com/mehrabmp/kara-shop",
    linkName: "karashop.vercel.app",
    link: "https://karashop.vercel.app/",
  },

  {
    description: "Tauri T3 App - Tauri App using T3 Stack",
    repoName: "tauri-t3-app",
    repo: "https://github.com/AyanavaKarmakar/tauri-t3-app",
    linkName: "tauri-t3-app.docs",
    link: "https://github.com/AyanavaKarmakar/tauri-t3-app#readme",
  },

  {
    description: "Azon - E-Commerce website",
    repoName: "andrewsolonets/Azon-Shop",
    repo: "https://github.com/andrewsolonets/Azon-Shop",
    linkName: "azon-shop.vercel.app",
    link: "https://azon-shop.vercel.app/",
  },

  {
    description: "Analyzemyrepo.com - Useful insights for any GitHub repo",
    repoName: "CrowdDotDev/analyzemyrepo",
    repo: "https://github.com/CrowdDotDev/analyzemyrepo",
    linkName: "analyzemyrepo.com",
    link: "https://analyzemyrepo.com",
  },

  {
    description:
      "Answer Overflow - Discord bot to index help channels into Google",
    repoName: "AnswerOverflow/AnswerOverflow",
    repo: "https://github.com/AnswerOverflow/AnswerOverflow",
    linkName: "answeroverflow.com",
    link: "https://www.answeroverflow.com/",
  },
  {
    description: "Hitori - Serverless Discord bot template",
    repoName: "astridlol/Hitori",
    repo: "https://github.com/astridlol/hitori",
    linkName: "(none)",
    link: "https://github.com/astridlol/hitori",
  },
];

export default function OpenSourceAppList({
  descriptionIntl = "Description",
  repoIntl = "Repo",
  linkIntl = "Link",
}: {
  descriptionIntl: string;
  repoIntl: string;
  linkIntl: string;
}) {
  return (
    <table>
      <tr>
        <th>{descriptionIntl}</th>
        <th>{repoIntl}</th>
        <th>{linkIntl}</th>
      </tr>
      {projects.map((project) => (
        <tr>
          <td>{project.description}</td>
          <td>
            <a href={project.repo}>{project.repoName}</a>
          </td>
          <td>
            <a href={project.link}>{project.linkName}</a>
            {project.linkExtra && <span> {project.linkExtra}</span>}
          </td>
        </tr>
      ))}
    </table>
  );
}
