<!-- target: slider -->
<div id="index-carousel" class="carousel slide slider-container" data-ride="carousel">

	<ol class="carousel-indicators">
		<!-- for: ${sliderContent} as ${content}, ${index} -->
		<!-- if: ${index} == 0 -->
		<li data-target="#index-carousel" data-slide-to="${index}" class="active"></li>
		<!-- else -->
		<li data-target="#index-carousel" data-slide-to="${index}"></li>
		<!-- /if -->
		<!-- /for -->
	</ol>

	<div class="carousel-inner" role="listbox">
		<!-- for: ${sliderContent} as ${content}, ${index} -->
		<!-- if: ${index} == 0 -->
		<div class="item active">
			<a class="no-underline" href="${content.link}">
				<img src="${content.img}" alt="${content.title}" class="img-responsive">
			</a>
			<div class="carousel-caption"></div>
		</div>
		<!-- else -->
		<div class="item">
			<a class="no-underline" href="${content.link}">
				<img src="${content.img}" alt="${content.title}" class="img-responsive">
			</a>
			<div class="carousel-caption"></div>
		</div>
		<!-- /if -->
		<!-- /for -->
	</div>

	<a class="left carousel-control" href="#index-carousel" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
		<a class="right carousel-control" href="#index-carousel" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>