<!-- target: slider -->
<ul>
	<!-- for: ${sliderContent} as ${content} -->
	<li class="slider-item" style="background-image: url('${content.img}')">
		<div class="inner">
			<h1 class="travel-name">${content.title}</h1>
			<a class="travel-link no-underline" href="${content.link}">${content.detail}
				<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			</a>
		</div>
	</li>
	<!-- /for -->
</ul>