## Sorce 2-day HTML,CSS,RWD Course Plan

## HTML

#### Introdction

* **Four front-end web technologies** : HTML, CSS, JS, Responsive Design
* A **separation** of concerns? : HTML, CSS.
* HTML for **structure/content**?
* What is **markup** : John Elton 42 Green Street.
* **Attributes** : the glue that connects CSS, HTML and JS.
* What is the **DOM**?
* HTML **audience** : users, search engines, screen readers, software tools,  teams.

#### HTML structure, independent of CSS layout.

* What is a **DIV?**

		html/sanfrancisco
			
#### Block Inline

* Occupies 100% of **width** of containing element, or browser.
* Demo **display types** : block,inline,inline-block,none in browser tools.
* What is a **RESET** stylesheet?
* A **single column** layout -> MOBILE FIRST
* Tools : Pesticide

		html/blockInline

#### LISTs 

* A semantically related group of things.
* Visual layout is independent
* **Images** : tags with src attributes
* **Links** : hypertext with href attributes

		html/players
		html/calendar
		
#### Attributes

* Review attributes : **classes, ids, href, src**
* Provide **GLUE** to connect CSS and JS to your HTML.
* Custom data attributes with data prefix : IE7.
* Prefix with organisation metadata : data-sorce-id

		html/attributes
	
#### TABLEs

* Avoid tables for layout
* Separation of content and design : particularly since emergence RWD.

		html/tables
	
## HTML5

#### Intro

* A **collection** of features
* A work in progress 2022.
* Varied **support** : CanIUse.com and html5please.com
* **Modernizr** for runtime checking.
* **Polyfills** plug gap for older browsers.

#### Semantic tags

* Replace DIVs with **section/article/aside/nav/header/footer/main**
* No common vocabulary for DIVs.
* Better for search engines, screen readers, software tools, semantic web, outliners.
* Parts of a page independent/**republishable** as articles
* Multiple **heading** systems within a page.
* Use of **figure** and **figcaption**.
* Use of **SHIM** and display:block declarations for IE6-8.
* DIVs still used for stylistic hooks and wrappers.

		html5/semanticTags
	
#### Canvas

* Data visualisation using Javascript.
* Creates dynamic bitmaps, in contrast to SVG.

		html5/canvas

#### Forms, LocalStorage

* Demo forms and localStorage

		
## CSS

* A **rule** based language for styling and layout.
* **Cascading** set of rules.
* Review **element, class, id, and contextual/descendant** selectors.
* **Reset** stylesheets.

		selector {
			property:value;
			property:value;
		}	


#### Tower London

* DIVs, Classes, IDs, contextual selectors.

		css/towerLondon

#### Contextual selectors

* Based on relative position in the DOM.
 
/* A DIV with a class of "history" */
div.history {}

/* A DIV that contains an element with a class of "history" */
div .history {}

/* An element with a class of "history" that contains a DIV */
.history div {}

/* An element with a class of "history" , whose immediate descendant is a DIV */
.history > div {}

	css/contextSelectors
		
#### BOX-SIZING

* Review of the box model.
* How does box-sizing change this?
* Collapsing Float
* How to check browser support

		css/box_sizing
		
#### Style Buttons

* Use box model properties
* Understand use of relative pathnames on background images
* Use of image offsets on background images
* Refactoring into separate classes, to reduce repetitive code.

		css/styleButtons

#### Attribute selectors

* Complex selectors allow precise selection of subsets.

		css/attributeSelectors

#### Specificity

* !important rules
* ID rules
* Class rules
* Element rules
* Inherited rules: e.g. span within paragraph. Fonts inherited (except links); borders not.
* Defaults.
* Longer selectors have more specificity.
* If 2 rules are equal, use the one that is declared last. 

	css/specificity

#### Positioning

* __Static__ default
* __Relative__ positioning leaves a space, where the element should be.
* __Absolute__ does not leave a space : positioned withing containing non-static element. Do not have default 100% width.
* __Fixed__ element stays in place, even after scrolling.

		css/relativeAbsolute
		
#### GRIDs

* Based around use of **floats** and **width**
* Multiple classes are applied to each DIV.

		css/grids/kaplan
		css/grids/science

#### Text

* Use of EMs and REMs for relatively sized text.
* Review of all units.

## Responsive

* Same content (HTML), many layouts (CSS)
* Combine fluid grids, media queries, responsive images, responsive thinking.

#### Media queries

	mq/rows
	mq/sentence

####  Tables, calendars

	responsive/tables
	responsive/calendars
	
####  Images

	images/IconFont	images/imageSprite	images/PictureFill	images/svgSprite
#### Layout
* Float grids
* FlexBox

#### Text

* EMs, REMs.

#### Javascript

	js/ajax_include
	js/bridgeTavern







