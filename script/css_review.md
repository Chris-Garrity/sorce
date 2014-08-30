## CSS review

CSS is a __rule__ based language. 	Each rule __selects__ some element(s) in the DOM, and declares how they should look : selectors and declarations.

* **Element** selector
* **Contextual** selector
* **Class** selector
* **ID** selector
* Block and inline elements.
* __Floats__ and clearFix.

#### Inheritance

Some stylesheet properties inherit, others do not. Text properties (font size and colour) are passed down. Box model properties like border and margin do not. 

	/* Border is not passed down : solution: */
	h1, h2, p, em, img { border: 1px solid blue; }

__!important__ allows you to override the default inheritance rules.

	p {color: blue !important;}

The __more specific__ a selector, the more weight it is given in the cascade.



#### Block and inline elements

Block level elements **expand to the width of the browser window**, in normal document flow, unless styled.

#### CSS modules

Divided into separate modules for animation, layout etc.

#### Web Fonts

__WOFF__ Web Open Font Format packages font files for depolyment on web pages. IE9 supports WOFF, so multiple formats only needed for supporting older IE.

#### Font-sizes

EMs and percentages are __relative__ measurements. : they are based on the font-size of their __parent__ element.

	body { font-size: 100%; }	h1 { font-size: 150%; } /* 150% of 16 = 24 */
The em value works like a **scaling factor**, similar to a percentage.
	body { font-size: 100%; }	h1 { font-size: 1.5em; } /* 1.5 x 16 = 24 */
	They are based on the **inherited size** of the element. 
Their size is based on the **context** in which they are applied. The size increase or decrease will **compound** with each **nested** level. 

Note : __px__ treated as an __absolute__ measurement. __em,rem, vw, vh__ are relative units.
	body {font-size: 100%;} 
	/* 14/16 */	article {font-size: .875em;}
	/* 18/14 */	article h2 {font-size: 1.28571429em; }
Ethan Marcotte __target ÷ context = result formula__ handy for building fluid page layouts	
#### REMs
Base relative size calculations on the **root HTML** element, and get rid of the **compounding issue**. You may need to define a fallback for IE8-.
	html { font-size: 100%; }	/* 14/16 */	article {font-size: .875rem;}
	/* 18/16 */	article h2 {font-size: 1.125rem; }

#### Contextual Selectors

Four types

__Descendant__ 

	li em { .. }

__Child__

Only the direct descendant

	p > em { .. }
	
__Adjacent siblings__

Only style paragraphs that immediately follow H1's : both share the same parent.

	h1 + p { .. }
	
__General sibling__

Any element that shares a parent with the specified element. Not IE8-

	h1 ~ h2 { .. }
	
#### Specificity

* IDs more specific than
* CLASSES more specific than
* Contextual selectors
* Element selectors

		strong { color: red;}		h1 strong { color: blue; }
__h1 strong__ is more specific
	p { line-height: 1.2em; } 
	blockquote p { line-height: 1em; } 
	p.intro { line-height: 2em; }
	
Contextual selector is more specific than the paragraph rule. The class is more speciic than the contextual selector.

#### Line height

Minimum vertical height between baselines. Like **leading**

#### Background color

A background color fills the canvas behind the element that includes the con- tent area, and any padding (extra space) added around the content, extending behind the border out to its outer edge. The background will not extend into the margin.

#### Opacity

opacity setting applies to the entire element—both the foreground and the background (if one has been set). If you want to just affect one or the other, use an RGBa color value instead.
	
#### Psuedo-classes

Required order for link pseudo-classes is **:link, :visited, :focus, :hover, :active**

#### Structural pseudo-classes

**Selectivizr** provides support for IE8-

:nth-of-type()
:first-child
:last-child
:empty

#### Generated content :before :after

This works in IE8.

	p:before {		content: "Once upon a time: ";
	}
	p:after {		content: " The End.";	}

#### Attribute selectors

Equals

	img[title="first grade"]
	
Contains

	img[title*="grade"]
	
Starts

	img[src^="/images/icons"]
	
Ends

	a[href$=".pdf"]
	
#### Background attachment

	body {		background-image: url(images/bigstar.gif); 
		background-repeat: no-repeat; 
		background-position: center 400px; 
		background-attachment: fixed;	}
	
## Box Model

Browser treats each element as being containing within a rectangular box : these properties can be modified __border, margin, padding, background, width, height__

By default, a block element will be as wide as containing element, or browser window.

#### Box sizing

The default __content box__ method adds padding/borders to the content size of an element.

The __border box__ method, shrinks content area to ensure padding/borders does not increase overall width.

	* {
		-moz-box-sizing: border-box; 
		box-sizing: border-box;
	}
	
There may be a conflict with **max-width** and **min-width**.

Need to include a __doctype__ for IE6-7, or they revert to their own box model.

#### Padding

	padding: top right bottom left
	padding: top/bottom left/right
	
#### Margins

	/* Add 20% margin to sides */
	margin : { 0 20% }
	
##### Collapsing margins

Vertically adjacent top/bottom margins **collapse**, to display only the larger of the 2 values. Left/right margins do not collapse.

##### Margins on inline elements

Top/bottom margins are not added to **inline elements**.

## Display property

Create a horizontal navigation bar

	ul.navigation li { display: inline; }
	
Create height/width for an inline anchor element

	ul.navigation li a { display: block; }
	
#### Display none

This removes content from the normal document flow, but **does not stop it downloading**.

#### inline-block ?

## Normal flow

Block elements **stack** on top of each other, and fill the available width of the browser window/containing element. Inline elements flow within block elements on the same line.

## Floats

A floated element moves as far to the left/right within the containing element. **Following content** will wrap around it.

#### Characteristics

* **Island in a stream** : floats are removed from the normal flow, but content needs to flow around them.
* Floats remain within the **content area** of the containing element, i.e. not the padding.
* Provide a **width** for floated text elements.
* Floated inline elements display **margins on all four sides**, like a block element
* Margins on floated elements do not collapse.

#### Collapsing container

A fix for the collapsing height of a container element, containing floated elements.

	container {		overflow: auto;		width: 100%; 	}
#### Floats for column layout.
## Positioning
#### Static
The normal document flow
#### Relative	Move relative to its original position. The default position is preserved as empty space.

#### Absolute

Positioned relative to containing element/browser window. Removed from document flow, and default space closes up.

##### Positioning context

If the element has an **ancestor** (i.e., is contained within an element) that has its **position set to relative, absolute, or fixed**, the element will be positioned relative to the edges of that element.

Otherwise, it is positioned relative to the root HTML element

The most common way to make an element into a containing block is to set the position to relative, but don’t move it with offset values. 

	p {
		position: relative;
		/* positioned relative to the padding edge */
	}

__Applications__ : use for search box top right, or overhanging image.

Absolutely positioned elements always behave as **block-level** elements.

#### Fixed

Element stays in 1 position, even when page scrolls. Positioned relative to viewport/window, not a containing element.

Works just like absolute positioning. Offsets are relative to window/viewport.
	

