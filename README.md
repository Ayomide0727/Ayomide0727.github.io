# Ayomide Aisida - Portfolio

Personal portfolio site: https://ayomide0727.github.io

Built with React 17, Material-UI v4 and react-router. It started from the open-source
[developer-portfolio](https://github.com/hhhrrrttt222111/developer-portfolio) template
(Apache 2.0, see [LICENSE](LICENSE)).

## Run locally

```bash
npm install --legacy-peer-deps
npm start
```

## Deploy

```bash
npm run deploy   # builds and publishes to the gh-pages branch
```

## Editing content

All site content lives in `src/data/`, one file per section:

| File | Section |
| --- | --- |
| `headerData.js`, `aboutData.js` | Landing and About |
| `educationData.js`, `experienceData.js` | Education and Experience |
| `projectsData.js`, `skillsData.js` | Projects and Skills |
| `certificationData.js`, `servicesData.js` | Certifications and Organizations |
| `testimonialsData.js`, `pitchVideoData.js` | Testimonials and Elevator Pitch |
| `contactsData.js`, `socialsData.js` | Contact details and links |

The contact form posts to a Formspree endpoint set in `contactsData.js`.
The elevator pitch video is `public/elevator-pitch.MOV`.
