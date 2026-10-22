# Kripton

Kripton is a small, interactive educational website about krypton (Kr), the
36th element of the periodic table. The site presents scientific information,
historical milestones, common uses, and visual explanations through a dark
blue/pink interface inspired by the element's characteristic light.

The project is a static website written with HTML, CSS, and vanilla
JavaScript. It has no build step, backend, package manager, or runtime
dependency.

## Features

### Information section

- Introduces krypton as the 36th element in the periodic table and a member of
  the noble gases.
- Displays a stylized element card with:
  - Symbol: `Kr`
  - Atomic number: `36`
  - Element name: Krypton
- Clicking the highlighted **Kripton** text opens a modal containing detailed
  properties, including atomic mass, melting and boiling points, physical
  state, density, oxidation number, ionization energy, atomic radius,
  electronic configuration, and terrestrial abundance.
- Clicking **gas nobili** opens a modal showing the periodic table image.
- Clicking the warning icon opens a modal explaining krypton's safety,
  asphyxiation risk at high concentrations, and radioactive isotopes.

### History timeline

The **Storia** section presents three clickable milestones:

- **1898** – Discovery of krypton by Sir William Ramsay and Morris Travers,
  with an image of the scientists.
- **1960** – The use of a krypton-86 spectral line in the official definition
  of the metre.
- **1963** – The first synthesis of krypton difluoride (`KrF2`), demonstrating
  that noble gases can form compounds under suitable conditions.

Clicking each year opens a modal with additional historical information.

### Uses section

The **Utilizzi** section describes applications of krypton in:

- Neon lighting
- Gas lasers
- Medical and ophthalmic treatments
- Semiconductor and photolithography processes
- Radioactive dating
- Aerospace ion propulsion
- Scientific research

### Interactive lamp

The lamp at the bottom of the page is drawn entirely with HTML elements and
CSS, without an external illustration. **When you hover over the light with
the mouse, the light turns on:** its internal elements change to pink and
receive a pink glow. When the pointer leaves the lamp, it returns to its
unlit gray appearance.

Clicking the lamp opens a curiosity modal about krypton hydride crystals
(`Kr(H2)4`) and includes a structure illustration. A standalone version of
the lamp is also available in `lampadina.html`.

### Navigation and modal behavior

- A fixed navigation bar links to the **Info**, **Storia**, and **Utilizzi**
  sections.
- The navigation bar appears after the user scrolls down and hides again near
  the top of the page.
- Smooth scrolling is enabled for internal navigation links.
- All informational overlays can be closed with the `X` control.
- While a modal is open, page scrolling is disabled so the modal remains the
  focus of the interaction.
- The custom scrollbar changes color when hovered.

## Project structure

```text
.
├── index.html                         Main website page
├── lampadina.html                     Standalone interactive lamp demo
├── main.js                             Navigation, modal, and lamp behavior
├── style.css                           Layout, typography, colors, and animations
├── README.md                           Project documentation
└── images/
    ├── 491px-Krypton_hydride_structure.png
    ├── Tavola_periodica.svg            Periodic table illustration
    ├── favicon.jpg                     Browser tab icon
    └── scienziati.png                  Ramsay and Travers image
```

## Technologies

- HTML5
- CSS3, including Grid, Flexbox, transitions, custom properties, and CSS
  shapes
- Vanilla JavaScript
- Google Fonts loaded by `style.css`:
  - Nova Square
  - Roboto
  - Roboto Mono
  - Sacramento

## Running the project

Because this is a static site, no installation is required.

### Open directly

Open `index.html` in a modern browser.

### Serve locally

From the project directory, use any static file server. For example, with
Python installed:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000/> in a browser.

Serving the files over HTTP is recommended because it provides behavior closer
to a deployed website and avoids restrictions that some browsers apply to
local files.

## Browser support

The site is intended for current desktop and mobile browsers with support for
standard HTML5, CSS3, JavaScript DOM APIs, CSS Grid, Flexbox, and CSS
transforms.

## Content language

The user-facing content is primarily written in Italian. The document
structure declares English in the HTML `lang` attribute, while section titles,
descriptions, and modal content remain in Italian.
