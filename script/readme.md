## Sorce

## HTML

#### Introduction

* If CSS is for styling, what is purpose of HTML : **structure/meaning**
* Journalistic decisions : organising parts of page, and assigning relative importance.
* HTML for : users, search engines, screen readers, software tools, professional teams.
* The point of **markup** : John Elton 42 Green Street.
* A separation of concerns : why? 
* What are the hooks between HTML, CSS and JS : IDs and CLASSes ?
* Do marked up elements contain content -> images dont
* What are attributes, and what is there role?
* What is the DOM?

••••DEMO the intro example

#### Block Inline

•••• Block Inline

* Pesticide
* Occupies 100% of containing element, or browser.
* Demo differences block,inline,inline-block,none in browser tools.
* Why OUTLINE instead of BORDER?
* What is purpose of RESET stylesheet?
* Why is this single column layout relevant to RWD (Mobile First)

#### LIST

•••• List
* Convert this textual list into gallery of clickable images, which link to pages on the Oreilly site : just using HTML.

#### Attributes

* Custom data attributes with data prefix : IE7.
* Prefix with organisation metadata : data-sorce-id

		document.getElementById("rembrandt").getAttribute("data-born")
		
#### TABLEs

##### Why avoid tables for layout?
* Future changes to browser rendering engines could break table-layout code.
* If layout changes, every HTML page has to be changed, not just 1 CSS page.
* Slower layout for rendering engine. Can cache reused CSS file.
* Separation of content and design
* Parsing by software tools easier.

* Construct using table/tr/th/td.
* Problem with this in responsive cases.

#### Skye
		
## HTML5

••••DEMO HTML5 slides

* Empty
* Semantic
* Canvas
* Detect
* Forms

## CSS

* Need to move out of single-column HTML into styled layouts.
* A rule based language for styling HTML.
* Rules consist of selectors and declarations.

		selector { declarations; }
		p { color:green; }
		
* Review element, class, id, and contextual/descendant selectors.
* Separate file, but HTML email still requires embedded styles.

•••• Confirm contextual/descendant selectors : CORNWALL.


#### Specificity

* !important rules
* ID rules
* Class rules
* Element rules
* Inherited rules: e.g. span within paragraph. Fonts inherited (except links); borders not.
* Defaults.

Longer selectors have more specificity.
If 2 rules are equal, use the one that is declared last. 

#### Positioning

* __Static__ default
* __Relative__ positioning leaves a space, where the element should be.
* __Absolute__ does not leave a space : positioned withing containing non-static element. Do not have default 100% width.
* __Fixed__ element stays in place, even after scrolling.













