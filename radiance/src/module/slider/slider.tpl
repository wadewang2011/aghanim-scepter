<!-- target: slider -->
<ul>
	<!-- for: ${sliderContent} as ${content} -->
	<li class="slider-item" style="background-image: url('${content.img}')">
		<div class="slider-item-inner">
			<h1 class="travel-name">${content.title}</h1>
			<a class="travel-link" href="${content.link}">${content.detail}&nbsp;&nbsp;
				<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			</a>
		</div>
	</li>
	<!-- /for -->
</ul>