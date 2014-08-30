## Responsive Day Out 2

#### Stephen Hay.

* Focus on content, not the containers. 
* Ensure core content is the same on all devices.

#### Rachel Andrews

The new CSS GRID module.

#### Ideas

Element queries : if a specific DOM element reaches specific width, create CSS rule to react.

#### Level 4 media queries

Test presence of JS

	@media scripting
	
Test light levels (not consistent across devices)

	@media light-level
	
Multiple input devices : which is primary

	@media pointer
	
React to hover state

	@media hover
	
Turn off animation on slow devices

	@media update-freq
	
No support for language localisation : diff languages are more verbose, which may trigger layout changes.

Existing CSS (float left/right) does not make sense in right-left languages.

Need to establish a common vocabulary for responsive patterns : e.g. when layouts break.

#### Ethan Marcotte

Use nth-child(2n) : avoids need for row classes in markup.

GruntIcon