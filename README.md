flexbox-grid-system
===================

Simple, flexible and customizable mobile-first grid system based on CSS3 flexbox and custom html attributes with fractional width values.

## Usage

Simply add `grid.scss` or `grid.css` to your project, and start using the attributes and values outlined below and on the [demo site](link).

```
<div grid>
  <div grid-item="1/2">...</div>
  <div grid-item="1/2">...</div>
</div>
```

All `grid-item` elements are full width by default. Use the following values to apply widths.

* 1/2
* 1/3
* 2/3
* 1/4
* 3/4
* auto

In order to handle different widths at different breakpoints, flexbox-grid-system uses the `fraction:breakpoint` syntax. Currently defined breakpoints are `lap` and `desk`. To apply a different width to a `grid-item` at those breakpoints, adjust the value of `grid-item` accordingly.

```
<div grid>
  <div grid-item="1/2 1/3:lap 1/4:desk">...</div>
  <div grid-item="1/2 1/3:lap 1/4:desk">...</div>
</div>
```

Additional formatting can be applied at the `grid` level.

* justify-start
* justify-center
* justify-end
* align-top
* align-middle
* align-bottom
* distribute-space-around
* distribute-space-between
* reverse

```
<div grid="justify-center align-middle reverse">
  <div grid-item="1/3:lap">...</div>
  <div grid-item="1/3:lap">...</div>
</div>
```

## Customization

### Setup

First install all project dependancies.

```
npm install
```

Then, run `gulp` to begin watching the `src` directory for changes to `.scss` files. Gulp will compile to the `build` directory, and automatically reload all browsers connected to through BrowserSync.

### Configuration

In `grid.scss`, simply adjust the following variables:

* `$gutter`: Amount of space between grid items.
* `$grid-targets`: SASS map specifying breakpoints used for namespacing grid item widths. Edit the names and/or widths of the items in this map. You could call them medium/large/xlarge, tablet/desktop/tv, or even [baby/mama/papa](http://css-tricks.com/naming-media-queries/). The values you choose will ultimately be used to generate `grid-item` values.
* `$grid-proportions`: SASS map specifying available widths for grid items. Need additional values for `grid-items`, eg: fifths (1/5) or sixths (1/6)? Add them here. Don't need fourths (1/4, 3/4) in your build? Simply remove them.

## Credits

Inspired by:

* [Polymer layout attributes](https://www.polymer-project.org/docs/polymer/layout-attrs.html)
* [AMCSS](http://amcss.github.io/)
* [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) and many other grid systems!
